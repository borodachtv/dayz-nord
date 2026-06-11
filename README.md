# DayZ Nord

Next.js + React + Tailwind CSS MVP for the DayZ Standalone server `DayZ Nord`.

## Stack

- Frontend: Next.js App Router, React, Tailwind CSS
- Backend: Next.js API routes
- Database: PostgreSQL
- ORM: Prisma
- Auth: Steam login mock
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

- Replace Steam mock with real Steam OpenID assertion verification before production.
- Keep the shop locked until Bohemia monetization approval is confirmed.
- Payment endpoints must validate products against the no-gameplay-advantage policy before checkout.
