export interface Stock {
  [key: string]: string | number;
  ask: number;
  bid: number;
  isin: string;
  price: number;
}
