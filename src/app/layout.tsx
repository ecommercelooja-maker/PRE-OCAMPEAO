import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { Barlow_Condensed, DM_Sans } from "next/font/google";
import "./globals.css";
import { ADS_ID, CHAVE_COOKIES, GA_ID, MARCA, SITE_URL } from "@/config";

const barlow = Barlow_Condensed({ subsets: ["latin"], weight: ["600", "800"], variable: "--f-titulo" });
const dmSans = DM_Sans({ subsets: ["latin"], weight: ["400", "500", "700"], variable: "--f-texto" });

const titulo = `${MARCA} — Curadoria independente de promoções`;
const descricao =
  "Curadoria independente de promoções de eletrônicos, eletrodomésticos e enxoval, divulgadas em grupo no WhatsApp. Não vendemos produtos e podemos receber comissão de afiliado.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  alternates: { canonical: "/" },
  title: titulo,
  description: descricao,
  robots: { index: true, follow: true },
  openGraph: { title: titulo, description: descricao, locale: "pt_BR", type: "website", siteName: MARCA },
  twitter: { card: "summary_large_image", title: titulo, description: descricao },
};

export const viewport: Viewport = { themeColor: "#0b3d2e" };

// Google tag com Consent Mode v2. Roda antes da tag carregar: tudo começa "denied" e, se a pessoa já aceitou
// em uma visita anterior, o update "granted" é aplicado antes de qualquer evento.
const consentimentoGoogle = `
window.dataLayer = window.dataLayer || [];
window.gtag = function(){ window.dataLayer.push(arguments); };
gtag('consent', 'default', { ad_storage: 'denied', ad_user_data: 'denied', ad_personalization: 'denied', analytics_storage: 'denied', wait_for_update: 500 });
try {
  if (localStorage.getItem(${JSON.stringify(CHAVE_COOKIES)}) === 'sim') {
    gtag('consent', 'update', { ad_storage: 'granted', ad_user_data: 'granted', ad_personalization: 'granted', analytics_storage: 'granted' });
  }
} catch (e) {}
gtag('js', new Date());
gtag('config', ${JSON.stringify(ADS_ID)});
${GA_ID ? `gtag('config', ${JSON.stringify(GA_ID)});` : ""}
`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${barlow.variable} ${dmSans.variable}`}>
      <body>
        {children}
        {ADS_ID && (
          <>
            <Script id="google-consent" strategy="beforeInteractive">
              {consentimentoGoogle}
            </Script>
            <Script src={`https://www.googletagmanager.com/gtag/js?id=${ADS_ID}`} strategy="afterInteractive" />
          </>
        )}
      </body>
    </html>
  );
}
