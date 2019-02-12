# Currencies

Currencies are provided and available to load from our system, we have 122 most common global currencies. Don't hesistate to write us if we're missing any.

Besides the normal (fiat) currencies we have now also added some common cryptocurrencies, we are also accepting your requests for these.

Note: [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) unique currency codes are used as `id` fields of currencies to simlify inclusion as related IDs in documents.

## Get all Currencies

```shell
curl "https://api.spaceinvoices.com/v1/currencies" \
  -H "Authorization: LAUNCH_CODE"
```

```javascript
spaceInvoices.currency.list()
.then(function(currencies) {
  console.log(currencies);
})
```

```csharp
SpaceCurrencyService currencyService = new SpaceCurrencyService();
List<SpaceCurrency> currencies = currencyService.List();
```

```php
<?php
  Spaceinvoices\Currencies::find();
?>
```

> Returns:

```shell
[
  {
    "id": "EUR",
    "name": "European Union Euro",
    "symbol": "€",
    "type": "fiat"
  },
  {
    "id": "USD",
    "name": "United States Dollar",
    "symbol": "$",
    "type": "fiat"
  },
  {
    "id": "BTC",
    "name": "Bitcoin",
    "symbol": "₿",
    "type": "crypto"
  },
  {
    "id": "ETH",
    "name": "Ether",
    "symbol": "‎Ξ",
    "type": "crypto"
  }
]
```

```javascript
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

```csharp
public class SpaceCurrency
{
  [JsonProperty("id")]
  public string Id { get; set; }

  [JsonProperty("name")]
  public string Name { get; set; }

  [JsonProperty("symbol")]
  public string Symbol { get; set; }

  [JsonProperty("type")]
  public string Type { get; set; }
}
```

```php
<?php
  [
    {
      "id": "EUR",
      "name": "European Union Euro",
      "symbol": "€",
      "type": "fiat"
    },
    {
      "id": "USD",
      "name": "United States Dollar",
      "symbol": "$",
      "type": "fiat"
    },
    {
      "id": "BTC",
      "name": "Bitcoin",
      "symbol": "₿",
      "type": "crypto"
    },
    {
      "id": "ETH",
      "name": "Ether",
      "symbol": "‎Ξ",
      "type": "crypto"
    }
  ]
?>
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
