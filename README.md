# números

A simple collection of functions that helps dealing between brazilian and international number formats. It deals with decimals and dot separators and it can be very handy when you have to calculate(then "translate" to international) or present a number(turning into the brazilian standards). [A lot of people in the world use this standard](https://en.wikipedia.org/wiki/Decimal_mark#Countries_using_Arabic_numerals_with_decimal_comma "List of countries"), not only in Brazil 😉.

## "why not using `.toLocaleString()`" you ask
Because:
- Cross-browser 😊
- It was fun to do it ❤️️

## How-to
`n.toBrazilian(number)` to transform from `123456.789` to `'123.456,789'`

`n.toInternational(number)` to translate from `'123.456,789'` to `123456.789`

## To-do
- [x] Test it with proper tools.
