export function formatDate(date: Date, locale: "en-US" | "pt-BR") {
  const formatedDate = new Intl.DateTimeFormat(locale, {
    year: "numeric",
    day: "numeric",
    month: "short",
  });

  return formatedDate.format(date);
}
