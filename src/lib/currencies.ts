import { Currency } from "../interface/currency.interface";

export class Currencies {
  public static readonly CNY: Currency = {
    code: "CNY",
    name: "Chinese Yuan",
    format: "¥{amount}",
    decimal: 2,
  };
  public static readonly HKD: Currency = {
    code: "HKD",
    name: "Hong Kong Dollar",
    format: "HK${amount}",
    decimal: 2,
  };
  public static readonly USD: Currency = {
    code: "USD",
    name: "United States Dollar",
    format: "${amount}",
    decimal: 2,
  };
  public static readonly JPY: Currency = {
    code: "JPY",
    name: "Japanese Yen",
    format: "￥{amount}",
    decimal: 0,
  };
  public static readonly EUR: Currency = {
    code: "EUR",
    name: "Euro",
    format: "€{amount}",
    decimal: 2,
  };
}
