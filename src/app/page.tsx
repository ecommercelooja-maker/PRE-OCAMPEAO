import { GridExemplos } from "@/components/Exemplos";
import { Indicar } from "@/components/Cliente";
import { Trofeu } from "@/components/Marca";
import { Botoes, Cabecalho, Globais, Rodape } from "@/components/Site";
import { LOJAS, NICHOS, TELEGRAM, TEXTO_AFILIADO } from "@/config";

// Pódio do topo: as três checagens que toda oferta passa antes de ir para o grupo.
const PODIO = [
  { lugar: "2º", titulo: "Cupom testado", classe: "prata" },
  { lugar: "1º", titulo: "Preço caiu de verdade", classe: "ouro" },
  { lugar: "3º", titulo: "Vendedor confiável", classe: "bronze" },
];

const FASES = [
  {
    fase: "Eliminatória",
    titulo: "A gente olha as lojas",
    texto: `Acompanhamos ${LOJAS.join(", ").replace(/, ([^,]*)$/, " e $1")} ao longo do dia, atrás de queda de preço.`,
  },
  {
    fase: "Semifinal",
    titulo: "Confere histórico e cupom",
    texto: "Comparamos com o histórico de preço e testamos o cupom no carrinho. Desconto inflado é eliminado aqui.",
  },
  {
    fase: "Final",
    titulo: "Só a campeã vai pro grupo",
    texto: "A oferta chega com foto e link da loja. Você compra direto no site dela, se quiser.",
  },
];

const PLACAR: [string, string][] = [
  [String(LOJAS.length), "lojas acompanhadas"],
  [String(Object.keys(NICHOS).length), "nichos de produto"],
  ["1 min", "para entrar"],
  ["0", "cadastro ou CPF"],
];

const CATEGORIAS = [
  { titulo: "Liquidações das lojas", texto: "Queima de estoque e promoções da própria loja. Avisamos assim que encontramos." },
  { titulo: "Garimpo diário", texto: "Coisa nova aparece o dia todo. Você não precisa procurar: quando precisar, abre o grupo." },
  { titulo: "Cupons que funcionam", texto: "Cupons que só descontam no carrinho. Mandamos o código junto com a oferta." },
];

const MANTEMOS = [
  ["A loja é quem paga", "Quando você compra pelo nosso link, a loja nos repassa uma comissão. Seu preço é exatamente o mesmo."],
  ["Só vale se a oferta for boa", "Oferta ruim ninguém compra. Nosso interesse é o mesmo que o seu: desconto que valha a pena."],
  ["Não vendemos nada", "Sem estoque, sem pagamento, sem cadastro. Quem vende, cobra e entrega é a loja."],
  ["Sem plano pago", "Não tem assinatura nem “acesso VIP”. Entra e sai quando quiser."],
];

const DUVIDAS: [string, string][] = [
  ["Tem algum custo para participar?", "Não. Não cobramos entrada nem mensalidade. A gente se mantém com comissões das lojas, como explicado acima."],
  [
    "Vocês ganham alguma coisa com os links?",
    `Sim. Participamos dos programas de afiliados de lojas como ${LOJAS.join(", ")} e recebemos uma comissão quando você compra pelo nosso link, sem nenhum custo extra para você. É isso que mantém o grupo funcionando, e é por isso que só enviamos desconto real.`,
  ],
  ["Vocês vendem os produtos?", "Não. Não somos loja. A compra, o pagamento, a entrega e a garantia são da loja, e qualquer questão do pedido é resolvida direto com ela."],
  [
    "Meu número fica visível?",
    "O grupo é fechado para conversa: só o administrador envia mensagens, então ninguém te chama no privado. Como em qualquer grupo do WhatsApp, os participantes podem ver o número uns dos outros.",
  ],
  ["Quantas mensagens por dia?", "Só o que vale a pena. Se achar muito, dá para silenciar o grupo sem sair, o próprio WhatsApp permite."],
  ["Como faço para sair?", "Pelo próprio WhatsApp, em dois toques, quando quiser. Sem precisar avisar ninguém."],
];

export default function Home() {
  return (
    <>
      <Cabecalho home />

      {/* Topo: chamada + pódio das checagens */}
      <header className="hero" data-origem="hero">
        <div className="wrap hero-grade">
          <div className="hero-texto">
            <p className="selo">
              <span className="selo-ponto" aria-hidden="true" /> Grupo de ofertas no WhatsApp{TELEGRAM && " e no Telegram"}
            </p>
            <h1>
              Só entra no grupo
              <br />o <em>preço campeão</em>
            </h1>
            <p className="hero-sub">
              A gente garimpa <b>eletrônicos, eletrodomésticos e enxoval</b> nas lojas online, confere se o desconto é
              real e manda só o que passou no filtro. Deixe no silencioso e abra quando for comprar.
            </p>
            <Botoes escuro texto="Quero ver as ofertas" />
            <ul className="hero-garantias">
              <li>Sem custo adicional</li>
              <li>Sem cadastro</li>
              <li>Só o admin envia</li>
            </ul>
          </div>

          <div className="podio" aria-label="As três checagens de toda oferta">
            <div className="podio-trofeu">
              <Trofeu taca="#f5b301" detalhe="#0b3d2e" />
            </div>
            <ol className="podio-degraus">
              {PODIO.map((p) => (
                <li key={p.lugar} className={`degrau ${p.classe}`}>
                  <span className="degrau-titulo">{p.titulo}</span>
                  <span className="degrau-bloco">{p.lugar}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </header>

      {/* Lojas: só o nome, em texto (sem logotipos) */}
      <section className="lojas" aria-label="Lojas onde encontramos ofertas">
        <div className="lojas-trilho" aria-hidden="true">
          {Array.from({ length: 4 }, (_, i) => (
            <span key={i}>
              {LOJAS.map((l) => (
                <span key={l} className="lojas-nome">
                  {l}
                </span>
              ))}
            </span>
          ))}
        </div>
        <p className="sr">Lojas onde encontramos ofertas: {LOJAS.join(", ")}.</p>
      </section>

      <main>
        {/* Placar */}
        <section className="placar-secao" aria-label="Em números">
          <div className="wrap">
            <div className="placar">
              {PLACAR.map(([n, t]) => (
                <div key={t} className="placar-item rv">
                  <b>{n}</b>
                  <span>{t}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Como funciona: chaveamento */}
        <section className="secao" id="como-funciona">
          <div className="wrap">
            <p className="sobretitulo rv">Como funciona</p>
            <h2 className="titulo rv">Como uma oferta vira campeã</h2>
            <p className="sub rv">Toda oferta disputa três fases antes de chegar até você.</p>
            <ol className="fases">
              {FASES.map((f, i) => (
                <li key={f.fase} className="fase rv" style={{ transitionDelay: `${i * 100}ms` }}>
                  <span className="fase-n">{String(i + 1).padStart(2, "0")}</span>
                  <span className="fase-nome">{f.fase}</span>
                  <h3>{f.titulo}</h3>
                  <p>{f.texto}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Exemplos estáticos */}
        <section className="secao secao-creme" id="exemplos" data-origem="exemplos">
          <div className="wrap">
            <p className="sobretitulo rv">Exemplos</p>
            <h2 className="titulo rv">Campeãs que já passaram pelo grupo</h2>
            <p className="sub rv">
              Alguns produtos que já divulgamos. As ofertas do dia, com preço e link da loja, são enviadas dentro do
              grupo.
            </p>
            <GridExemplos />
            <div className="centro">
              <Botoes texto="Participe do grupo de promoções" />
            </div>
          </div>
        </section>

        {/* O que chega no grupo */}
        <section className="secao">
          <div className="wrap">
            <p className="sobretitulo rv">O que chega no grupo</p>
            <h2 className="titulo rv">O que a gente caça pra você</h2>
            <div className="cards-3">
              {CATEGORIAS.map((c, i) => (
                <article key={c.titulo} className="card rv" style={{ transitionDelay: `${i * 90}ms` }}>
                  <span className="card-medalha" aria-hidden="true">
                    {i + 1}
                  </span>
                  <h3>{c.titulo}</h3>
                  <p>{c.texto}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Como nos mantemos (divulgação de afiliados) */}
        <section className="secao secao-escura" id="como-nos-mantemos">
          <div className="wrap mantemos">
            <div className="mantemos-topo rv">
              <p className="sobretitulo claro">A pergunta de todo mundo</p>
              <h2 className="titulo claro">&ldquo;E como vocês ganham com isso?&rdquo;</h2>
              <p className="mantemos-aviso">{TEXTO_AFILIADO}</p>
            </div>
            <ol className="mantemos-lista">
              {MANTEMOS.map(([t, p], i) => (
                <li key={t} className="rv" style={{ transitionDelay: `${i * 80}ms` }}>
                  <h3>{t}</h3>
                  <p>{p}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Fair play */}
        <section className="secao">
          <div className="wrap">
            <div className="fairplay rv">
              <div>
                <p className="sobretitulo esquerda">Fair play</p>
                <h2 className="titulo esquerda">Nosso compromisso com você</h2>
              </div>
              <ul>
                <li>
                  <b>Ninguém te chama no privado.</b> Só o administrador envia e o grupo é fechado para conversa.
                </li>
                <li>
                  <b>Sem e-mail, sem CPF, sem cadastro.</b> Você entra pelo convite do próprio WhatsApp.
                </li>
                <li>
                  <b>Desconto falso é desclassificado.</b> Se o preço não caiu de verdade, a oferta não é enviada.
                </li>
                <li>
                  <b>A compra é na loja.</b> Pagamento, entrega e garantia são da loja onde você comprar.
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Indique */}
        <section className="secao secao-creme" id="indique">
          <div className="wrap indique rv">
            <p className="sobretitulo">Passe a bola</p>
            <h2 className="titulo">Tem um amigo que ama promoção?</h2>
            <p className="sub">Mande o link do grupo para a família, os amigos ou aquele grupo do trabalho.</p>
            <Indicar />
          </div>
        </section>

        {/* Dúvidas */}
        <section className="secao" id="duvidas">
          <div className="wrap estreito">
            <p className="sobretitulo rv">Dúvidas</p>
            <h2 className="titulo rv">Ficou alguma dúvida?</h2>
            <div className="duvidas rv">
              {DUVIDAS.map(([q, r], i) => (
                <details key={q} open={i === 0}>
                  <summary>{q}</summary>
                  <p>{r}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Fechamento */}
        <section className="fechamento" data-origem="fechamento">
          <div className="wrap">
            <div className="fechamento-trofeu" aria-hidden="true">
              <Trofeu />
            </div>
            <h2>
              Quer pagar menos?
              <br />
              <em>Entra pro time.</em>
            </h2>
            <p>Sem cadastro e sem mensalidade. Deixe silenciado e consulte quando precisar comprar alguma coisa.</p>
            <Botoes escuro />
          </div>
        </section>
      </main>

      <Rodape home />
      <Globais />
    </>
  );
}
