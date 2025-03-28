"use client";

import SignInButton from "@/components/signin-button";
import { SignOutButton } from "@/components/signout-button";
import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { useSession } from "next-auth/react";
import { useLocale, useTranslations } from "next-intl";

export default function Home() {
  const session = useSession();
  const locale = useLocale();
  const t = useTranslations();

  const changeLocale = (newLocale: string) => {
    // 현재 locale과 다른 경우에만 변경
    if (newLocale !== locale) {
      // 쿠키에 직접 locale 저장
      document.cookie = `NEXT_LOCALE=${newLocale}; path=/; max-age=${
        60 * 60 * 24 * 365
      }`; // 1년

      // 페이지 새로고침하여 변경된 locale 적용
      window.location.reload();
    }
  };

  return (
    <div className="p-8">
      <Label className="text-4xl font-black">Nextjs 15 Boilerplate</Label>
      <Separator className="my-4" />
      <Label className="text-2xl font-black">- Authjs 5</Label>
      {session.data ? (
        <>
          <Label className="text-sm font-bold">
            {session.data?.user?.name}
          </Label>
          <Label className="text-sm font-bold">
            {session.data?.user?.email}
          </Label>
          <SignOutButton />
        </>
      ) : (
        <SignInButton />
      )}
      <Separator className="my-4" />
      <Label className="text-2xl font-black">- Next Theme</Label>
      <ThemeToggle />
      <Separator className="my-4" />
      <Label className="text-2xl font-black">- Next Intl</Label>
      <div className="flex items-center gap-2 mt-2">
        <div className="flex space-x-2">
          <Button
            variant={locale === "ko" ? "default" : "outline"}
            onClick={() => changeLocale("ko")}
          >
            한국어
          </Button>
          <Button
            variant={locale === "en" ? "default" : "outline"}
            onClick={() => changeLocale("en")}
          >
            English
          </Button>
        </div>
        <p className="ml-4">{t("message")}</p>
      </div>
    </div>
  );
}
