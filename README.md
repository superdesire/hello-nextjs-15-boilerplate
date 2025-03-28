# hello-nextjs-15-boilerplate

## Nextjs 15

https://nextjs.org/docs/app/getting-started/installation

```bash
npx create-next-app@latest
? What is your project named? › hello-nextjs-15-boilerplate

npx create-next-app@latest
✔ What is your project named? … hello-nextjs-15-boilerplate
✔ Would you like to use TypeScript? … No / Yes
✔ Would you like to use ESLint? … No / Yes
✔ Would you like to use Tailwind CSS? … No / Yes
✔ Would you like your code inside a `src/` directory? … No / Yes
✔ Would you like to use App Router? (recommended) … No / Yes
✔ Would you like to use Turbopack for `next dev`? … No / Yes
✔ Would you like to customize the import alias (`@/*` by default)? … No / Yes
Creating a new Next.js app in /Users/raiz/labs/workspace/hello-nextjs-15-boilerplate.
```

## Authjs 5

https://authjs.dev/getting-started/installation?framework=pnpm

```bash
❯ pnpm add next-auth@beta
❯ npx auth secret
📝 Created /Users/raiz/labs/workspace/hello-nextjs-15-boilerplate/.env.local with `AUTH_SECRET`.

```

.env.local

```
NEXT_PUBLIC_APP_URL=http://localhost:3000
NEXT_PUBLIC_API_URL=http://localhost:3000/api

AUTH_SECRET="<yours>" # Added by `npx auth`. Read more: https://cli.authjs.dev

AUTH_GOOGLE_ID=<yours>
AUTH_GOOGLE_SECRET=<yours>
```

## Next Intl

https://next-intl.dev/docs/getting-started/app-router/without-i18n-routing

## Prisma

https://www.prisma.io/docs/getting-started/quickstart-sqlite

```
# local
DATABASE_URL=postgresql://postgres:postgres@127.0.0.1:54322/postgres?pgbouncer=true&connection=10
DIRECT_URL=postgresql://postgres:postgres@127.0.0.1:54322/postgres
```

```bash
❯ pnpm add prisma --save-dev
Packages: +11
+++++++++++
Progress: resolved 445, reused 364, downloaded 0, added 11, done

devDependencies:
+ prisma 6.5.0

╭ Warning ───────────────────────────────────────────────────────────────────────────╮
│                                                                                    │
│   Ignored build scripts: @prisma/engines, esbuild, prisma.                         │
│   Run "pnpm approve-builds" to pick which dependencies should be allowed to run    │
│   scripts.                                                                         │
│                                                                                    │
╰────────────────────────────────────────────────────────────────────────────────────╯

Done in 1.6s using pnpm v10.6.3
 ~/labs/workspace/hello-nextjs-15-boilerplate  G  main  1↑ ⭑  
❯ npx prisma init --datasource-provider postgresql

✔ Your Prisma schema was created at prisma/schema.prisma
  You can now open it in your favorite editor.

warn You already have a .gitignore file. Don't forget to add `.env` in it to not commit any private information.

Next steps:
1. Set the DATABASE_URL in the .env file to point to your existing database. If your database has no tables yet, read https://pris.ly/d/getting-started
2. Run prisma db pull to turn your database schema into a Prisma schema.
3. Run prisma generate to generate the Prisma Client. You can then start querying your database.
4. Tip: Explore how you can extend the ORM with scalable connection pooling, global caching, and real-time database events. Read: https://pris.ly/cli/beyond-orm

More information in our documentation:
https://pris.ly/d/getting-started


```

## Supabase

https://authjs.dev/getting-started/adapters/supabase

## etc

shadcn
next-themes
next-intl
zustand 5.0.3
zod 3.24.2
nuqs 2.4.1
