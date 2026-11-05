// Dados da empresa responsável pelo site. Único lugar para alterar: rodapé e páginas legais leem daqui.

export const RAZAO_SOCIAL = "55.564.211 RAVEL DAVI DOS SANTOS";
export const CNPJ = "55.564.211/0001-49";
// Endereço de registro (cartão CNPJ). Vazio: o endereço some do rodapé e das páginas legais.
export const ENDERECO = "";
// ", endereço" pronto para colar depois do CNPJ (vazio quando não há endereço).
export const ENDERECO_SUFIXO = ENDERECO ? `, ${ENDERECO}` : "";
export const EMAIL_CONTATO = "[contato@seudominio.com.br]";

// Linha exibida no fim de cada página legal.
export const LINHA_EMPRESA = `${RAZAO_SOCIAL} · CNPJ ${CNPJ}${ENDERECO ? ` · ${ENDERECO}` : ""} · Dúvidas: ${EMAIL_CONTATO}`;
