# Currencies

Currencies are provided and available to load from our system, we are accepting your requests for other currencies as the database is partial.

Besides the normal (fiat) currencies we have now also added some common cryptocurrencies, we are also accepting your requests for these.

Note: [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) unique currency codes are used as `id` fields of currencies to simlify inclusion as related IDs in documents.

## Get all Currencies

```shell
curl "https://api.spaceinvoices.com/v1/currencies" \
  -H "Authorization: TOKEN"
```
```javascript
spaceInvoices.currency.list()
.then(function(currencies) {
  console.log(currencies);
})
```

```php
<?php
  Spaceinvoices\Currencies::find();
?>
```

> Returns:

```json
[
  {
    "isoName": "EUR",
    "name": "European Union Euro",
    "symbol": "€",
    "type": "fiat"
  },
  {
    "isoName": "USD",
    "name": "United States Dollar",
    "symbol": "$",
    "type": "fiat"
  },
  {
    "isoName": "BTC",
    "name": "Bitcoin",
    "symbol": "₿",
    "type": "crypto"
  },
  {
    "isoName": "ETH",
    "name": "Ether",
    "symbol": "‎Ξ",
    "type": "crypto"
  }
]
```

This endpoint retrieves all Currencies.

### HTTP Request

`GET https://api.spaceinvoices.com/v1/currencies`

### HTTP Response

#### Arguments

|      |     |
| ---: | --- |
| isoName | Unique [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) currency name. _Also used as unique ID of model instance._ |
| name | Name of Currency. |
| symbol | Symbol of currency. |po
| type | Type of currency. _Either `fiat` or `crypto`_ |
