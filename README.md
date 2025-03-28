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
