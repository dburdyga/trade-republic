import { Stock } from "@/lib/types/models/Stock";
import { StockModule } from "@/store/modules/stocks";

function generateStock(number: number): Stock {
  return {
    isin: `${new Date().getTime()}-${number}`,
    bid: 45.4546,
    ask: 56.45445454,
    price: 234.34355545,
  };
}

export function generateStocks(quantity: number): Stock[] {
  if (quantity < 0 || Number.isNaN(quantity)) return [];
  quantity = Math.trunc(quantity);
  const stocks = [];

  for (let i = 1; i <= quantity; i++) {
    stocks.push(generateStock(i));
  }

  return stocks;
}

export function mockStocksState(): StockModule {
  return {
    stocks: generateStocks(3),
  };
}
