import { getRequestConfig } from "next-intl/server";
import { cookies } from "next/headers";

export default getRequestConfig(async () => {
  // 쿠키에서 locale 가져오기, 없으면 기본값 'en' 사용
  const cookieStore = await cookies();
  const locale = cookieStore.get('NEXT_LOCALE')?.value || 'en';

  return {
    timeZone: 'Asia/Seoul',
    locale: locale,
    messages: (await import(`../../messages/${locale}.json`)).default,
  };
}); 
