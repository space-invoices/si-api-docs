# Taxes

Taxes are stored per Organization and are then referenced on Items for which tax is chargeable.

Each tax may have different rates applied to them, and the rates may be set for a specific date range for which the rate is in effect. The actual tax rate charged for any given item are chosen based on the document's indicated date if specific rates are applicable on the date of invoice issue. This ensures the correct tax rates are applied to documents.

NOTE: When adding taxes to document items or items, the tax can be easily referenced (in prioritized order) by its id, rate, or classification.

## Create New Tax

```shell
curl "https://api.spaceinvoices.com/v1/organizations/5a3683ea12d5a67dd0ef2f4d/taxes" \
  -H "Authorization: LAUNCH_CODE" \
  -d name="Value Added Tax" \
  -d abbreviation="VAT" \
  -d classification="standard" \
  -d _taxRates[0][rate]=15
```

```javascript
spaceInvoices.taxes
  .create(organizationId, {
    name: "Value Added Tax",
    abbreviation: "VAT",
    _taxRates: [
      {
        rate: 15,
      },
    ],
  })
  .then(function (tax) {
    console.log(tax);
  });
```

```csharp
List<SpaceTaxRate> taxRates = new List<SpaceTaxRate>();
taxRates.Add(new SpaceTaxRate { Rate = 22, DateValidFrom = "2018-01-01" });

SpaceTaxCreateOptions createOptions = new SpaceTaxCreateOptions
{
    Name = "Value Added Tax",
    Abbreviation = "VAT",
    _taxRates = taxRates
};

SpaceTaxService taxService = new SpaceTaxService();
SpaceTax tax = taxService.Create("ORGANIZATION_ID", createOptions);
```

```php
<?php
  Spaceinvoices\Taxes::create("ORGANIZATION_ID", array(
    "name" => "Value Added Tax",
    "abbreviation" => "VAT",
    "_taxRates" => [array(
      "rate" => 15
    )]
  ));
?>
```

> Returns:

```shell
{
  "id": "5a3683ea12d5a67dd0ef2f4c",
  "organizationId": "5a3683ea12d5a67dd0ef2f4d",
  "name": "GST 15",
  "_taxRates": [
    {
      "rate": 15,
      "dateValidFrom": "1970-01-01"
    }
  ],
  "recoverable": true,
  "compound": false,
}
```

```javascript
{
  "id": "5a3683ea12d5a67dd0ef2f4c",
  "organizationId": "5a3683ea12d5a67dd0ef2f4d",
  "name": "Value Added Tax",
  "abbreviation": "VAT",
  "classification": "standard",
  "_taxRates": [
    {
      "rate": 15,
      "dateValidFrom": "1970-01-01"
    }
  ],
  "recoverable": true,
  "compound": false,
}
```

```csharp
public class SpaceTax
{
  [JsonProperty("id")]
  public string Id { get; set; }

  [JsonProperty("organizationId")]
  public string OrganizationId { get; set; }

  [JsonProperty("name")]
  public string Name { get; set; }

  [JsonProperty("_taxRates")]
  public List<SpaceTaxRate> _taxRates { get; set; }

  [JsonProperty("recoverable")]
  public bool Recoverable { get; set; }

  [JsonProperty("compound")]
  public bool Compound { get; set; }
}

public class SpaceTaxRate
{
  [JsonProperty("rate")]
  public decimal Rate { get; set; }

  [JsonProperty("dateValidFrom")]
  public string DateValidFrom { get; set; }

}
```

```php
<?php
  {
    "id": "5a3683ea12d5a67dd0ef2f4c",
    "organizationId": "5a3683ea12d5a67dd0ef2f4d",
    "name": "GST 15",
    "_taxRates": [
      {
        "rate": 15,
        "dateValidFrom": "1970-01-01"
      }
    ],
    "recoverable": true,
    "compound": false,
  }
?>
```

This endpoint creates a new Tax.

### HTTP Request

`POST https://api.spaceinvoices.com/v1/organizations/:id/taxes`

#### Query parameters

|                 |                                                     |
| --------------: | --------------------------------------------------- |
| id **required** | ID of the Organization on which the Tax is created. |

#### Arguments

|                                 |                                                                                                                                                                    |
| ------------------------------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
|                            name | Name of the Tax.                                                                                                                                                   |
|                    abbreviation | Abbreviation of the Tax name ie. VAT.                                                                                                                              |
|                  classification | String classification of the tax. _Can be used to easily load high, low, special, etc. taxes across countries and states without the need to know specific rates._ |
|                      \_taxRates | Array of rates the Tax has. [toggle definition](#expand)                                                                                                           |
|                            rate | Rate of the tax.                                                                                                                                                   |
|                   dateValidFrom | Date when the rate came into force. _Used on Documents to determine which rate should be used based on Document date._                                             |
|                      [](#empty) |                                                                                                                                                                    |
| recoverable _Default is *true*_ | Boolean, if the ax is recoverable after being paid.                                                                                                                |
|   compound _Default is *false*_ | Boolean, if the Tax is compound. \_Compound Tax is calculated based on Item price and any other Tax applied to Item.                                               |

### HTTP Response

#### Arguments

|     |                                  |
| --: | -------------------------------- |
|  id | Unique ID of the model instance. |

## Add New Rate to a Tax

```shell
curl "https://api.spaceinvoices.com/v1/taxes/5a3683ea12d5a67dd0ef2f4c/taxRates" \
  -H "Authorization: LAUNCH_CODE" \
  -d rate=20 \
  -d dateValidFrom="2018-01-01"
```

```javascript
spaceInvoices.taxes
  .addANewRateToTax(taxId, {
    rate: 20,
    dateValidFrom: "2018-01-01",
  })
  .then(function (tax) {
    console.log(tax);
  });
```

```csharp

SpaceTaxService taxService = new SpaceTaxService();
SpaceTaxRate taxRate = new SpaceTaxRate
{
    Rate = 30,
    DateValidFrom = "2018-01-01"
};

SpaceTaxRate taxRate = taxService.AddRateToTax("TAX_ID", taxRate);
```

```php
<?php
  Spaceinvoices\Taxes::addANewRateToTax("TAX_ID", array(
    "rate" => 20,
    "dateValidFrom" => "2018-01-01"
  ));
?>
```

> Returns:

```shell
{
  "rate": 20,
  "dateValidFrom": "2018-01-01"
}
```

```javascript
{
  "rate": 20,
  "dateValidFrom": "2018-01-01"
}
```

```csharp
public class SpaceTaxRate
{
  [JsonProperty("rate")]
  public decimal Rate { get; set; }

  [JsonProperty("dateValidFrom")]
  public string DateValidFrom { get; set; }

}
```

```php
<?php
  {
    "rate": 20,
    "dateValidFrom": "2018-01-01"
  }
?>
```

This endpoint creates a new Rate for a Tax.

### HTTP Request

`POST https://api.spaceinvoices.com/v1/taxes/:id/taxRates`

#### Query parameters

|                 |                                              |
| --------------: | -------------------------------------------- |
| id **required** | ID of the Tax for which the Rate is created. |

#### Arguments

|               |                                                                                                                        |
| ------------: | ---------------------------------------------------------------------------------------------------------------------- |
|          rate | Rate of tax.                                                                                                           |
| dateValidFrom | Date when the rate came into force. _Used on Documents to determine which rate should be used based on Document date._ |

### HTTP Response

#### Arguments

|     |     |
| --: | --- |


## Update Tax

```shell
curl -X PUT "https://api.spaceinvoices.com/v1/taxes/5a3683ea12d5a67dd0ef2f4c" \
  -H "Authorization: LAUNCH_CODE" \
  -d name="Value Added Tax"
```

```javascript
spaceInvoices.taxes
  .edit(taxId, {
    name: "Value Added Tax 2",
  })
  .then(function (tax) {
    console.log(tax);
  });
```

```csharp
SpaceTaxService taxService = new SpaceTaxService();

SpaceTaxEditOptions editOptions = new SpaceTaxEditOptions
{
    Name = "Value Added Tax 2"
};

SpaceTax tax = taxService.Edit("TAX_ID", editOptions);
```

```php
<?php
  Spaceinvoices\Taxes::edit("TAX_ID", array(
    "name" => "Value Added Tax 2"
  ));
?>
```

> Returns:

```shell
{
  "id": "5a3683ea12d5a67dd0ef2f4c",
  "organizationId": "5a3683ea12d5a67dd0ef2f4d",
  "name": "GST 15",
  "_taxRates": [
    {
      "rate": 15,
      "dateValidFrom": "1970-01-01"
    }
  ],
  "recoverable": true,
  "compound": false,
}
```

```javascript
{
  "id": "5a3683ea12d5a67dd0ef2f4c",
  "organizationId": "5a3683ea12d5a67dd0ef2f4d",
  "name": "Value Added Tax 2",
  "abbreviation": "VAT",
  "_taxRates": [
    {
      "rate": 15,
      "dateValidFrom": "1970-01-01"
    }
  ],
  "recoverable": true,
  "compound": false,
}
```

```csharp
public class SpaceTax
{
  [JsonProperty("id")]
  public string Id { get; set; }

  [JsonProperty("organizationId")]
  public string OrganizationId { get; set; }

  [JsonProperty("name")]
  public string Name { get; set; }

  [JsonProperty("_taxRates")]
  public List<SpaceTaxRate> _taxRates { get; set; }

  [JsonProperty("recoverable")]
  public bool Recoverable { get; set; }

  [JsonProperty("compound")]
  public bool Compound { get; set; }

  [JsonProperty("abbreviation")]
  public string Abbreviation { get; set; }
}

public class SpaceTaxRate
{
  [JsonProperty("rate")]
  public decimal Rate { get; set; }

  [JsonProperty("dateValidFrom")]
  public string DateValidFrom { get; set; }

}
```

```php
<?php
  {
    "id": "5a3683ea12d5a67dd0ef2f4c",
    "organizationId": "5a3683ea12d5a67dd0ef2f4d",
    "name": "GST 15",
    "_taxRates": [
      {
        "rate": 15,
        "dateValidFrom": "1970-01-01"
      }
    ],
    "recoverable": true,
    "compound": false,
  }
?>
```

This endpoint updates a Tax by ID.

### HTTP Request

`PUT https://api.spaceinvoices.com/v1/taxes/:id`

#### Query parameters

|     |     |
| --: | --- |


#### Arguments

|                                 |                                                                                                                                                                |
| ------------------------------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|               name **required** | Name of the Tax.                                                                                                                                               |
|                      \_taxRates | Array of rates the Tax has. [toggle definition](#expand)                                                                                                       |
|                            rate | Rate of the tax.                                                                                                                                               |
|                    abbreviation | Abbreviation of the Tax name ie. VAT.                                                                                                                          |
|                  classification | String classification of tax. _Can be used to easily load high, low, special, etc. taxes across countries and states without the need to know specific rates._ |
|                   dateValidFrom | Date when the rate came into force. _Used on Documents to determine which rate should be used based on Document date._                                         |
|                      [](#empty) |                                                                                                                                                                |
| recoverable _Default is *true*_ | Boolean, if the Tax is recoverable after being paid.                                                                                                           |
|   compound _Default is *false*_ | Boolean, if the Tax is compound. \_Compound Tax is calculated based on Item price and any other Tax applied to Item.                                           |

### HTTP Response

#### Arguments

|     |     |
| --: | --- |


## Delete Tax

```shell
curl -X DELETE "https://api.spaceinvoices.com/v1/taxes/5a3683ea12d5a67dd0ef2f4c" \
  -H "Authorization: LAUNCH_CODE"
```

```javascript
spaceInvoices.taxes.delete(taxId).then(function (count) {
  console.log(count);
});
```

```csharp
SpaceTaxService taxService = new SpaceTaxService();
Counter counter = taxService.Delete("TAX_ID");
```

```php
<?php
  Spaceinvoices\Taxes::delete("TAX_ID");
?>
```

> Returns:

```shell
{
  "count": 1
}
```

```javascript
{
  "count": 1
}
```

```csharp
public class Counter
{
  [JsonProperty("count")]
  public int Count { get; set; }
}
```

```php
<?php
  {
    "count": 1
  }
?>
```

This endpoint deletes a Tax by ID.

A Tax can only be deleted if it is not used on any Document.

### HTTP Request

`DELETE https://api.spaceinvoices.com/v1/taxes/:id`

#### Query parameters

|                 |                          |
| --------------: | ------------------------ |
| id **required** | ID of the Tax to delete. |

### HTTP Response

#### Arguments

|       |                                       |
| ----: | ------------------------------------- |
| count | Number of successfully deleted taxes. |

## List Taxes

```shell
curl "https://api.spaceinvoices.com/v1/organizations/5a3683ea12d5a67dd0ef2f4d/taxes" \
  -H "Authorization: LAUNCH_CODE"
```

```javascript
spaceInvoices.taxes.list(organizationId).then(function (taxes) {
  console.log(taxes);
});
```

```csharp
SpaceTaxService taxService = new SpaceTaxService();
List<SpaceTax> taxes = taxService.List("ORGANIZATION_ID");
```

```php
<?php
  Spaceinvoices\Taxes::find("ORGANIZATION_ID");
?>
```

> Returns:

```shell
[
  {
    "id": "5a3683ea12d5a67dd0ef2f4e",
    "name": "Value Added Tax",
    "abbreviation": "VAT",
    "_taxRates": [
      {
        "id": "e5be3095-4d31-4f09-9ac7-d459a8792621",
        "dateValidFrom": 1970-01-01,
        "rate": 22
      }
    ],
    "recoverable": true,
    "compound": false
  }
]
```

```javascript
[
  {
    id: "5a3683ea12d5a67dd0ef2f4c",
    organizationId: "5a3683ea12d5a67dd0ef2f4d",
    name: "Space suit",
    description: "Best in class suit made from durable composites.",
    unit: "tax",
    price: 100,
    taxIds: ["5a3683ea12d5a67dd0ef2f4e"],
    taxes: [
      {
        id: "5a3683ea12d5a67dd0ef2f4e",
        name: "VAT 22%",
        _taxRates: [
          {
            id: "e5be3095-4d31-4f09-9ac7-d459a8792621",
            dateValidFrom: 1970 - 01 - 01,
            rate: 22,
          },
        ],
        recoverable: true,
        compound: false,
      },
    ],
  },
];
```

```csharp
List<SpaceTax>
```

```php
<?php
  [
    {
      "id": "5a3683ea12d5a67dd0ef2f4c",
      "organizationId": "5a3683ea12d5a67dd0ef2f4d",
      "name": "Space suit",
      "description": "Best in class suit made from durable composites.",
      "unit": "tax",
      "price": 100,
      "taxIds": [ "5a3683ea12d5a67dd0ef2f4e" ],
      "taxes": [
        {
          "id": "5a3683ea12d5a67dd0ef2f4e",
          "name": "VAT 22%",
          "_taxRates": [
            {
              "id": "e5be3095-4d31-4f09-9ac7-d459a8792621",
              "dateValidFrom": 1970-01-01,
              "rate": 22
            }
          ],
          "recoverable": true,
          "compound": false
        }
      ]
    }
  ]
?>
```

This endpoint lists the Organization's Taxes.

### HTTP Request

`GET https://api.spaceinvoices.com/v1/organizations/:id/taxes`

#### Query parameters

|                 |                                                                                        |
| --------------: | -------------------------------------------------------------------------------------- |
| id **required** | ID of the Organization.                                                                |
|          filter | Object containing query filters. See the [Filters](#filters) section for more details. |

### HTTP Response

#### Arguments

|                |                                                                                                                                                                    |
| -------------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
|           name | Name of the Tax.                                                                                                                                                   |
|   abbreviation | Abbreviation of the Tax name ie. VAT.                                                                                                                              |
| classification | String classification of the tax. _Can be used to easily load high, low, special, etc. taxes across countries and states without the need to know specific rates._ |
|     \_taxRates | Array of rates the Tax has. [toggle definition](#expand)                                                                                                           |
|           rate | Rate of the tax.                                                                                                                                                   |
|  dateValidFrom | Date when the rate came into force. _Used on Documents to determine which rate should be used based on Document date._                                             |
|     [](#empty) |                                                                                                                                                                    |
|    recoverable | Boolean, if the Tax is recoverable after being paid.                                                                                                               |
|       compound | Boolean, if the Tax is compound. \_Compound Tax is calculated based on Item price and any other Tax applied to Item.                                               |
