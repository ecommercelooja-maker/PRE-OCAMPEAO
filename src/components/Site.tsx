import { CtaFixa, Cookies, Efeitos } from "@/components/Cliente";
import { IconeTelegram, IconeWhats, Logo } from "@/components/Marca";
import { AVISO_TOPO, LOJAS, MARCA, TELEGRAM, TEXTO_AFILIADO_RODAPE } from "@/config";
import { CNPJ, EMAIL_CONTATO, ENDERECO, RAZAO_SOCIAL } from "@/lib/empresa";

// Os botões passam por /g/, que redireciona para o grupo e dispara a conversão (veja Cliente.tsx).
export const LINK_WHATSAPP = "/g/ofertas";
export const LINK_TELEGRAM = "/g/ofertas?p=telegram";
// Sem canal do Telegram configurado, o botão dele não aparece.
const TEM_TELEGRAM = Boolean(TELEGRAM);

// Na home os links do menu rolam até a seção; nas outras páginas voltam para a home.
const ancora = (home: boolean, id: string) => (home ? `#${id}` : `/#${id}`);

/* Topo + aviso de curadoria independente (logo abaixo do topo, em todas as páginas). */
export function Cabecalho({ home = false }: { home?: boolean }) {
  return (
    <>
      <div className="topo" data-origem="topo">
        <div className="topo-int">
          <a href="/" aria-label={`${MARCA}: página inicial`}>
            <Logo />
          </a>
          <nav className="topo-nav" aria-label="Menu">
            <a href={ancora(home, "como-funciona")}>Como funciona</a>
            <a href={ancora(home, "exemplos")}>Exemplos</a>
            <a href={ancora(home, "como-nos-mantemos")}>Como nos mantemos</a>
            <a href={ancora(home, "duvidas")}>Dúvidas</a>
            <a href="/sobre">Sobre</a>
          </nav>
          <a className="btn btn-ouro topo-btn" href={LINK_WHATSAPP}>
            Entrar no grupo
          </a>
        </div>
      </div>
      <p className="aviso-topo">{AVISO_TOPO}</p>
    </>
  );
}

/* Botões de entrada: WhatsApp em destaque e Telegram como opção secundária. */
export function Botoes({ texto = "Entrar no grupo do WhatsApp", escuro = false }: { texto?: string; escuro?: boolean }) {
  return (
    <div className="botoes">
      <a className="btn btn-ouro btn-grande" href={LINK_WHATSAPP}>
        <IconeWhats /> {texto}
      </a>
      {TEM_TELEGRAM && (
        <a className={`btn btn-grande ${escuro ? "btn-linha-claro" : "btn-linha"}`} href={LINK_TELEGRAM}>
          <IconeTelegram /> Prefiro Telegram
        </a>
      )}
    </div>
  );
}

export function Rodape({ home = false }: { home?: boolean }) {
  return (
    <footer className="rodape" data-origem="rodape">
      <div className="wrap rodape-grade">
        <div className="rodape-marca">
          <Logo claro />
          <p>
            Curadoria independente de promoções de eletrônicos, eletrodomésticos e enxoval, divulgadas em grupo no
            WhatsApp{TEM_TELEGRAM && " e canal no Telegram"}. Não vendemos produtos: a compra é feita direto na loja.
          </p>
        </div>
        <nav className="rodape-col" aria-label="Navegação">
          <b>Navegação</b>
          <a href={ancora(home, "como-funciona")}>Como funciona</a>
          <a href={ancora(home, "exemplos")}>Exemplos</a>
          <a href={ancora(home, "como-nos-mantemos")}>Como nos mantemos</a>
          <a href={ancora(home, "duvidas")}>Dúvidas</a>
          <a href={LINK_WHATSAPP}>Grupo no WhatsApp</a>
          {TEM_TELEGRAM && <a href={LINK_TELEGRAM}>Canal no Telegram</a>}
        </nav>
        <nav className="rodape-col" aria-label="Institucional">
          <b>Institucional</b>
          <a href="/sobre">Sobre nós</a>
          <a href="/contato">Contato</a>
          <a href="/privacidade">Política de Privacidade</a>
          <a href="/termos">Termos de Uso</a>
          <a href="/cookies">Política de cookies</a>
          <a href="/afiliados">Aviso de afiliados</a>
        </nav>
      </div>

      <div className="wrap rodape-base">
        <p className="rodape-afiliado">{TEXTO_AFILIADO_RODAPE}</p>
        <p>
          {RAZAO_SOCIAL} · CNPJ {CNPJ}
          {ENDERECO && ` · ${ENDERECO}`}
        </p>
        <p>
          Contato: <a href={`mailto:${EMAIL_CONTATO}`}>{EMAIL_CONTATO}</a>
        </p>
        <p>
          {LOJAS.join(", ")} e demais marcas citadas pertencem a seus respectivos titulares. O {MARCA} não vende
          produtos e não representa essas empresas. Confira preço, estoque e condições na loja antes de comprar.
        </p>
        <p>
          © {new Date().getFullYear()} {MARCA} · Emojis animados:{" "}
          <a href="https://googlefonts.github.io/noto-emoji-animation/">Google Noto Emoji</a> (CC BY 4.0) · Fotos:{" "}
          <a href="https://unsplash.com">Unsplash</a> · Vídeos: <a href="https://mixkit.co">Mixkit</a>
        </p>
      </div>
    </footer>
  );
}

/* Peças que se repetem em todas as páginas: efeitos, aviso de cookies e CTA fixa do celular. */
export function Globais() {
  return (
    <>
      <Efeitos />
      <Cookies />
      <CtaFixa>
        <a className="btn btn-ouro" href={LINK_WHATSAPP}>
          <IconeWhats /> Entrar no grupo
        </a>
        {TEM_TELEGRAM && (
          <a className="btn btn-linha-claro cta-tele" href={LINK_TELEGRAM} aria-label="Entrar pelo Telegram">
            <IconeTelegram />
          </a>
        )}
      </CtaFixa>
    </>
  );
}

/* Moldura das páginas internas (Sobre, Contato e páginas legais): mesmo topo e rodapé da home. */
export function PaginaInterna({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Cabecalho />
      {children}
      <Rodape />
      <Globais />
    </>
  );
}
