import { ImageResponse } from "next/og";
import { MARCA } from "@/config";

// Prévia de compartilhamento (WhatsApp, Facebook etc.), gerada no build.
export const alt = `${MARCA}: curadoria independente de promoções`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Imagem() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "0 90px",
          background: "linear-gradient(160deg, #0f5640, #0b3d2e 55%, #062419)",
          color: "#fff",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", fontSize: 40, fontWeight: 700, color: "#f5b301", letterSpacing: 4 }}>
          PREÇO CAMPEÃO
        </div>
        <div style={{ display: "flex", flexDirection: "column", fontSize: 92, fontWeight: 800, lineHeight: 1, marginTop: 24 }}>
          <span>Só entra no grupo</span>
          <span style={{ color: "#f5b301" }}>o preço campeão</span>
        </div>
        <div style={{ display: "flex", fontSize: 32, marginTop: 36, color: "rgba(255,255,255,.85)" }}>
          Curadoria independente de promoções · Grupo no WhatsApp
        </div>
      </div>
    ),
    size,
  );
}
