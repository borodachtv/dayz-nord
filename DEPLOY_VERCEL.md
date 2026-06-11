# Deploy DayZ Nord MVP to Vercel

Vercel is the recommended MVP host for this project because it supports Next.js directly and provides a public `*.vercel.app` URL.

## 1. Create Account

Open:

```text
https://vercel.com/signup
```

Sign in with GitHub.

## 2. Put Project on GitHub

Create a GitHub repository and push this project.

Recommended repository name:

```text
dayz-nord
```

## 3. Import on Vercel

Open:

```text
https://vercel.com/new
```

Select the GitHub repository.

Vercel should detect:

```text
Framework Preset: Next.js
Install Command: npm install
Build Command: npm run build
Output Directory: .next
```

## 4. Environment Variables

For MVP preview, only this is needed:

```text
NEXT_PUBLIC_SITE_URL=https://your-project.vercel.app
```

PostgreSQL can be added later. The MVP currently uses mock data from `src/lib/site-data.ts`.

When PostgreSQL is ready, add:

```text
DATABASE_URL=postgresql://...
```

## 5. Deploy

Click:

```text
Deploy
```

After build, Vercel will give a public URL like:

```text
https://dayz-nord.vercel.app
```

## MVP Routes

- `/`
- `/store`
- `/cart`
- `/login`
- `/profile`
- `/admin`

## Notes

- Steam login is a mock route for MVP.
- Payments are mock checkout endpoints for MVP.
- Admin products use mock data until CRUD API is connected to PostgreSQL.
