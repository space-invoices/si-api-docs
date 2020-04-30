# Calculations

This section is dedicated to understanding the approach we take when calculating totals on documents.

This section comes in handy when setting up front-end calculations to achieve matching values as on the final created documents.

### 1. Cut-off

In the first stage, we cut any numbers exceeding the one set on the document itself in the `decimalPlaces` property, default is `4`. No rounding is done.

This goes for values like `price`, `priceGross`, `quantity` and `discount` (if amount).

Any percent or tax values are always cut to `2` decimal places. This includes properties like `discount` (if percent) and `taxRate`.

### 2. Rounding

After each mathematical operation, we round the result to `2` digits, for example after calculating quantity times price we round using `half-up` rounding strategy and then use the rounded result in the next operation.
