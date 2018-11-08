# Organizations

__Any given account can have multiple organizations either by creating them or by being given access to them from other account holders.__

This is especially useful when there is a need to manage multiple organizations as they are created for users that might signup to a certain product.

An organization holds a reference to most of the information that is created through the API.

## Create New Organization

```shell
curl "https://api.spaceinvoices.com/v1/accounts/:id/organizations" \
  -H "Authorization: LAUNCH_CODE" \
  -d name="Space Exploration Technologies corp" \
  -d address="Rocket Road" \
  -d city="Hawthorne" \
  -d zip="CA 90250" \
  -d country="USA" \
  -d IBAN="123454321 123454321" \
  -d bank="Bank Of America"
```
```javascript
spaceInvoices.organizations.create(accountId, {
  name: "Space Exploration Technologies corp",
  address: "Rocket Road",
  city: "Hawthorne",
  zip: "CA 90250",
  country: "USA",
  IBAN: "123454321 123454321",
  bank: "Bank Of America"
})
.then(function(organization) {
  console.log(organization);
})
.catch(function(error) {
  console.error(error);
});
```

```csharp
SpaceOrganizationCreateOptions createOptions = new SpaceOrganizationCreateOptions{
    Name = "Space Exploration Technologies corp",
    Address = "Rocket Road",
    City = "Hawthorne",
    Zip = "CA 90250",
    Country = "USA",
    Iban = "123454321 123454321"
};

SpaceOrganizationService organizationService = new SpaceOrganizationService();
SpaceOrganization organization = organizationService.Create("ACCOUNT_ID", createOptions);

```

```php
<?php
  Spaceinvoices\Organizations::create("ACCOUNT_ID", array(
    "name" => "Space Exploration Technologies corp",
    "address" => "Rocket Road",
    "city" => "Hawthorne",
    "zip" => "CA 90250",
    "country" => "USA",
    "IBAN" => "123454321 123454321",
    "bank" => "Bank Of America"
  ));
?>
```

> Returns:

```shell
{
  "id": "5a3683ea12d5a67dd0ef2f4c",
  "name": "Space Exploration Technologies corp",
  "address": "Rocket Road",
  "city": "Hawthorne",
  "zip": "CA 90250",
  "country": "USA",
  "IBAN": "123454321 123454321",
  "bank": "Bank Of Amerika",
  "_defaults": [
    {
      "name": "image_logo",
      "value": ""
    }, {
      "name": "image_signature",
      "value": ""
    }, {
      "name": "invoice_note",
      "value": "When paying please use reference number [document number].\nPlease transfer the money to bank account [IBAN] open at [bank].\n\nThank you for your business."
    }, {
      "name": "estimate_note",
      "value": "When paying please use reference number [document number].\n
        Please transfer the money to bank account [IBAN] open at [bank]."
    }, {
      "name": "advance_note",
      "value": "Thank you for your payment."
    }, {
      "name": "signature",
      "value": "[organization name]"
    }, {
      "name": "footer",
      "value": "[organization name], [address], [city] [zip], [country]. IBAN: [IBAN] open at [bank]"
    }, {
      "name": "email_reminder",
      "value": "Dear customer,\n\nthis is a friendly reminder that the invoice [document number] is due on [document due].\n\nThank you and best regards,\n[organization name]"
    }, {
      "name": "email_document",
      "value": ""
    }, {
      "name": "currencyId",
      "value": "USD"
    }, {
      "name": "color_main",
      "value": "0082c9"
    }, {
      "name": "invoice_dueDays",
      "value": "30"
    }, {
      "name": "invoice_dueDays",
      "value": "30"
    }
  ],
  "locale": "en",
  "active": true,
  "supportPin": "12345",
  "brand": "space-invoices"
}
```

```javascript
{
  "id": "5a3683ea12d5a67dd0ef2f4c",
  "name": "Space Exploration Technologies corp",
  "address": "Rocket Road",
  "city": "Hawthorne",
  "zip": "CA 90250",
  "country": "USA",
  "IBAN": "123454321 123454321",
  "bank": "Bank Of Amerika",
  "_defaults": [
    {
      "name": "image_logo",
      "value": ""
    }, {
      "name": "image_signature",
      "value": ""
    }, {
      "name": "invoice_note",
      "value": "When paying please use reference number [document number].\nPlease transfer the money to bank account [IBAN] open at [bank].\n\nThank you for your business."
    }, {
      "name": "estimate_note",
      "value": "When paying please use reference number [document number].\n
        Please transfer the money to bank account [IBAN] open at [bank]."
    }, {
      "name": "advance_note",
      "value": "Thank you for your payment."
    }, {
      "name": "signature",
      "value": "[organization name]"
    }, {
      "name": "footer",
      "value": "[organization name], [address], [city] [zip], [country]. IBAN: [IBAN] open at [bank]"
    }, {
      "name": "email_reminder",
      "value": "Dear customer,\n\nthis is a friendly reminder that the invoice [document number] is due on [document due].\n\nThank you and best regards,\n[organization name]"
    }, {
      "name": "email_document",
      "value": ""
    }, {
      "name": "currencyId",
      "value": "USD"
    }, {
      "name": "color_main",
      "value": "0082c9"
    }, {
      "name": "invoice_dueDays",
      "value": "30"
    }, {
      "name": "invoice_dueDays",
      "value": "30"
    }
  ],
  "locale": "en",
  "active": true,
  "supportPin": "12345",
  "brand": "space-invoices"
}
```

```csharp
public class SpaceOrganization
{

    [JsonProperty("id")]
    public string Id { get; set; }

    [JsonProperty("name")]
    public string Name { get; set; }

    [JsonProperty("address")]
    public string Address { get; set; }

    [JsonProperty("address2")]
    public string Address2 { get; set; }

    [JsonProperty("city")]
    public string City { get; set; }

    [JsonProperty("zip")]
    public string Zip { get; set; }

    [JsonProperty("country")]
    public string Country { get; set; }

    [JsonProperty("IBAN")]
    public string Iban { get; set; }

    [JsonProperty("bank")]
    public string Bank { get; set; }

    [JsonProperty("_defaults")]
    public List<SpaceDefault> Defaults { get; set; }

    [JsonProperty("locale")]
    public string Locale { get; set; }

    [JsonProperty("active")]
    public bool Active { get; set; }

    [JsonProperty("supportPin")]
    public string SupportPin { get; set; }

    [JsonProperty("brand")]
    public string Brand { get; set; }

}
```

```php
<?php
  {
    "id": "5a3683ea12d5a67dd0ef2f4c",
    "name": "Space Exploration Technologies corp",
    "address": "Rocket Road",
    "city": "Hawthorne",
    "zip": "CA 90250",
    "country": "USA",
    "IBAN": "123454321 123454321",
    "bank": "Bank Of Amerika",
    "_defaults": [
      {
        "name": "image_logo",
        "value": ""
      }, {
        "name": "image_signature",
        "value": ""
      }, {
        "name": "invoice_note",
        "value": "When paying please use reference number [document number].\nPlease transfer the money to bank account [IBAN] open at [bank].\n\nThank you for your business."
      }, {
        "name": "estimate_note",
        "value": "When paying please use reference number [document number].\n
          Please transfer the money to bank account [IBAN] open at [bank]."
      }, {
        "name": "advance_note",
        "value": "Thank you for your payment."
      }, {
        "name": "signature",
        "value": "[organization name]"
      }, {
        "name": "footer",
        "value": "[organization name], [address], [city] [zip], [country]. IBAN: [IBAN] open at [bank]"
      }, {
        "name": "email_reminder",
        "value": "Dear customer,\n\nthis is a friendly reminder that the invoice [document number] is due on [document due].\n\nThank you and best regards,\n[organization name]"
      }, {
        "name": "email_document",
        "value": ""
      }, {
        "name": "currencyId",
        "value": "USD"
      }, {
        "name": "color_main",
        "value": "0082c9"
      }, {
        "name": "invoice_dueDays",
        "value": "30"
      }, {
        "name": "invoice_dueDays",
        "value": "30"
      }
    ],
    "locale": "en",
    "active": true,
    "supportPin": "12345",
    "brand": "space-invoices"
  }
?>
```

This endpoint creates a new Organization.

### HTTP Request

`POST https://api.spaceinvoices.com/v1/accounts/:id/organizations`

#### Query parameters

|      |     |
| ---: | --- |
| id **required** | ID of account. |

#### Arguments

|      |     |
| ---: | --- |
| name **required** | Name of company or other type of organization. |
| address | Street or similar address. |
| address2 | Address line 2. |
| city | City name. |
| zip | Zip / post code. |
| country **required** | String name of country. _If passed as one of [ISO 3166](https://en.wikipedia.org/wiki/ISO_3166-1) values (English name, Native name or 2 letter code) the parameter is used to apply some smart defaults to the organization being created including country default tax rates. We recommend providing either english language or native name of country to ensure proper taxes are applied but this is not the required form and is not validated as such._ |
| taxSubject _default is *false*_ | Specify if the organization is subject to tax. |
| taxNumber | String VAT / GST / sales tax / etc. tax identification number. |
| companyNumber | String registration or similar identification number. |
| IBAN | Bank account number. |
| website | Website address. |
| locale _default is *en*_ | ISO 639-1 locale code. [Wikipedia](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) _Effects language of default texts and system messages._ |
| brand _default is *space-invocies*_ | Brand source identification for internal use. |

### HTTP Response

#### Arguments

|      |     |
| ---: | --- |
| id | Unique ID of model instance |
| _defaults | Array of objects. _Collection of organization's default settings._ _Can be used for custom settings._ [toggle definition](#expand) |
| name | Unique (to orgnization) name of setting. |
| value | Value of setting. |
| [](#empty) | |
| active | Boolean indicator if organization is active (enabled). |
| supportPin | 5 digit number used to match organization requesting support. |


## Add Logo or Signature image to Organization

```shell
curl "https://api.spaceinvoices.com/v1/organizations/:id/upload-image?type=logo" \
  -H "Authorization: LAUNCH_CODE"
```

```javascript

var filePath = './mac.jpg';
var type = 'logo' // signature

spaceInvoices.organizations
.uploadImage(organizationId, filePath, type)
.then(function(res) {
  console.log(res)
})
.catch(function(error) {
  console.error(error);
});
```
```csharp
SpaceOrganizationService organizationService = new SpaceOrganizationService();

FileInfo fi = new FileInfo("PATH_TO_FILE");

if (fi.Exists)
{
  using (FileStream fileStream = fi.OpenRead())
  {
      var res = organizationService.UploadImage("ORGANIZATION_ID", "type", fileStream);
  }
}
```
```php
<?php
  Spaceinvoices\Organizations::uploadImage("ORGANIZATION_ID", "PATH_TO_FILE", "TYPE");
?>
```

> Returns:

```shell
true
```
```javascript
true
```
```csharp
true
```
```php
<?php
  true
?>
```

__This enpoint allows uploading a Logo or Signature image for a given organization. The image is then automatically used in all documents when generating a PDF.__

To check if an organization has a logo or signature image set we simply need to check an organization's nested `_defaults` object for keys containing `image_logo` or `image_signature`, the key should be set to `true`. The _defaults object can be viewed by [querying a organization's data](#read-organization-39-s-details).

NOTE: Currently to remove an organization's logo or signature we need to update the value of the property in `_defaults` object to `false`. We will also provide an endpoint for removing images in the future `/organizations/:id/remove-image?type=logo`.

### HTTP Request

`POST https://api.spaceinvoices.com/v1/organizations/:organizationId/upload-image?type=type`

#### Query parameters

|      |     |
| ---: | --- |
| id **required** | ID of Organization to set image for. |
| type **required** | The type of image we are uploading, _Valid options are `logo` or `signature`_. |

|      |     |
| ---: | --- |
| image | The image payload to upload _Must be sent as payload  `Content-Type:application/x-www-form-urlencoded`_. |

### HTTP Response

#### Attributes

|      |     |
| ---: | --- |
| success | Boolean true if request was succesful. |


## Read Organization's details

```shell
curl "https://api.spaceinvoices.com/v1/organizations/:organizationId" \
  -H "Authorization: LAUNCH_CODE"
```
```javascript
spaceInvoices.organizations.getById(organizationId)
.then(function(organization) {
  console.log(organization);
})
.catch(function(error) {
  console.error(error);
});
```
```csharp
SpaceOrganizationService organizationService = new SpaceOrganizationService();
SpaceOrganization organization = organizationService.GetById("ORGANIZATION_ID");
```
```php
<?php
  Spaceinvoices\Organizations::getById("ORGANIZATION_ID");
?>

```
> Returns:

```javascript
{
  "id": "5a3683ea12d5a67dd0ef2f4c",
  "name": "Space Exploration Technologies corp",
  "address": "Rocket Road",
  "city": "Hawthorne",
  "zip": "CA 90250",
  "country": "USA",
  "IBAN": "123454321 123454321",
  "bank": "Bank Of Amerika",
  "_defaults": [
    {
      "name": "image_logo",
      "value": ""
    }, {
      "name": "image_signature",
      "value": ""
    }, {
      "name": "invoice_note",
      "value": "When paying please use reference number [document number].\nPlease transfer the money to bank account [IBAN] open at [bank].\n\nThank you for your business."
    }, {
      "name": "estimate_note",
      "value": "When paying please use reference number [document number].\n
        Please transfer the money to bank account [IBAN] open at [bank]."
    }, {
      "name": "advance_note",
      "value": "Thank you for your payment."
    }, {
      "name": "signature",
      "value": "[organization name]"
    }, {
      "name": "footer",
      "value": "[organization name], [address], [city] [zip], [country]. IBAN: [IBAN] open at [bank]"
    }, {
      "name": "email_reminder",
      "value": "Dear customer,\n\nthis is a friendly reminder that the invoice [document number] is due on [document due].\n\nThank you and best regards,\n[organization name]"
    }, {
      "name": "email_document",
      "value": ""
    }, {
      "name": "currencyId",
      "value": "USD"
    }, {
      "name": "color_main",
      "value": "0082c9"
    }, {
      "name": "invoice_dueDays",
      "value": "30"
    }, {
      "name": "invoice_dueDays",
      "value": "30"
    }
  ],
  "locale": "en",
  "active": true,
  "supportPin": "12345",
  "brand": "space-invoices"
}
```
```shell
{
  "id": "5a3683ea12d5a67dd0ef2f4c",
  "name": "Space Exploration Technologies corp",
  "address": "Rocket Road",
  "city": "Hawthorne",
  "zip": "CA 90250",
  "country": "USA",
  "IBAN": "123454321 123454321",
  "bank": "Bank Of Amerika",
  "_defaults": [
    {
      "name": "image_logo",
      "value": ""
    }, {
      "name": "image_signature",
      "value": ""
    }, {
      "name": "invoice_note",
      "value": "When paying please use reference number [document number].\nPlease transfer the money to bank account [IBAN] open at [bank].\n\nThank you for your business."
    }, {
      "name": "estimate_note",
      "value": "When paying please use reference number [document number].\n
        Please transfer the money to bank account [IBAN] open at [bank]."
    }, {
      "name": "advance_note",
      "value": "Thank you for your payment."
    }, {
      "name": "signature",
      "value": "[organization name]"
    }, {
      "name": "footer",
      "value": "[organization name], [address], [city] [zip], [country]. IBAN: [IBAN] open at [bank]"
    }, {
      "name": "email_reminder",
      "value": "Dear customer,\n\nthis is a friendly reminder that the invoice [document number] is due on [document due].\n\nThank you and best regards,\n[organization name]"
    }, {
      "name": "email_document",
      "value": ""
    }, {
      "name": "currencyId",
      "value": "USD"
    }, {
      "name": "color_main",
      "value": "0082c9"
    }, {
      "name": "invoice_dueDays",
      "value": "30"
    }, {
      "name": "invoice_dueDays",
      "value": "30"
    }
  ],
  "locale": "en",
  "active": true,
  "supportPin": "12345",
  "brand": "space-invoices"
}
```
```csharp
public class SpaceOrganization
{
  [JsonProperty("id")]
  public string Id { get; set; }

  [JsonProperty("name")]
  public string Name { get; set; }

  [JsonProperty("address")]
  public string Address { get; set; }

  [JsonProperty("address2")]
  public string Address2 { get; set; }

  [JsonProperty("city")]
  public string City { get; set; }

  [JsonProperty("zip")]
  public string Zip { get; set; }

  [JsonProperty("country")]
  public string Country { get; set; }

  [JsonProperty("IBAN")]
  public string Iban { get; set; }

  [JsonProperty("bank")]
  public string Bank { get; set; }

  [JsonProperty("_defaults")]
  public List<SpaceDefault> Defaults { get; set; }

  [JsonProperty("locale")]
  public string Locale { get; set; }

  [JsonProperty("active")]
  public bool Active { get; set; }

  [JsonProperty("supportPin")]
  public string SupportPin { get; set; }

  [JsonProperty("brand")]
  public string Brand { get; set; }

}
```
```php
<?php
  {
    "id": "5a3683ea12d5a67dd0ef2f4c",
    "name": "Space Exploration Technologies corp",
    "address": "Rocket Road",
    "city": "Hawthorne",
    "zip": "CA 90250",
    "country": "USA",
    "IBAN": "123454321 123454321",
    "bank": "Bank Of Amerika",
    "_defaults": [
      {
        "name": "image_logo",
        "value": ""
      }, {
        "name": "image_signature",
        "value": ""
      }, {
        "name": "invoice_note",
        "value": "When paying please use reference number [document number].\nPlease transfer the money to bank account [IBAN] open at [bank].\n\nThank you for your business."
      }, {
        "name": "estimate_note",
        "value": "When paying please use reference number [document number].\n
          Please transfer the money to bank account [IBAN] open at [bank]."
      }, {
        "name": "advance_note",
        "value": "Thank you for your payment."
      }, {
        "name": "signature",
        "value": "[organization name]"
      }, {
        "name": "footer",
        "value": "[organization name], [address], [city] [zip], [country]. IBAN: [IBAN] open at [bank]"
      }, {
        "name": "email_reminder",
        "value": "Dear customer,\n\nthis is a friendly reminder that the invoice [document number] is due on [document due].\n\nThank you and best regards,\n[organization name]"
      }, {
        "name": "email_document",
        "value": ""
      }, {
        "name": "currencyId",
        "value": "USD"
      }, {
        "name": "color_main",
        "value": "0082c9"
      }, {
        "name": "invoice_dueDays",
        "value": "30"
      }, {
        "name": "invoice_dueDays",
        "value": "30"
      }
    ],
    "locale": "en",
    "active": true,
    "supportPin": "12345",
    "brand": "space-invoices"
  }
?>
```

This endpoint returns an Organization's details.

### HTTP Request

`GET https://api.spaceinvoices.com/v1/organizations/:id`

#### Query parameters

|      |     |
| ---: | --- |
| id **required** | ID of Organization to return. |

### HTTP Response

#### Attributes

|      |     |
| ---: | --- |
| name | Name of company or other type of organization. |
| address | Street or similar address. |
| address2 | Address line 2. |
| city | City name. |
| zip | Zip / post code. |
| country | String name of country. |
| taxSubject | Specify if the organization is subject to tax. |
| taxNumber | String VAT / GST / sales tax / etc. tax identification number. |
| companyNumber | String registration or similar identification number. |
| IBAN | Bank account number. |
| website | Website address. |
| locale | ISO 639-1 locale code. [Wikipedia](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) _Effects language of default texts and system messages._ |
| brand | Brand source identification for internal use. |


## List Organizations

```shell
curl "https://api.spaceinvoices.com/v1/accounts/:id/organizations" \
  -H "Authorization: LAUNCH_CODE"
```

```javascript
spaceInvoices.organizations.list(accountId)
.then(function(organization) {
  console.log(organization);
})
.catch(function(error) {
  console.error(error);
});
```

```csharp
SpaceOrganizationService organizationService = new SpaceOrganizationService();
List<SpaceOrganization> organizations = organizationService.List("ACCOUNT_ID");
```

```php
<?php
  Spaceinvoices\Organizations::find("ACCOUNT_ID");
?>
```

> Returns:

```shell
[
  {
    "id": "5a3683ea12d5a67dd0ef2f4c",
    "name": "Space Exploration Technologies corp",
    "address": "Rocket Road",
    "city": "Hawthorne",
    "zip": "CA 90250",
    "country": "USA",
    "IBAN": "123454321 123454321",
    "bank": "Bank Of Amerika",
    "_defaults": [
      {
        "name": "image_logo",
        "value": ""
      }, {
        "name": "image_signature",
        "value": ""
      }, {
        "name": "invoice_note",
        "value": "When paying please use reference number [document number].\nPlease transfer the money to bank account [IBAN] open at [bank].\n\nThank you for your business."
      }, {
        "name": "estimate_note",
        "value": "When paying please use reference number [document number].\n
          Please transfer the money to bank account [IBAN] open at [bank]."
      }, {
        "name": "advance_note",
        "value": "Thank you for your payment."
      }, {
        "name": "signature",
        "value": "[organization name]"
      }, {
        "name": "footer",
        "value": "[organization name], [address], [city] [zip], [country]. IBAN: [IBAN] open at [bank]"
      }, {
        "name": "email_reminder",
        "value": "Dear customer,\n\nthis is a friendly reminder that the invoice [document number] is due on [document due].\n\nThank you and best regards,\n[organization name]"
      }, {
        "name": "email_document",
        "value": ""
      }, {
        "name": "currencyId",
        "value": "USD"
      }, {
        "name": "color_main",
        "value": "0082c9"
      }, {
        "name": "invoice_dueDays",
        "value": "30"
      }, {
        "name": "invoice_dueDays",
        "value": "30"
      }
    ],
    "locale": "en",
    "active": true,
    "supportPin": "12345",
    "brand": "space-invoices"
  }
]
```

```javascript
[
  {
    "id": "5a3683ea12d5a67dd0ef2f4c",
    "name": "Space Exploration Technologies corp",
    "address": "Rocket Road",
    "city": "Hawthorne",
    "zip": "CA 90250",
    "country": "USA",
    "IBAN": "123454321 123454321",
    "bank": "Bank Of Amerika",
    "_defaults": [
      {
        "name": "image_logo",
        "value": ""
      }, {
        "name": "image_signature",
        "value": ""
      }, {
        "name": "invoice_note",
        "value": "When paying please use reference number [document number].\nPlease transfer the money to bank account [IBAN] open at [bank].\n\nThank you for your business."
      }, {
        "name": "estimate_note",
        "value": "When paying please use reference number [document number].\n
          Please transfer the money to bank account [IBAN] open at [bank]."
      }, {
        "name": "advance_note",
        "value": "Thank you for your payment."
      }, {
        "name": "signature",
        "value": "[organization name]"
      }, {
        "name": "footer",
        "value": "[organization name], [address], [city] [zip], [country]. IBAN: [IBAN] open at [bank]"
      }, {
        "name": "email_reminder",
        "value": "Dear customer,\n\nthis is a friendly reminder that the invoice [document number] is due on [document due].\n\nThank you and best regards,\n[organization name]"
      }, {
        "name": "email_document",
        "value": ""
      }, {
        "name": "currencyId",
        "value": "USD"
      }, {
        "name": "color_main",
        "value": "0082c9"
      }, {
        "name": "invoice_dueDays",
        "value": "30"
      }, {
        "name": "invoice_dueDays",
        "value": "30"
      }
    ],
    "locale": "en",
    "active": true,
    "supportPin": "12345",
    "brand": "space-invoices"
  }
]
```

```csharp
List<SpaceOrganization>
```

```php
<?php
[
  {
    "id": "5a3683ea12d5a67dd0ef2f4c",
    "name": "Space Exploration Technologies corp",
    "address": "Rocket Road",
    "city": "Hawthorne",
    "zip": "CA 90250",
    "country": "USA",
    "IBAN": "123454321 123454321",
    "bank": "Bank Of Amerika",
    "_defaults": [
      {
        "name": "image_logo",
        "value": ""
      }, {
        "name": "image_signature",
        "value": ""
      }, {
        "name": "invoice_note",
        "value": "When paying please use reference number [document number].\nPlease transfer the money to bank account [IBAN] open at [bank].\n\nThank you for your business."
      }, {
        "name": "estimate_note",
        "value": "When paying please use reference number [document number].\n
          Please transfer the money to bank account [IBAN] open at [bank]."
      }, {
        "name": "advance_note",
        "value": "Thank you for your payment."
      }, {
        "name": "signature",
        "value": "[organization name]"
      }, {
        "name": "footer",
        "value": "[organization name], [address], [city] [zip], [country]. IBAN: [IBAN] open at [bank]"
      }, {
        "name": "email_reminder",
        "value": "Dear customer,\n\nthis is a friendly reminder that the invoice [document number] is due on [document due].\n\nThank you and best regards,\n[organization name]"
      }, {
        "name": "email_document",
        "value": ""
      }, {
        "name": "currencyId",
        "value": "USD"
      }, {
        "name": "color_main",
        "value": "0082c9"
      }, {
        "name": "invoice_dueDays",
        "value": "30"
      }, {
        "name": "invoice_dueDays",
        "value": "30"
      }
    ],
    "locale": "en",
    "active": true,
    "supportPin": "12345",
    "brand": "space-invoices"
  }
]
?>
```

This endpoint lists all Organizations.

### HTTP Request

`GET https://api.spaceinvoices.com/v1/accounts/:id/organizations`

#### Query parameters

|      |     |
| ---: | --- |
| id **required** | ID of account. |


### HTTP Response

#### Arguments

|      |     |
| ---: | --- |
| name | Name of company or other type of organization. |
| address | Street or similar address. |
| address2 | Address line 2. |
| city | City name. |
| zip | Zip / post code. |
| country | String name of country. |
| taxSubject | Specify if the organization is subject to tax. |
| taxNumber | String VAT / GST / sales tax / etc. tax identification number. |
| companyNumber | String registration or similar identification number. |
| IBAN | Bank account number. |
| website | Website address. |
| locale | ISO 639-1 locale code. [Wikipedia](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) _Effects language of default texts and system messages._ |
| brand | Brand source identification for internal use. |
| _defaults | Array of objects. _Collection of organization's default settings._ _Can be used for custom settings._ [toggle definition](#expand) |
| name | Unique (to orgnization) name of setting. |
| value | Value of setting. |
| [](#empty) | |
| active | Boolean indicator if organization is active (enabled). |
| supportPin | 5 digit number used to match organization requesting support. |