# Countries

__List of 250 countries. Can be queried for info related to countries ie. english name, native name, currency, taxes, etc.__

While all countries are present in the list not all have data about local taxes and currencies. We are regularly updating the list as we use it to perform matching for companies. We are accepting your requests to fill out specific country data.

## Get all Countries

```shell
curl "https://api.spaceinvoices.com/v1/countries" \
  -H "Authorization: LAUNCH_CODE"
```

> Returns:

```json
[
  {
    "name": "Slovenia",
    "alpha2Code": "SI",
    "alpha3Code": "SVN",
    "nativeName": "Slovenija",
    "numericCode": "705",
    "translations": {
      "br": "Eslovênia",
      "pt": "Eslovénia",
      "nl": "Slovenië",
      "hr": "Slovenija",
      "fa": "اسلوونی",
      "de": "Slowenien",
      "es": "Eslovenia",
      "fr": "Slovénie",
      "ja": "スロベニア",
      "it": "Slovenia"
    },
    "taxes": [
      {
        "name": "Davek na dodano vrednost",
        "abbreviation": "DDV",
        "rate": "22",
        "classification": "standard"
      },
      {
        "name": "Davek na dodano vrednost",
        "abbreviation": "DDV",
        "rate": "9.5",
        "classification": "reduced"
      }
    ],
    "currency": "EUR"
  },
  {
    "name": "Netherlands",
    "alpha2Code": "NL",
    "alpha3Code": "NLD",
    "nativeName": "Nederland",
    "numericCode": "528",
    "translations": {
      "br": "Holanda",
      "pt": "Países Baixos",
      "nl": "Nederland",
      "hr": "Nizozemska",
      "fa": "پادشاهی هلند",
      "de": "Niederlande",
      "es": "Países Bajos",
      "fr": "Pays-Bas",
      "ja": "オランダ",
      "it": "Paesi Bassi"
    },
    "taxes": [
      {
        "name": "Belasting toegevoegde waarde",
        "abbreviation": "BTW",
        "rate": "21",
        "classification": "standard"
      },
      {
        "name": "Belasting toegevoegde waarde",
        "abbreviation": "BTW",
        "rate": "6",
        "classification": "reduced"
      },
      {
        "name": "Belasting toegevoegde waarde",
        "abbreviation": "BTW",
        "rate": "0",
        "classification": "additional"
      }
    ],
    "currency": "EUR"
  }
]
```

This endpoint retrieves all Countries.

### HTTP Request

`GET https://api.spaceinvoices.com/v1/countries`

### HTTP Response

#### Arguments

|      |     |
| ---: | --- |
| name | String unique English name of country. |
| alpha2Code | String unique ISO 2 letter code of country. |
| alpha3Code | String unique ISO 3 letter code of country. |
| nativeName | String unique native name of country. |
| numericCode | String unique numeric code of country. |
| translations | Object names of country translated to other languages. [toggle definition](#expand) |
| key | String alpha2Code of country the name is translated to. |
| value | String translated name of country. |
| [](#empty) | |
| taxes | Array of objects country taxes and rates. _Usualy value added tax. Not all countries have tax data at the moment._ [toggle definition](#expand) |
| name | String name of tax. |
| abbreviation | String abbreviation of tax. |
| rate | String rate of tax. |
| classification | String classification of tax rate ie. `standard`, `reduced`, `additional` in EU, `state`, `federal`, `additional` in US etc. |
| [](#empty) | |
| currency | String [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) name of currency primarily used in country. |
