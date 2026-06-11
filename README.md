# DayZ Nord

Next.js + React + Tailwind CSS MVP for the DayZ Standalone server `DayZ Nord`.

## Stack

- Frontend: Next.js App Router, React, Tailwind CSS
- Backend: Next.js API routes
- Database: PostgreSQL
- ORM: Prisma
- Auth: Steam OpenID
- Payments: mock checkout endpoint with provider selection
- Admin MVP: `/admin` products only
- MVP pages: `/`, `/store`, `/cart`, `/login`, `/profile`, `/admin`
- Language switcher: RU / UA / EN / PL in the header

## Setup

```bash
npm install
cp .env.example .env
npm run prisma:migrate
npm run dev
```

Open `http://localhost:3000/`.

## Production Notes

- On Vercel set `NEXT_PUBLIC_SITE_URL=https://dayz-nord.vercel.app`.
- Optional Steam overrides: `STEAM_OPENID_REALM=https://dayz-nord.vercel.app`, `STEAM_OPENID_RETURN_URL=https://dayz-nord.vercel.app/api/auth/steam/callback`.
- Keep the shop locked until Bohemia monetization approval is confirmed.
- Payment endpoints must validate products against the no-gameplay-advantage policy before checkout.
