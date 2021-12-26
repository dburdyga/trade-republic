export function convertNumberToCurrency(
  num: number,
  config: { locales: string; currency: string } = {
    locales: "de-DE",
    currency: "EUR",
  }
): string {
  if (Number.isNaN(num)) {
    num = 0;
  }

  return new Intl.NumberFormat(config.locales, {
    style: "currency",
    currency: config.currency,
  }).format(num);
}
