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
  public static readonly CAD: Currency = {
    code: "CAD",
    name: "Canadian Dollar",
    format: "CA${amount}",
    decimal: 2,
  };
  public static readonly AUD: Currency = {
    code: "AUD",
    name: "Australian Dollar",
    format: "AU${amount}",
    decimal: 2,
  };
  public static readonly CHF: Currency = {
    code: "CHF",
    name: "Swiss Franc",
    format: "CHF{amount}",
    decimal: 2,
    locale: 'de-CH',
  };
  public static readonly SGD: Currency = {
    code: "SGD",
    name: "Singapore Dollar",
    format: "S${amount}",
    decimal: 2,
  };
  public static readonly MOP: Currency = {
    code: "MOP",
    name: "Macanese Pataca",
    format: "MOP${amount}",
    decimal: 2,
  };
  public static readonly KRW: Currency = {
    code: "KRW",
    name: "South Korean Won",
    format: "₩{amount}",
    decimal: 0,
  };
  public static readonly INR: Currency = {
    code: "INR",
    name: "Indian Rupee",
    format: "₹{amount}",
    decimal: 2,
  };
  public static readonly THB: Currency = {
    code: "THB",
    name: "Thai Baht",
    format: "฿{amount}",
    decimal: 2,
  };
  public static readonly MMK: Currency = {
    code: "MMK",
    name: "Myanmar Kyat",
    format: "K{amount}",
    decimal: 2,
  };
}
