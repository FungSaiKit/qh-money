# QH Money
## Description
A money lib for international business. It can handle money computing and formatting.

## Usage
```Typescript
import { Currencies, Money } from "qh-money";

// Add 50 CNY to the money
const money100 = new Money(100, Currencies.CNY);
const money50 = new Money(50, Currencies.CNY);
let money = money100.add(money50);
console.log(money.toFormattedString()); // Output: ¥150.00

// 20% discount
money = money100.addPercent(-20);
console.log(money.toFormattedString()); // Output: ¥80.00

// Add rate
money = money100.addRate(0.1);
console.log(money.toFormattedString()); // Output: ¥110.00

// Subtract 50 CNY from the money
money = money100.subtract(money50);
console.log(money.toFormattedString()); // Output: ¥50.00

// Multiply
money = money100.multiply(2);
console.log(money.toFormattedString()); // Output: ¥200.00

// Divide
money = money100.divide(2);
console.log(money.toFormattedString()); // Output: ¥50.00

// Compare
console.log(money100.compareTo(money50)); // Output: 1
console.log(money100.equals(money50)); // Output: false
console.log(money100.isOfSameCurrency(money50)); // Output: true

// Percent less then
console.log(money50.percentLessThan(money100)); // Output: 50

// Percent of
console.log(money50.percentOf(money100)); // Output: 50

```