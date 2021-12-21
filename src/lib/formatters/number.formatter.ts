export function convertNumberToCurrency(
  num: number,
  config: { locales: string; currency: string } = {
    locales: "de-DE",
    currency: "EUR",
  }
) {
  return new Intl.NumberFormat(config.locales, {
    style: "currency",
    currency: config.currency,
  }).format(num);
}
