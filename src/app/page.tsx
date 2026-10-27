import { GridExemplos } from "@/components/Exemplos";
import { Indicar, VideoLoop } from "@/components/Cliente";
import { Anim, Foto } from "@/components/Midia";
import { Botoes, Cabecalho, Globais, Rodape } from "@/components/Site";
import { LOJAS, NICHOS, TELEGRAM, TEXTO_AFILIADO } from "@/config";

// Pódio: as três checagens que toda oferta passa antes de ir para o grupo.
const PODIO = [
  { lugar: "2º", titulo: "Cupom testado", texto: "Testamos no carrinho antes de mandar.", classe: "prata", emoji: "alvo" },
  { lugar: "1º", titulo: "Preço caiu de verdade", texto: "Conferimos no histórico de preço.", classe: "ouro", emoji: "trofeu" },
  { lugar: "3º", titulo: "Vendedor confiável", texto: "Priorizamos lojas bem avaliadas.", classe: "bronze", emoji: "diamante" },
];

const FASES = [
  {
    fase: "Eliminatória",
    emoji: "olhos",
    titulo: "A gente olha as lojas",
    texto: `Acompanhamos ${LOJAS.join(", ").replace(/, ([^,]*)$/, " e $1")} ao longo do dia, atrás de queda de preço.`,
  },
  {
    fase: "Semifinal",
    emoji: "alvo",
    titulo: "Confere histórico e cupom",
    texto: "Comparamos com o histórico de preço e testamos o cupom no carrinho. Desconto inflado é eliminado aqui.",
  },
  {
    fase: "Final",
    emoji: "trofeu",
    titulo: "Só a campeã vai pro grupo",
    texto: "A oferta chega com foto e link da loja. Você compra direto no site dela, se quiser.",
  },
];

const PLACAR: [string, string, string][] = [
  [String(LOJAS.length), "lojas acompanhadas", "carrinho"],
  [String(Object.keys(NICHOS).length), "nichos de produto", "caixa"],
  ["1 min", "para entrar", "foguete"],
  ["0", "cadastro ou CPF", "check"],
];

const CATEGORIAS = [
  { emoji: "sirene", titulo: "Liquidações das lojas", texto: "Queima de estoque e promoções da própria loja. Avisamos assim que encontramos." },
  { emoji: "alarme", titulo: "Garimpo diário", texto: "Coisa nova aparece o dia todo. Você não precisa procurar: quando precisar, abre o grupo." },
  { emoji: "presente", titulo: "Cupons que funcionam", texto: "Cupons que só descontam no carrinho. Mandamos o código junto com a oferta." },
];

const MANTEMOS = [
  ["A loja é quem paga", "Quando você compra pelo nosso link, a loja nos repassa uma comissão. Seu preço é exatamente o mesmo."],
  ["Só vale se a oferta for boa", "Oferta ruim ninguém compra. Nosso interesse é o mesmo que o seu: desconto que valha a pena."],
  ["Não vendemos nada", "Sem estoque, sem pagamento, sem cadastro. Quem vende, cobra e entrega é a loja."],
  ["Sem plano pago", "Não tem assinatura nem “acesso VIP”. Entra e sai quando quiser."],
];

// [foto, legenda, emoji, texto alternativo]
const GALERIA_1: [string, string, string, string][] = [
  ["comemora", "Achou a oferta", "estrelas", "Mulher comemorando com o celular na mão"],
  ["amigas-shopping", "Compras com as amigas", "presente", "Amigas fazendo compras no shopping"],
  ["recebeu", "Encomenda chegando", "caixa", "Mulher sorrindo com uma caixa nas mãos"],
  ["sacolas", "Voltando das compras", "carrinho", "Pessoa segurando várias sacolas de compras"],
  ["rindo", "Conferindo o grupo", "olhos", "Jovem rindo enquanto olha o celular"],
  ["estilo", "Dia de compras", "coroa", "Mulher de óculos escuros com sacolas de compras"],
];
const GALERIA_2: [string, string, string, string][] = [
  ["acenando", "Mandou pros amigos", "maos", "Mulher acenando em uma chamada de vídeo no celular"],
  ["shopping-caminhando", "Passeio no shopping", "fogo", "Amigas caminhando no shopping com sacolas"],
  ["caixinha", "Presente embalado", "presente", "Mulher abrindo uma caixa de presente"],
  ["cartao-sofa", "Comprando pelo celular", "dinheiro-voando", "Mulher no sofá com cartão e celular na mão"],
  ["sacolas-rua", "Compras do mês", "carrinho", "Pessoas andando na rua com sacolas de compras"],
  ["entrega", "Chegou em casa", "caixa", "Entregador entregando uma caixa"],
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

function LinhaGaleria({ itens, reverso = false }: { itens: [string, string, string, string][]; reverso?: boolean }) {
  return (
    <div className={`galeria-linha${reverso ? " reverso" : ""}`}>
      {[...itens, ...itens].map(([foto, legenda, emoji, alt], i) => (
        // A segunda metade repete a primeira só para a rolagem contínua: fica oculta para leitores de tela.
        <figure key={i} className="galeria-item" aria-hidden={i >= itens.length || undefined}>
          <Foto nome={foto} alt={alt} sizes="(min-width: 900px) 340px, 70vw" />
          <figcaption>
            <Anim n={emoji} t={24} /> {legenda}
          </figcaption>
        </figure>
      ))}
    </div>
  );
}

// Confete do fechamento: posições fixas para o HTML do servidor e do navegador serem iguais.
const CONFETE = Array.from({ length: 28 }, (_, i) => ({
  left: `${(i * 37) % 100}%`,
  animationDelay: `${(i % 9) * -0.7}s`,
  animationDuration: `${5 + (i % 5)}s`,
}));

export default function Home() {
  return (
    <>
      <Cabecalho home />

      {/* Topo: vídeo de fundo, chamada e foto com selos animados por cima */}
      <header className="hero" data-origem="hero">
        <div className="hero-fundo" aria-hidden="true">
          <VideoLoop nome="hero" className="hero-video" />
        </div>
        <div className="wrap hero-grade">
          <div className="hero-texto">
            <p className="selo">
              <span className="selo-ponto" aria-hidden="true" /> Grupo de ofertas no WhatsApp{TELEGRAM && " e no Telegram"}
            </p>
            <h1>
              Só entra no grupo
              <br />o <em>preço campeão</em>
              <Anim n="trofeu" t={84} className="hero-h1-anim" />
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

          <div className="vitrine">
            <div className="vitrine-brilho" aria-hidden="true" />
            <div className="vitrine-foto">
              <Foto
                nome="comemora"
                alt="Mulher comemorando com o celular na mão"
                sizes="(min-width: 900px) 440px, 86vw"
                prioridade
              />
            </div>
            <Anim n="trofeu" t={120} className="vitrine-trofeu" />
            <span className="chip chip-1">
              <Anim n="fogo" t={30} /> Desconto conferido
            </span>
            <span className="chip chip-2">
              <Anim n="check" t={28} /> Cupom testado
            </span>
            <span className="chip chip-3">
              <Anim n="medalha" t={30} /> Vendedor bem avaliado
            </span>
            <Anim n="dinheiro-voando" t={64} className="vitrine-voando" />
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
              {PLACAR.map(([n, t, e]) => (
                <div key={t} className="placar-item rv">
                  <Anim n={e} t={40} />
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
                  <span className="fase-n">
                    <Anim n={f.emoji} t={40} />
                  </span>
                  <span className="fase-nome">
                    {String(i + 1).padStart(2, "0")} · {f.fase}
                  </span>
                  <h3>{f.titulo}</h3>
                  <p>{f.texto}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Pódio das checagens */}
        <section className="secao secao-escura podio-secao">
          <div className="wrap">
            <p className="sobretitulo claro rv">Nosso filtro</p>
            <h2 className="titulo claro rv">O pódio de toda oferta</h2>
            <p className="sub claro-sub rv">Só sobe para o grupo a oferta que passa nas três checagens.</p>
            <ol className="podio rv">
              {PODIO.map((p) => (
                <li key={p.lugar} className={`degrau ${p.classe}`}>
                  <Anim n={p.emoji} t={p.classe === "ouro" ? 96 : 64} className="degrau-anim" />
                  <span className="degrau-titulo">{p.titulo}</span>
                  <span className="degrau-texto">{p.texto}</span>
                  <span className="degrau-bloco">{p.lugar}</span>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Cinema: vídeo de ponta a ponta com a frase da marca */}
        <section className="cinema" aria-label="Vai comprar? Confere no grupo primeiro.">
          <VideoLoop nome="cinema" className="cinema-video" />
          <div className="cinema-veu" aria-hidden="true" />
          <div className="wrap cinema-texto" aria-hidden="true">
            <Anim n="sirene" t={64} />
            <span>Vai comprar alguma coisa?</span>
            <span>Confere no grupo</span>
            <em>primeiro.</em>
          </div>
        </section>

        {/* Exemplos estáticos */}
        <section className="secao secao-creme" id="exemplos" data-origem="exemplos">
          <div className="wrap">
            <p className="sobretitulo rv">
              <Anim n="fogo" t={22} /> Exemplos
            </p>
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

        {/* Galeria de fotos em movimento */}
        <section className="galeria" aria-label="Momentos de compra">
          <div className="wrap">
            <p className="sobretitulo claro rv">Compras do dia a dia</p>
            <h2 className="titulo claro rv">Pra hora em que bate a vontade de comprar</h2>
          </div>
          <LinhaGaleria itens={GALERIA_1} />
          <LinhaGaleria itens={GALERIA_2} reverso />
        </section>

        {/* O que chega no grupo */}
        <section className="secao">
          <div className="wrap">
            <p className="sobretitulo rv">O que chega no grupo</p>
            <h2 className="titulo rv">O que a gente caça pra você</h2>
            <div className="cards-3">
              {CATEGORIAS.map((c, i) => (
                <article key={c.titulo} className="card rv" style={{ transitionDelay: `${i * 90}ms` }}>
                  <span className="card-anim">
                    <Anim n={c.emoji} t={56} />
                  </span>
                  <h3>{c.titulo}</h3>
                  <p>{c.texto}</p>
                </article>
              ))}
            </div>

            <div className="split rv">
              <div className="split-midia">
                <VideoLoop nome="celular" rotulo="Pessoa conferindo uma oferta no celular" />
                <span className="split-selo">
                  <Anim n="olhos" t={34} /> Chegou oferta nova
                </span>
              </div>
              <div>
                <p className="sobretitulo esquerda">Como é o grupo</p>
                <h2 className="titulo esquerda">Grupo sem bagunça, só achados</h2>
                <ul className="lista-check">
                  <li>
                    <b>Chega sozinho:</b> você não precisa procurar nada.
                  </li>
                  <li>
                    <b>Direto ao ponto:</b> foto, preço, link da loja e cupom quando tiver.
                  </li>
                  <li>
                    <b>Compra segura:</b> direto no site da loja, com a garantia dela.
                  </li>
                  <li>
                    <b>Sem bagunça:</b> grupo fechado, ninguém te chama no privado.
                  </li>
                </ul>
                <Botoes />
              </div>
            </div>
          </div>
        </section>

        {/* Como nos mantemos (divulgação de afiliados) */}
        <section className="secao secao-escura" id="como-nos-mantemos">
          <div className="wrap">
            <div className="mantemos rv">
              <div>
                <p className="sobretitulo claro esquerda">A pergunta de todo mundo</p>
                <h2 className="titulo claro esquerda">&ldquo;E como vocês ganham com isso?&rdquo;</h2>
                <p className="mantemos-aviso">{TEXTO_AFILIADO}</p>
              </div>
              <div className="mantemos-foto">
                <Foto nome="compra-cartao" alt="Mulher pagando uma compra com cartão pelo celular" sizes="(min-width: 900px) 460px, 92vw" />
                <span className="mantemos-selo">
                  <Anim n="cem" t={40} />
                  <span>
                    <b>Comissão da loja</b>
                    <small>o seu preço não muda</small>
                  </span>
                </span>
              </div>
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
              <Anim n="coroa" t={72} className="fairplay-anim" />
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
          <div className="wrap indique">
            <div className="indique-texto rv">
              <p className="sobretitulo esquerda">
                <Anim n="presente" t={22} /> Passe a bola
              </p>
              <h2 className="titulo esquerda">Tem um amigo que ama promoção?</h2>
              <p className="indique-sub">
                Mande o link do grupo para a família, os amigos ou aquele grupo do trabalho. Ajude quem você gosta a
                pagar menos.
              </p>
              <Indicar />
            </div>
            <div className="indique-foto rv">
              <Foto nome="amigas-ofertas" alt="Amigas olhando ofertas no celular" sizes="(min-width: 900px) 480px, 92vw" />
              <Anim n="apaixonado" t={72} className="indique-anim" />
            </div>
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

        {/* Fechamento com vídeo e confete */}
        <section className="fechamento" data-origem="fechamento">
          <VideoLoop nome="shopping" className="fechamento-video" />
          <div className="confete" aria-hidden="true">
            {CONFETE.map((c, i) => (
              <i key={i} style={c} />
            ))}
          </div>
          <div className="wrap fechamento-conteudo">
            <Anim n="festa" t={96} />
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
