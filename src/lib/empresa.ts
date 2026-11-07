// Dados da empresa responsável pelo site. Único lugar para alterar: rodapé e páginas legais leem daqui.

export const RAZAO_SOCIAL = "ARCO INTELIGENCIA & TECNOLOGIA LTDA";
export const NOME_FANTASIA = "ARCO CONSULTORIA";
export const CNPJ = "19.983.756/0001-26";
// Endereço de registro (cartão CNPJ). Vazio: o endereço some do rodapé e das páginas legais.
export const ENDERECO = "";
// ", endereço" pronto para colar depois do CNPJ (vazio quando não há endereço).
export const ENDERECO_SUFIXO = ENDERECO ? `, ${ENDERECO}` : "";
export const EMAIL_CONTATO = "support@precocampeao.com";

// Linha exibida no fim de cada página legal.
export const LINHA_EMPRESA = `${RAZAO_SOCIAL} (${NOME_FANTASIA}) · CNPJ ${CNPJ}${ENDERECO ? ` · ${ENDERECO}` : ""} · Dúvidas: ${EMAIL_CONTATO}`;
