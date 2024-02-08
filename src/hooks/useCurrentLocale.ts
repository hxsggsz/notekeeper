import { i18n } from "@/i18n";
import { useRouter } from "next/router";

export function useCurrentLocale() {
  const { locale } = useRouter();
  return locale === "en" ? i18n.en : i18n.pt;
}
