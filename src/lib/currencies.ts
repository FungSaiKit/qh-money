import { Currency } from "../interface/currency.interface";

export class Currencies {
  public static CNY: Currency = {
    code: "CNY",
    name: "Chinese Yuan",
    format: "¥{amount}",
    decimal: 2,
  };
  public static HKD = {
    code: "HKD",
    name: "Hong Kong Dollar",
    symbol: "HK${amount}",
    decimal: 2,
  };
  public static USD = {
    code: "USD",
    name: "United States Dollar",
    format: "${amount}",
    decimal: 2,
  };
  public static JPY = {
    code: "JPY",
    name: "Japanese Yen",
    format: "￥{amount}",
    decimal: 0,
  };
  public static EUR = {
    code: "EUR",
    name: "Euro",
    format: "€{amount}",
    decimal: 2,
  };
}
