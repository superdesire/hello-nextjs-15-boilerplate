"use client";

import { NextIntlClientProvider } from "next-intl";
import { SessionProvider } from "next-auth/react";
import { type ReactNode } from "react";
import { ThemeProvider } from "next-themes";
import { NuqsAdapter } from "nuqs/adapters/next/app";

interface ProvidersProps {
  children: ReactNode;
  messages: any;
  locale: string;
}

export function Providers({ children, messages, locale }: ProvidersProps) {
  return (
    <NextIntlClientProvider messages={messages} locale={locale} timeZone="Asia/Seoul">
      <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
        <SessionProvider>
          <NuqsAdapter>{children}</NuqsAdapter>
        </SessionProvider>
      </ThemeProvider>
    </NextIntlClientProvider>
  );
}
