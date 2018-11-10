# Items

Items are items, services and any other thing that a Organization can sell. They can be saved and later referenced using their unique ID.

NOTE: While taxes are added to items by adding id in `taxIds` property, they can also be referenced by their rate or classification value by providing either of the values in `_itemTaxes` array property as an object. The API will attempt to find the best match.

## Create New Item

```shell
curl "https://api.spaceinvoices.com/v1/orgnizations/5a3683ea12d5a67dd0ef2f4d/items" \
  -H "Authorization: LAUNCH_CODE" \
  -d name="Space suit" \
  -d description="Best in class suit made from durable composites." \
  -d unit="item" \
  -d price=100 \
  -d taxIds[]="5a3683ea12d5a67dd0ef2f4e"
```

```csharp
List<string> taxIds = new List<string>();
taxIds.Add("TAX_ID");

SpaceItemCreateOptions createOptions = new SpaceItemCreateOptions
{
  Name = "Space suit",
  Description = "Best in class suit made from durable composites.",
  Price = 100,
  Unit = "item",
  TaxIds = taxIds
};

SpaceItemService itemService = new SpaceItemService();
SpaceItem item = itemService.Create("ORGANIZATION_ID", createOptions);
```

```javascript
spaceInvoices.items.create(organizationId, {
  name: "Space suit",
  description: "Best in class suit made from durable composites.",
  unit: "item",
  price: 100,
  taxIds: [taxId]
})
.then(function(item) {
  console.log(item);
})
```

```php
<?php
  Spaceinvoices\Items::create("ORGANIZATION_ID", array(
    "name" => "Space suit",
    "description" => "Best in class suit made from durable composites.",
    "unit" => "item",
    "price" => 100,
    "taxId" => ["TAX_ID"]
  ));
?>
```

> Returns:

```shell
{
  "id": "5a3683ea12d5a67dd0ef2f4c",
  "organizationId": "5a3683ea12d5a67dd0ef2f4d",
  "name": "Space suit",
  "description": "Best in class suit made from durable composites.",
  "unit": "item",
  "price": 100,
  "taxIds": [ "5a3683ea12d5a67dd0ef2f4e" ]
}
```
```javascript
{
  "id": "5a3683ea12d5a67dd0ef2f4c",
  "organizationId": "5a3683ea12d5a67dd0ef2f4d",
  "name": "Space suit",
  "description": "Best in class suit made from durable composites.",
  "unit": "item",
  "price": 100,
  "taxIds": [ "5a3683ea12d5a67dd0ef2f4e" ]
}
```
```csharp
public class SpaceItem
{
  [JsonProperty("id")]
  public string Id { get; set; }

  [JsonProperty("organizationId")]
  public string OrganizationId { get; set; }

  [JsonProperty("name")]
  public string Name { get; set; }

  [JsonProperty("description")]
  public string Description { get; set; }

  [JsonProperty("unit")]
  public string Unit { get; set; }

  [JsonProperty("price")]
  public decimal Price { get; set; }

  [JsonProperty("taxIds")]
  public List<string> TaxIds { get; set; }
}
```
```php
<?php
  {
    "id": "5a3683ea12d5a67dd0ef2f4c",
    "organizationId": "5a3683ea12d5a67dd0ef2f4d",
    "name": "Space suit",
    "description": "Best in class suit made from durable composites.",
    "unit": "item",
    "price": 100,
    "taxIds": [ "5a3683ea12d5a67dd0ef2f4e" ]
  }
?>
```

This endpoint creates a new Item.

### HTTP Request

`POST https://api.spaceinvoices.com/v1/organizations/:id/items`

#### Query parameters

|      |     |
| ---: | --- |
| id **required** | ID of Orgniazation for which we are creting the Item. |

#### Arguments

|      |     |
| ---: | --- |
| name **required** | Name of company, item or other type of organization. |
| description | Description of item. |
| unit | Unit of measurement. |
| price | Number price of item. |
| taxIds | Array of related Tax IDs that the Organization has. _The provided taxes will be expanded (loaded from Taxes) and used as default when adding items to documents._ |
| _itemTaxes | Array of tax rates / classifications. _Can be used in case tax id is not known and should be loaded by API based on tax rate or classification._ [toggle definition](#expand) |
| rate | Rate of tax to match. |
| classification | Classification of tax to match. |
| [](#empty) | |

### HTTP Response

#### Arguments

|      |     |
| ---: | --- |
| id | Unique ID of model instance. |


## Update Item

```shell
curl -X PUT "https://api.spaceinvoices.com/v1/items/5a3683ea12d5a67dd0ef2f4c" \
  -H "Authorization: LAUNCH_CODE" \
  -d name="Space suit" \
  -d description="Best in class suit made from durable composites." \
  -d unit="item" \
  -d price=100 \
  -d taxIds[]="5a3683ea12d5a67dd0ef2f4e"
```

```javascript
spaceInvoices.items.edit(documentId, {
  name: "Space suit",
  description: "Best in class suit made from durable composites.",
  unit: "item",
  price: 100,
  taxIds: [taxId]
})
.then(function(item) {
  console.log(item);
})
```
```csharp
SpaceItemEditOptions editOptions = new SpaceItemEditOptions
{
  Name = "pace suit new",
  Description = "Best in class suit made from durable composites.",
  Price = 5000000,
  Unit = "item"
};

SpaceItemService itemService = new SpaceItemService();
SpaceItem item = itemService.Edit("ITEM_ID", editOptions);
```

```php
<?php
  Spaceinvoices\Items::edit("DOCUMENT_ID", array(
    "name" => "Space suit",
    "description" => "Best in class suit made from durable composites.",
    "unit" => "item",
    "price" => 100,
    "taxes" => ["TAX_ID"]
  ));
?>
```

> Returns:

```shell
{
  "id": "5a3683ea12d5a67dd0ef2f4c",
  "organizationId": "5a3683ea12d5a67dd0ef2f4d",
  "name": "Space suit",
  "description": "Best in class suit made from durable composites.",
  "unit": "item",
  "price": 100,
  "taxIds": [ "5a3683ea12d5a67dd0ef2f4e" ]
}
```
```javascript
{
  "id": "5a3683ea12d5a67dd0ef2f4c",
  "organizationId": "5a3683ea12d5a67dd0ef2f4d",
  "name": "Space suit",
  "description": "Best in class suit made from durable composites.",
  "unit": "item",
  "price": 100,
  "taxIds": [ "5a3683ea12d5a67dd0ef2f4e" ]
}
```
```csharp
public class SpaceItem
{
  [JsonProperty("id")]
  public string Id { get; set; }

  [JsonProperty("organizationId")]
  public string OrganizationId { get; set; }

  [JsonProperty("name")]
  public string Name { get; set; }

  [JsonProperty("description")]
  public string Description { get; set; }

  [JsonProperty("unit")]
  public string Unit { get; set; }

  [JsonProperty("price")]
  public decimal Price { get; set; }

  [JsonProperty("taxIds")]
  public List<string> TaxIds { get; set; }
}
```
```php
<?php
  {
    "id": "5a3683ea12d5a67dd0ef2f4c",
    "organizationId": "5a3683ea12d5a67dd0ef2f4d",
    "name": "Space suit",
    "description": "Best in class suit made from durable composites.",
    "unit": "item",
    "price": 100,
    "taxIds": [ "5a3683ea12d5a67dd0ef2f4e" ]
  }
?>
```

This endpoint updates a Item by ID.

### HTTP Request

`PUT https://api.spaceinvoices.com/v1/items/:id`

#### Query parameters

|      |     |
| ---: | --- |

#### Arguments

|      |     |
| ---: | --- |
| name **required** | Name of company, item or other type of organization. |
| description | Description of item. |
| unit | Unit of measurement. |
| price | Number price of item. |
| taxIds | Array of related Tax IDs that the Organization has. _The provided taxes will be expanded (loaded from Taxes) and used as default when adding items to documents._ |
| _itemTaxes | Array of tax rates / classifications. _Can be used in case tax id is not known and should be loaded by API based on tax rate or classification._ [toggle definition](#expand) |
| rate | Rate of tax to match. |
| classification | Classification of tax to match. |
| [](#empty) | |

### HTTP Response

#### Arguments

|      |     |
| ---: | --- |


## Delete Item

```shell
curl -X DELETE "https://api.spaceinvoices.com/v1/items/5a3683ea12d5a67dd0ef2f4c" \
  -H "Authorization: LAUNCH_CODE"
```

```javascript
spaceInvoices.items.delete(itemId)
.then(function(count) {
  console.log(count);
})
```
```csharp
SpaceItemService itemService = new SpaceItemService();
Counter counter = itemService.Delete("ITEM_ID");
```

```php
<?php
  Spaceinvoices\Items::delete("ITEM_ID");
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

This endpoint soft deletes a Item by ID.

Soft deleted instances stay in database but are not returned on normal calls but can be added by providing `deleted: true` property in filters.

### HTTP Request

`DELETE https://api.spaceinvoices.com/v1/items/:id`

#### Query parameters

|      |     |
| ---: | --- |
| id **required** | ID of Item to delete. |

### HTTP Response

#### Arguments

|      |     |
| ---: | --- |
| count | Number of successfuly deleted items. |


## List Items

```shell
curl "https://api.spaceinvoices.com/v1/organizations/5a3683ea12d5a67dd0ef2f4d/items" \
  -H "Authorization: LAUNCH_CODE"
```

```javascript
spaceInvoices.items.list(organizationId)
.then(function(items) {
  console.log(items);
})
```
```csharp
var filter = @"{
                filter: {
                        where: {
                                unit: 'item'
                        }
                    } 
                  }";

SpaceItemService itemService = new SpaceItemService();
List<SpaceItem> items = itemService.List("ORGANIZATION_ID", filter);
```

```php
<?php
  Spaceinvoices\Items::find("ORGANIZATION_ID");
?>
```

> Returns:

```shell
[
  {
    "id": "5a3683ea12d5a67dd0ef2f4c",
    "organizationId": "5a3683ea12d5a67dd0ef2f4d",
    "name": "Space suit",
    "description": "Best in class suit made from durable composites.",
    "unit": "item",
    "price": 100,
    "taxIds": [ "5a3683ea12d5a67dd0ef2f4e" ],
    "taxes": [
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
  }
]
```
```javascript
[
  {
    "id": "5a3683ea12d5a67dd0ef2f4c",
    "organizationId": "5a3683ea12d5a67dd0ef2f4d",
    "name": "Space suit",
    "description": "Best in class suit made from durable composites.",
    "unit": "item",
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
```
```csharp
List<SpaceItem> 
```
```php
<?php
  [
    {
      "id": "5a3683ea12d5a67dd0ef2f4c",
      "organizationId": "5a3683ea12d5a67dd0ef2f4d",
      "name": "Space suit",
      "description": "Best in class suit made from durable composites.",
      "unit": "item",
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

This endpoint lists Organization's Items.

### HTTP Request

`GET https://api.spaceinvoices.com/v1/organizations/:id/items`

#### Query parameters

|      |     |
| ---: | --- |
| id **required** | ID of Organization. |
| filter | Object containing query filters. See [Filters](#filters) section for more details. |

### HTTP Response

#### Arguments

|      |     |
| ---: | --- |
| id | Unique ID of Item model instance. |
| organizationId | ID of related Organization the Item belongs to. |
| name | Name of Item. |
| description | Description of Item. |
| unit | Unit of measurement of Item. |
| price | Price of Item. |
| taxes | Collection of objects containing Item taxes. [toggle definition](#expand) |
| name | Name of Tax. |
| _taxRates | Collection of objects containing item taxes. [toggle definition](#expand-inner) |
| dateValidFrom | Date when Tax Rate is valid from. _If Item Tax has multiple Tax Rates, a Rate is selected based on date of document for each document based on the most recent valid Tax Rate._ |
| rate | Number rate of Tax. |
| [](#empty-inner) | |
| recoverable | Booleand indicator if paid Tax can be recovered by Organization. |
| compound | Booleand indicator if Tax is compound. _Compound Tax is calculated on top of Document Item total value including any other Taxes on the item._ |
| [](#empty) | |


## Search Items

```shell
curl "https://api.spaceinvoices.com/v1/organizations/5a3683ea12d5a67dd0ef2f4d/search-items?term=Space" \
  -H "Authorization: LAUNCH_CODE"
```

```javascript
spaceInvoices.items.search(organizationId, 'space')
.then(function(items) {
  console.log(items);
})
```
```csharp


var filter = @"{
                filter: {
                        where: {
                                unit: 'item'
                        }
                    } 
                  }";


SpaceItemService itemService = new SpaceItemService();
List<SpaceItem> items = itemService.Search("ORGANIZATION_ID", "space", filter);

```

```php
<?php
  Spaceinvoices\Items::search("ORGANIZATION_ID", "space");
?>
```

> Returns:

```shell
[
  {
    "id": "5a3683ea12d5a67dd0ef2f4c",
    "organizationId": "5a3683ea12d5a67dd0ef2f4d",
    "name": "Space suit",
    "description": "Best in class suit made from durable composites.",
    "unit": "item",
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
```
```javascript
[
  {
    "id": "5a3683ea12d5a67dd0ef2f4c",
    "organizationId": "5a3683ea12d5a67dd0ef2f4d",
    "name": "Space suit",
    "description": "Best in class suit made from durable composites.",
    "unit": "item",
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
```
```csharp
List<SpaceItem> 
```
```php
<?php
  [
    {
      "id": "5a3683ea12d5a67dd0ef2f4c",
      "organizationId": "5a3683ea12d5a67dd0ef2f4d",
      "name": "Space suit",
      "description": "Best in class suit made from durable composites.",
      "unit": "item",
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

This endpoint searches for Organization's Items.

### HTTP Request

`GET https://api.spaceinvoices.com/v1/organizations/:id/search-items?term=:term`

#### Query parameters

|      |     |
| ---: | --- |
| id **required** | ID of Organization. |
| term **required** | String term to search for in Item properties. |
| filter | Object containing query filters. See [Filters](#filters) section for more details. |

### HTTP Response

#### Arguments

|      |     |
| ---: | --- |
| id | Unique ID of Item model instance. |
| organizationId | ID of related Organization the Item belongs to. |
| name | Name of Item. |
| description | Description of Item. |
| unit | Unit of measurement of Item. |
| price | Price of Item. |
| taxes | Collection of objects containing Item taxes. [toggle definition](#expand) |
| name | Name of Tax. |
| _taxRates | Collection of objects containing item taxes. [toggle definition](#expand-inner) |
| dateValidFrom | Date when Tax Rate is valid from. _If Item Tax has multiple Tax Rates, a Rate is selected based on date of document for each document based on the most recent valid Tax Rate._ |
| rate | Number rate of Tax. |
| [](#empty-inner) | |
| recoverable | Booleand indicator if paid Tax can be recovered by Organization. |
| compound | Booleand indicator if Tax is compound. _Compound Tax is calculated on top of Document Item total value including any other Taxes on the item._ |
| [](#empty) | |
