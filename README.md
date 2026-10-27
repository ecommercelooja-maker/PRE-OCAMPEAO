# Preço Campeão

Site em Next.js 14 (React + TypeScript), publicado na Vercel.

## Rodar localmente

```bash
npm install
npm run dev
```

Abra http://localhost:3000.

## Onde preencher os dados reais

- `src/config.ts`: links dos grupos de WhatsApp (`LINKS_WHATSAPP`) e do Telegram (`TELEGRAM`).
- `src/lib/empresa.ts`: razão social, CNPJ, endereço e e-mail (aparecem no rodapé e nas páginas legais).
- `src/data/ofertas.json`: produtos de exemplo (fotos em `public/ofertas`).
- Vercel → Settings → Environment Variables: `NEXT_PUBLIC_SITE_URL`, `NEXT_PUBLIC_GADS_ID`, `NEXT_PUBLIC_GADS_LABEL` (veja `.env.example`).
