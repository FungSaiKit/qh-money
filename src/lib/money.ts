// https://mikemcl.github.io/decimal.js
import { Decimal } from "decimal.js";
import { Currency } from "../interface/currency.interface";

export class Money {
  /**
   * Constructs a new money instance with the specified amount for the specified currency.
   * @param value The value of the money instance.
   * @param currency The currency code of the money instance.
   */
  constructor(
    public readonly value: number,
    public readonly currency: Currency
  ) {
    if (typeof value === "string") {
      this.value = Number(value);
    } else {
      this.value = value;
    }
    this.currency = currency;
    this.available = typeof value === "number" && !!currency && !!currency.code;
    this.valueOrNull = this.available ? value : null;
  }

  /**
   * The value of the money instance.
   * Identifies if the instance contains settings for value and currency
   */
  public readonly available: boolean = false;

  /**
   * Return the value of the money instance or null if the Money instance is NOT_AVAILABLE.
   */
  public readonly valueOrNull: number | null = null;

  public add(value: Money): Money {
    if (!this.isOfSameCurrency(value)) {
      throw new Error("Cannot add money of different currencies");
    }
    return new Money(
      Decimal.add(this.value, value.value).toNumber(),
      this.currency
    );
  }

  public addPercent(percent: number): Money {
    const multiplier = Decimal.add(1, Decimal.div(percent, 100));
    return new Money(
      Decimal.mul(this.value, multiplier).toNumber(),
      this.currency
    );
  }

  public addRate(value: number): Money {
    const multiplier = Decimal.add(1, value);
    return new Money(
      Decimal.mul(this.value, multiplier).toNumber(),
      this.currency
    );
  }

  public compareTo(other: Money): number {
    if (!this.isOfSameCurrency(other)) {
      throw new Error("Cannot compare money of different currencies");
    }
    if (this.value === other.value) {
      return 0;
    }
    return this.value > other.value ? 1 : -1;
  }

  public divide(divisor: number): Money {
    return new Money(
      Decimal.div(this.value, divisor).toNumber(),
      this.currency
    );
  }

  public equals(other: Money): boolean {
    return (
      this.value === other.value && this.currency.code === other.currency.code
    );
  }

  public getCurrencyCode(): string {
    return this.currency.code;
  }

  public getValue(): number {
    return Number(this.value.toFixed(this.currency.decimal || 2));
  }

  public getValueOrNull(): null | number {
    return this.valueOrNull;
  }

  public isAvailable(): boolean {
    return this.available;
  }

  public isOfSameCurrency(value: Money): boolean {
    return (
      !!this.currency &&
      !!value.currency &&
      this.currency.code === value.currency.code
    );
  }

  public multiply(factor: number): Money {
    return new Money(this.value * factor, this.currency);
  }

  /**
   * Method returns a new instance of Money with the same currency but different value.
   * @param value
   */
  public newMoney(value: number): Money {
    return new Money(value, this.currency);
  }

  public percentLessThan(value: Money): number {
    if (!this.isOfSameCurrency(value)) {
      throw new Error("Cannot compare money of different currencies");
    }
    return Decimal.sub(value.value, this.value)
      .div(value.value)
      .mul(100)
      .toNumber();
  }

  public percentOf(value: Money): number {
    if (!this.isOfSameCurrency(value)) {
      throw new Error("Cannot compare money of different currencies");
    }
    return Decimal.div(this.value, value.value).mul(100).toNumber();
  }

  public subtract(value: Money): Money {
    if (!this.isOfSameCurrency(value)) {
      throw new Error("Cannot subtract money of different currencies");
    }
    return new Money(
      Decimal.sub(this.value, value.value).toNumber(),
      this.currency
    );
  }

  public subtractPercent(percent: number): Money {
    const multiplier = Decimal.sub(1, Decimal.div(percent, 100));
    return new Money(
      Decimal.mul(this.value, multiplier).toNumber(),
      this.currency
    );
  }

  public subtractRate(value: number): Money {
    const multiplier = Decimal.sub(1, value);
    return new Money(
      Decimal.mul(this.value, multiplier).toNumber(),
      this.currency
    );
  }

  public toFormattedString(): string {
    return this.currency.format.replace(
      "{amount}",
      this.value.toLocaleString(this.currency.locale, {
        maximumFractionDigits: this.currency.decimal,
      })
    );
  }

  public toNumberString(): string {
    return this.value.toString();
  }

  public toString(): string {
    return `${this.currency.name}: ${this.toFormattedString()}`;
  }
}
