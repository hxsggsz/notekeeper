/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import PTBR from "./locales/pt/pt-br.json";
import ENUS from "./locales/en/en-us.json";

void i18n.use(initReactI18next).init({
  resources: {
    "pt-BR": PTBR,
    "en-US": ENUS,
  },
  lng: localStorage.getItem("@i18n") ?? navigator.language,
  interpolation: {
    escapeValue: false,
  },
});
export default i18n;
