# Taxes

Taxes are stored per Organization and are then referenced on Items that need to charge it.

Taxes have rates applied to them and the rates are chosen based on date of document when they came into force as rates might change sometimes. This ensures correct tax rates on documents based on the date of document.

NOTE: When adding taxes to document items or items, the tax can be easily referenced (in prioritised order) by it's id, rate or classification.

## Create New Tax

```shell
curl "https://api.spaceinvoices.com/v1/orgnizations/5a3683ea12d5a67dd0ef2f4d/taxes" \
  -H "Authorization: LAUNCH_CODE" \
  -d name="Value Added Tax" \
  -d abbreviation="VAT" \
  -d classification="standard" \
  -d _taxRates[0][rate]=15
```

```javascript
spaceInvoices.taxes.create(organizationId, {
  name: "Value Added Tax",
  abbreviation: "VAT",
  _taxRates: [{
    rate: 15
  }]
})
.then(function(tax) {
  console.log(tax);
})
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

```json
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

This endpoint creates a new Tax.

### HTTP Request

`POST https://api.spaceinvoices.com/v1/organizations/:id/taxes`

#### Query parameters

|      |     |
| ---: | --- |
| id **required** | ID of Orgniazation for which we are creting the Tax. |

#### Arguments

|      |     |
| ---: | --- |
| name | Name of Tax. |
| abbreviation | Abbreviation of Tax name ie. VAT. |
| classification | String classification of tax. _Can be used to easily load high, low, special, etc. taxes across countries and states without the need to know specific rates._ |
| _taxRates | Array of rates the Tax has. [toggle definition](#expand) |
| rate | Rate of tax. |
| dateValidFrom | Date when the rate came into force. _Used on Documents to determine which rate should be used based on Document date._ |
| [](#empty) | |
| recoverable _Default is *true*_ | Boolean if Tax is recoverable after being paid. |
| compound _Default is *false*_ | Boolean if Tax is compound. _Compound Tax is calculated based on Item price and any other Tax applied to Item. |

### HTTP Response

#### Arguments

|      |     |
| ---: | --- |
| id | Unique ID of model instance. |


## Add New Rate to a Tax

```shell
curl "https://api.spaceinvoices.com/v1/taxes/5a3683ea12d5a67dd0ef2f4c/taxRates" \
  -H "Authorization: LAUNCH_CODE" \
  -d rate=20 \
  -d dateValidFrom="2018-01-01"
```

```javascript
spaceInvoices.taxes.addANewRateToTax(taxId, {
  rate: 20,
  "dateValidFrom": "2018-01-01"
})
.then(function(tax) {
  console.log(tax);
})
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

```json
{
  "rate": 20,
  "dateValidFrom": "2018-01-01"
}
```

This endpoint creates a new Rate for a Tax.

### HTTP Request

`POST https://api.spaceinvoices.com/v1/taxes/:id/taxRates`

#### Query parameters

|      |     |
| ---: | --- |
| id **required** | ID of Tax for which we are creting the Rate. |

#### Arguments

|      |     |
| ---: | --- |
| rate | Rate of tax. |
| dateValidFrom | Date when the rate came into force. _Used on Documents to determine which rate should be used based on Document date._ |

### HTTP Response

#### Arguments

|      |     |
| ---: | --- |


## Update Tax

```shell
curl -X PUT "https://api.spaceinvoices.com/v1/taxes/5a3683ea12d5a67dd0ef2f4c" \
  -H "Authorization: LAUNCH_CODE" \
  -d name="Value Added Tax"
```

```javascript
spaceInvoices.taxes.edit(taxId, {
  name: "Value Added Tax 2",
})
.then(function(tax) {
  console.log(tax);
})
```

```php
<?php
  Spaceinvoices\Taxes::edit("TAX_ID", array(
    "name" => "Value Added Tax 2"
  ));
?>
```

> Returns:

```json
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

This endpoint updates a Tax by ID.

### HTTP Request

`PUT https://api.spaceinvoices.com/v1/taxes/:id`

#### Query parameters

|      |     |
| ---: | --- |

#### Arguments

|      |     |
| ---: | --- |
| name **required** | Name of Tax. |
| _taxRates | Array of rates the Tax has. [toggle definition](#expand) |
| rate | Rate of tax. |
| abbreviation | Abbreviation of Tax name ie. VAT. |
| classification | String classification of tax. _Can be used to easily load high, low, special, etc. taxes across countries and states without the need to know specific rates._ |
| dateValidFrom | Date when the rate came into force. _Used on Documents to determine which rate should be used based on Document date._ |
| [](#empty) | |
| recoverable _Default is *true*_ | Boolean if Tax is recoverable after being paid. |
| compound _Default is *false*_ | Boolean if Tax is compound. _Compound Tax is calculated based on Item price and any other Tax applied to Item. |

### HTTP Response

#### Arguments

|      |     |
| ---: | --- |


## Delete Tax

```shell
curl -X DELETE "https://api.spaceinvoices.com/v1/taxes/5a3683ea12d5a67dd0ef2f4c" \
  -H "Authorization: LAUNCH_CODE"
```

```javascript
spaceInvoices.taxes.delete(taxId)
.then(function(count) {
  console.log(count);
})
```

```php
<?php
  Spaceinvoices\Taxes::delete("TAX_ID");
?>
```

> Returns:

```json
{
  "count": 1
}
```

This endpoint deletes a Tax by ID.

A Tax can only be deleted if it's not used on any Document.

### HTTP Request

`DELETE https://api.spaceinvoices.com/v1/taxes/:id`

#### Query parameters

|      |     |
| ---: | --- |
| id **required** | ID of Tax to delete. |

### HTTP Response

#### Arguments

|      |     |
| ---: | --- |
| count | Number of successfuly deleted taxes. |


## List Taxes

```shell
curl "https://api.spaceinvoices.com/v1/organizations/5a3683ea12d5a67dd0ef2f4d/taxes" \
  -H "Authorization: LAUNCH_CODE"
```

```javascript
spaceInvoices.taxes.list(organizationId)
.then(function(taxes) {
  console.log(taxes);
})
```

```php
<?php
  Spaceinvoices\Taxes::find("ORGANIZATION_ID");
?>
```

> Returns:

```json
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

This endpoint lists Organization's Taxes.

### HTTP Request

`GET https://api.spaceinvoices.com/v1/organizations/:id/taxes`

#### Query parameters

|      |     |
| ---: | --- |
| id **required** | ID of Organization. |
| filter | Object containing query filters. See [Filters](#filters) section for more details. |

### HTTP Response

#### Arguments

|      |     |
| ---: | --- |
| name  | Name of Tax. |
| abbreviation  | Abbreviation of Tax name ie. VAT. |
| classification | String classification of tax. _Can be used to easily load high, low, special, etc. taxes across countries and states without the need to know specific rates._ |
| _taxRates | Array of rates the Tax has. [toggle definition](#expand) |
| rate | Rate of tax. |
| dateValidFrom | Date when the rate came into force. _Used on Documents to determine which rate should be used based on Document date._ |
| [](#empty) | |
| recoverable | Boolean if Tax is recoverable after being paid. |
| compound | Boolean if Tax is compound. _Compound Tax is calculated based on Item price and any other Tax applied to Item. |
