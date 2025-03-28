import { PrismaAdapter } from "@auth/prisma-adapter";
import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import { prisma } from "./lib/prisma";

export const { handlers, signIn, signOut, auth } = NextAuth({
  secret: process.env.AUTH_SECRET,
  adapter: PrismaAdapter(prisma),
  trustHost: true,
  providers: [
    Google({
      clientId: process.env.AUTH_GOOGLE_ID,
      clientSecret: process.env.AUTH_GOOGLE_SECRET,
    }),
  ],
  events: {
    createUser: async ({ user }) => {
      // 여기서 첫 가입 시 필요한 초기화 작업 수행
      console.log("createUser", user);
      // 여기서 첫 가입 시 필요한 초기화 작업 수행
    //   await prisma.user.update({
    //     where: { id: user.id },
    //     data: {
    //       name: `user-${user.id}`,
    //       displayName: user.name,
    //     },
    //   });
    },
  },
  pages: {
    signIn: "/auth/signin",
    signOut: "/auth/signout",
  },
  session: {
    strategy: "jwt",
    maxAge: 60 * 60 * 24 * 7, // 7일
  },
  callbacks: {
    async jwt({ token, account, user }) {
      console.log("jwt", token, account, user);
      if (user) {
        // 로그인 시 사용자 정보와 계정 정보를 토큰에 저장
        console.log("jwt user", user);
        return {
          ...token,
          id: user.id,
          name: user.name,
          accessToken: account?.access_token,
          expiresAt:
            account?.expires_at ||
            Math.floor(Date.now() / 1000) + 60 * 60 * 24 * 7, // 7일
        };
      }
      return token;
    },

    async session({ session, token }) {
      // 세션에 토큰 정보 추가
      session.user = {
        ...session.user,
        id: token.id as string,
        name: token.name as string,
      };

      return session;
    },
  },
});
