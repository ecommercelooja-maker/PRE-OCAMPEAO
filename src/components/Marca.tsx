// Troféu do logo. `taca` é a cor da taça e `detalhe` a da estrela/base.
export function Trofeu({ taca = "#f5b301", detalhe = "#0b3d2e" }: { taca?: string; detalhe?: string }) {
  return (
    <svg width="100%" height="100%" viewBox="0 0 64 64" aria-hidden="true">
      <path d="M16 8h32v14a16 16 0 0 1-32 0z" fill={taca} />
      <path d="M16 13H8a9 9 0 0 0 9 10M48 13h8a9 9 0 0 1-9 10" fill="none" stroke={taca} strokeWidth="4" strokeLinecap="round" />
      <rect x="28" y="37" width="8" height="9" fill={taca} />
      <rect x="18" y="46" width="28" height="9" rx="2" fill={taca} />
      <path d="M32 13l2.6 5.3 5.8.8-4.2 4.1 1 5.8-5.2-2.7-5.2 2.7 1-5.8-4.2-4.1 5.8-.8z" fill={detalhe} />
    </svg>
  );
}

export function Logo({ claro = false }: { claro?: boolean }) {
  return (
    <span className={`logo${claro ? " claro" : ""}`}>
      <span className="logo-icone">
        {claro ? <Trofeu taca="#0b3d2e" detalhe="#f5b301" /> : <Trofeu detalhe="#fff" />}
      </span>
      <span className="logo-texto">
        Preço<b>Campeão</b>
      </span>
    </span>
  );
}

export function IconeWhats() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" fill="currentColor">
      <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm0 18.2a8.2 8.2 0 0 1-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8s-.4-.1-.6.1-.7.8-.8 1-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.3-.4.2-.4.7-1.3.1-.2 0-.3 0-.4l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2 5.2 5.2 0 0 0 1.1 2.7 11.8 11.8 0 0 0 4.5 4c1.7.7 2.3.8 3.2.6a2.7 2.7 0 0 0 1.8-1.3 2.2 2.2 0 0 0 .2-1.3c-.1-.1-.3-.2-.5-.3z" />
    </svg>
  );
}

export function IconeTelegram() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" fill="currentColor">
      <path d="M21.4 3.6 2.9 10.7c-1.3.5-1.2 1.2-.2 1.5l4.7 1.5 1.8 5.6c.2.6.4.8.8.8s.6-.2.9-.5l2.3-2.2 4.8 3.5c.9.5 1.5.2 1.7-.8l3.1-14.6c.3-1.3-.5-1.9-1.4-1.5zM9.6 14.4l-.4 4-1.4-4.6 10.4-6.6z" />
    </svg>
  );
}
