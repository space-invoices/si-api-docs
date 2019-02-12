# Countries

__List of 250 countries for which informational queries can be conducted (ie. english name, native name, currency, taxes, etc.)__

While all the countries are present in the list, data about local taxes and currencies for the least common countries may not be. We continually update it with country information as it is used to perform matching for companies. We are always open for suggestions on how we can make this feature better! Please get in contact with us.

## Get all Countries

```shell
curl "https://api.spaceinvoices.com/v1/countries" \
  -H "Authorization: LAUNCH_CODE"
```
```javascript
spaceInvoices.countries.list()
.then(countries => {
  console.log(countries);
})
```
```csharp
SpaceCountryService countryService = new SpaceCountryService();
List<SpaceCountry> countries = countryService.List();
```
```php
<?php
  Spaceinvoices\Countries::find();
?>
```

> Returns:

```shell
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
```javascript
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
```csharp
public class SpaceCountry
{
  [JsonProperty("name")]
  public string Name { get; set; }

  [JsonProperty("alpha2Code")]
  public string Alpha2Code { get; set; }

  [JsonProperty("alpha3Code")]
  public string Alpha3Code { get; set; }

  [JsonProperty("nativeName")]
  public string NativeName { get; set; }

  [JsonProperty("numericCode")]
  public string NumericCode { get; set; }

  [JsonProperty("translations")]
  public Dictionary<string, string> Translations { get; set; }

  [JsonProperty("taxes")]
  public List<SpaceCountryTax> Taxes { get; set; }

  [JsonProperty("currency")]
  public string Currency { get; set; }
}

public class SpaceCountryTax
{
  [JsonProperty("name")]
  public string Name { get; set; }

  [JsonProperty("abbreviation")]
  public string Abbreviation { get; set; }

  [JsonProperty("rate")]
  public string Rate { get; set; }

  [JsonProperty("classification")]
  public string Classification { get; set; }
}
```
```php
<?php
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
?>
```

This endpoint retrieves all Countries.

### HTTP Request

`GET https://api.spaceinvoices.com/v1/countries`

### HTTP Response

#### Arguments

|      |     |
| ---: | --- |
| name | String unique English name of the country. |
| alpha2Code | String unique ISO 2 letter code of the country. |
| alpha3Code | String unique ISO 3 letter code of the country. |
| nativeName | String unique native name of the country. |
| numericCode | String unique numeric code of the country. |
| translations | Object names of the country translated to other languages. [toggle definition](#expand) |
| key | String alpha2Code of the country the name is translated to. |
| value | String the translated name of country. |
| [](#empty) | |
| taxes | Array of objects country taxes and rates. _Usually value added tax. Tax data for least-used countries are not available at the moment._ [toggle definition](#expand) |
| name | String name of the tax. |
| abbreviation | String abbreviation of the tax. |
| rate | String rate of the tax. |
| classification | String classification of the tax rate ie. `standard`, `reduced`, `additional` in EU, `state`, `federal`, `additional` in US etc. |
| [](#empty) | |
| currency | String [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) name of currency primarily used in country. |
