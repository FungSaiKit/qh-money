import { Currency } from "../interface/currency.interface";

export class Currencies {
  public static CNY: Currency = {
    code: "CNY",
    name: "Chinese Yuan",
    format: "¥{amount}",
  };
  public static HKD = {
    code: "HKD",
    name: "Hong Kong Dollar",
    symbol: "HK${amount}",
  };
  public static USD = {
    code: "USD",
    name: "United States Dollar",
    format: "${amount}",
  };
  public static JPY = {
    code: "JPY",
    name: "Japanese Yen",
    format: "￥{amount}",
  };
  public static EUR = {
    code: "EUR",
    name: "Euro",
    format: "€{amount}",
  };
}
