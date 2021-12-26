import { convertNumberToCurrency } from "@/lib/formatters/number.formatter";

describe("number.formatter", () => {
  const value = 456.345454545454554;
  it("should format float to Euro currency be default", () => {
    expect(convertNumberToCurrency(value)).toBe("456,35 €");
  });

  it("should work with integers", () => {
    const int = 456;
    expect(convertNumberToCurrency(int)).toBe("456,00 €");
  });

  it("should work with different currencies", () => {
    expect(
      convertNumberToCurrency(value, { currency: "USD", locales: "en-EN" })
    ).toBe("$456.35");
  });

  it("should return 0 if value is NaN", () => {
    expect(convertNumberToCurrency(NaN)).toBe("0,00 €");
  });

  it("should work with negative numbers", () => {
    expect(convertNumberToCurrency(-value)).toBe("-456,35 €");
  });
});
