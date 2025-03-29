import { Currencies, Currency, Money } from "../../src";

test("Money - Available", () => {
  const money = new Money(100, Currencies.CNY);
  expect(money.value).toBe(100);
  expect(money.available).toBe(true);
  expect(money.valueOrNull).toBe(100);
  expect(money.currency.code).toBe(Currencies.CNY.code);
  expect(money.currency.name).toBe(Currencies.CNY.name);
  expect(money.currency.format).toBe(Currencies.CNY.format);
});

test("Money - Amount unavailable", () => {
  const money = new Money(null as any, Currencies.CNY);
  expect(money.value).toBe(null);
  expect(money.available).toBeFalsy();
  expect(money.valueOrNull).toBe(null);
  expect(money.currency.code).toBe(Currencies.CNY.code);
  expect(money.currency.name).toBe(Currencies.CNY.name);
  expect(money.currency.format).toBe(Currencies.CNY.format);
});

test("Money - Currency null", () => {
  const money = new Money(100, null as any);
  expect(money.value).toBe(100);
  expect(money.available).toBeFalsy();
  expect(money.valueOrNull).toBe(null);
  expect(money.currency).toBe(null);
});

test("Money - add", () => {
  const money = new Money(100, Currencies.CNY);
  const money2 = new Money(200, Currencies.CNY);
  const money3 = money.add(money2);
  expect(money3.value).toBe(300);
  expect(money3.currency.code).toBe(Currencies.CNY.code);
});

test("Money - add different currency", () => {
  const money = new Money(100, Currencies.CNY);
  const money2 = new Money(200, Currencies.USD);
  expect(() => money.add(money2)).toThrow(
    "Cannot add money of different currencies"
  );
});

test("Money - addPercent", () => {
  const money = new Money(100, Currencies.CNY);
  const money2 = money.addPercent(10);
  expect(money2.value).toBe(110);
  expect(money2.currency.code).toBe(Currencies.CNY.code);
});

test("Money - addRate", () => {
  const money = new Money(100, Currencies.CNY);
  const money2 = money.addRate(0.1);
  expect(money2.value).toBe(110);
  expect(money2.currency.code).toBe(Currencies.CNY.code);
});

test("Money - compareTo", () => {
  const money = new Money(100, Currencies.CNY);
  const money2 = new Money(200, Currencies.CNY);
  expect(money.compareTo(money2)).toBe(-1);
  expect(money2.compareTo(money)).toBe(1);
  expect(money.compareTo(money)).toBe(0);
});

test("Money - compareTo different currency", () => {
  const money = new Money(100, Currencies.CNY);
  const money2 = new Money(200, Currencies.USD);
  expect(() => money.compareTo(money2)).toThrow(
    "Cannot compare money of different currencies"
  );
});

test("Money - divide", () => {
  const money = new Money(100, Currencies.CNY);
  const money2 = money.divide(2);
  expect(money2.value).toBe(50);
  expect(money2.currency.code).toBe(Currencies.CNY.code);
});

test("Money - equals", () => {
  const money = new Money(100, Currencies.CNY);
  const money2 = new Money(100, Currencies.CNY);
  expect(money.equals(money2)).toBe(true);
});

test("Money - equals different value", () => {
  const money = new Money(100, Currencies.CNY);
  const money2 = new Money(200, Currencies.CNY);
  expect(money.equals(money2)).toBeFalsy();
});

test("Money - equals different currency", () => {
  const money = new Money(100, Currencies.CNY);
  const money2 = new Money(100, Currencies.USD);
  expect(money.equals(money2)).toBeFalsy();
});

test("Money - getCurrencyCode", () => {
  const money = new Money(100, Currencies.CNY);
  expect(money.getCurrencyCode()).toBe(Currencies.CNY.code);
});

test("Money - getValue", () => {
  const money = new Money(100, Currencies.CNY);
  expect(money.getValue()).toBe(100);
});

test("Money - getValueOrNull", () => {
  const money = new Money(100, Currencies.CNY);
  expect(money.getValueOrNull()).toBe(100);
});

test("Money - getValueOrNull value null", () => {
  const money = new Money(null as any, Currencies.CNY);
  expect(money.getValueOrNull()).toBe(null);
});

test("Money - getValueOrNull currency null", () => {
  const money = new Money(100, null as any);
  expect(money.getValueOrNull()).toBe(null);
});

test("Money - getValueOrNull value null currency null", () => {
  const money = new Money(null as any, null as any);
  expect(money.getValueOrNull()).toBe(null);
});

test("Money - isAvailable", () => {
  const money = new Money(100, Currencies.CNY);
  expect(money.isAvailable()).toBe(true);
});

test("Money - isAvailable value null", () => {
  const money = new Money(null as any, Currencies.CNY);
  expect(money.isAvailable()).toBe(false);
});

test("Money - isAvailable currency null", () => {
  const money = new Money(100, null as any);
  expect(money.isAvailable()).toBe(false);
});

test("Money - isOfSameCurrency", () => {
  const money = new Money(100, Currencies.CNY);
  const money2 = new Money(200, Currencies.CNY);
  expect(money.isOfSameCurrency(money2)).toBe(true);
});

test("Money - isOfSameCurrency different currency", () => {
  const money = new Money(100, Currencies.CNY);
  const money2 = new Money(200, Currencies.USD);
  expect(money.isOfSameCurrency(money2)).toBe(false);
});

test("Money - isOfSameCurrency currency null", () => {
  const money = new Money(100, Currencies.CNY);
  const money2 = new Money(200, null as any);
  expect(money.isOfSameCurrency(money2)).toBe(false);
});

test("Money - isOfSameCurrency currency null", () => {
  const money = new Money(100, null as any);
  const money2 = new Money(200, Currencies.CNY);
  expect(money.isOfSameCurrency(money2)).toBe(false);
});

test("Money - multiply", () => {
  const money = new Money(100, Currencies.CNY);
  const money2 = money.multiply(2);
  expect(money2.value).toBe(200);
  expect(money2.currency.code).toBe(Currencies.CNY.code);
});

test("Money - newMoney", () => {
  const money = new Money(100, Currencies.CNY);
  const money2 = money.newMoney(200);
  expect(money2.value).toBe(200);
  expect(money2.currency.code).toBe(Currencies.CNY.code);
});

test("Money - percentLessThan", () => {
  const money = new Money(100, Currencies.CNY);
  const money2 = new Money(200, Currencies.CNY);
  expect(money.percentLessThan(money2)).toBe(50);
});

test("Money - percentLessThan different currency", () => {
  const money = new Money(100, Currencies.CNY);
  const money2 = new Money(200, Currencies.USD);
  expect(() => money.percentLessThan(money2)).toThrow(
    "Cannot compare money of different currencies"
  );
});

test("Money - percentOf", () => {
  const money = new Money(100, Currencies.CNY);
  const money2 = new Money(200, Currencies.CNY);
  expect(money.percentOf(money2)).toBe(50);
});

test("Money - percentOf different currency", () => {
  const money = new Money(100, Currencies.CNY);
  const money2 = new Money(200, Currencies.USD);
  expect(() => money.percentOf(money2)).toThrow(
    "Cannot compare money of different currencies"
  );
});

test("Money - subtract", () => {
  const money = new Money(100, Currencies.CNY);
  const money2 = new Money(200, Currencies.CNY);
  const money3 = money.subtract(money2);
  expect(money3.value).toBe(-100);
  expect(money3.currency.code).toBe(Currencies.CNY.code);
});

test("Money - subtract different currency", () => {
  const money = new Money(100, Currencies.CNY);
  const money2 = new Money(200, Currencies.USD);
  expect(() => money.subtract(money2)).toThrow(
    "Cannot subtract money of different currencies"
  );
});

test("Money - subtractPercent", () => {
  const money = new Money(100, Currencies.CNY);
  const money2 = money.subtractPercent(10);
  expect(money2.value).toBe(90);
  expect(money2.currency.code).toBe(Currencies.CNY.code);
});

test("Money - subtractRate", () => {
  const money = new Money(100, Currencies.CNY);
  const money2 = money.subtractRate(0.1);
  expect(money2.value).toBe(90);
  expect(money2.currency.code).toBe(Currencies.CNY.code);
});

test("Money - toFormattedString", () => {
  const money = new Money(1000, Currencies.CNY);
  expect(money.toFormattedString()).toBe("¥1,000.00");
});

test("Money - toNumberString", () => {
  const money = new Money(1000, Currencies.CNY);
  expect(money.toNumberString()).toBe("1000");
});

test("Money - toString", () => {
  const money = new Money(1000, Currencies.CNY);
  expect(money.toString()).toBe("Chinese Yuan: ¥1,000.00");
});

test("Money - custom currency", () => {
  const currency: Currency = {
    code: "CNY",
    name: "Chinese Yuan",
    format: "¥{amount}",
    decimal: 2,
    locale: "zh-CN",
  };
  const money = new Money(1000, currency);
  expect(money.toFormattedString()).toBe("¥1,000.00");
});
