# Documents

Documents are the most complex part of Space Invoices, they are the core of our service. 

We have taken a lot of care to provide developers with a wide array of options when creating different documents, most importantly we allow you to provide as much or as little data as you wish while the API takes care of the rest base on known data like organization settings, country of origin and country of destination.

## Create New Document - Minimum data

```shell
curl "https://api.spaceinvoices.com/api/v1/organizations/:id/documents" \
  -d _documentClient[name]="Rocket Man" \
  -d _documentItems[0][name]="Space suit" \
  -d _documentItems[0][quantity]=2 \
  -d _documentItems[0][unit]="Item" \
  -d _documentItems[0][price]="1000"
```

> Returns:

```json
{
  "id": "5a3683ea12d5a67dd0ef2f4c",
  "organizationId": "5a3683ea12d5a67dd0ef2f4d",
  "type": "invoice",
  "draft": false,
  "canceled": false,
  "sentEmail": false,
  "number": "2018-00001",
  "date": 2018-01-31,
  "dateService": 2018-01-31,
  "dateDue": 2018-02-31,
  "currencyId": "USD",
  "_documentIssuer": {
    "name": "The Space store ltd"
  },
  "_documentItems": [{
    "id": "5a3683ea12d5a67dd0ef2f4e",
    "name": "Space suit",
    "quantity": 1,
    "unit": "Item",
    "discount": 0,
    "price": 1000,
    "total": 2000,
    "totalWithTax": 2000,
    "totalDiscount": 0,
    "_documenItemTaxes": []
  }],
  "note": "Thank you for your business.\n
    Please transfer the money to bank account [IBAN] open at [bank]",
  "signature": "[company name]",
  "footer": "[company name] | [IBAN]",
  "_documentTaxes": [],
  "total": 2000,
  "totalDiscount": 0,
  "totalWithTax": 2000,
  "totalPaid": 0,
  "paidInFull": false,
  "_comments": [],
  "createdAt": 2018-01-31T01:20:11.999Z
}
```

This endpoint creates a new document for given organization.

_This example shows the process of creating an `invoice` providing minimum data._

### HTTP Request

`POST https://api.spaceinvoices.com/api/v1/organizations/:id/documents`

#### Query parameters

|      |     |
| ---: | --- |
| id **required** | ID of organization. |

#### Attributes

|      |     |
| ---: | --- |
| _documentClient | Object containting client data. _Property is optional if `clientId` is provided_ [toggle definition](#expand) |
| name **required** | Name of client. |
| [](#) | |
| _documentItems | Collection of objects containing document line items. [toggle definition](#expand) |
| name **required** | Name of item. |
| quantity | Number, quantity of items. |
| unit | Unit of measurement for item ie. Item / Service / Meter / etc. |
| price | Number, price per single item. |
| [](#) | |

### HTTP Response

#### Attributes

|      |     |
| ---: | --- |
| id | Unique ID of model instance. |
| organizationId | ID of related organization. |
| draft | Boolean, is invoice a draft. _Only present if document type is invoice._ |
| canceled | Boolean, is invoice canceled. _Only present if document type is invoice._ |
| sentEmail | Boolean, has document been ever sent by email. |
| _documentItems | Array of objects containing document items. [toggle definition](#expand) |
| total | Number, total price of document item including quantity and discount. _Excludes taxes._ |
| totalWithTax | Number, total price of document item including quantity, discount and taxes. |
| totalDiscount | Number, total discount of document item including quantity. |
| _documentItemTaxes | Array of tax IDs applied to the document item. |
| [](#) | |
| note | Text note for document. _May contain shortcode notations which get parsed to data on PDF or when `parseForDisplay` flag is provided._ |
| signature | Text signature for document. _May contain shortcode notations which get parsed to data on PDF or when `parseForDisplay` flag is provided._ |
| footer | Text footer for document. _May contain shortcode notations which get parsed to data on PDF or when `parseForDisplay` flag is provided._ |
| _documentTaxes | Array of objects containing all unique taxes applied to document. [toggle definition](#expand) |
| tax | Tax rate. |
| totalTax | Total value for this tax rate. |
| [](#) | |
| total | Number, document total including all item totals, excluding taxes. |
| totalDiscount | Number, total value of all discounts applied to document. |
| totalWithTax | Number, document total of all items including taxes. |
| totalPaid | Number, total amount of payments logged for invoice. _Only present if type is invoice. |
| paidInFull | Boolean, if document's logged payments amount to at least it's totalWithTax amount or more. |
| _comments | Array of objects containing user comments on document. |
| createAt | Timestamp of model instance creation. |

## List documents
<!-- TODO: List documents -->

## Get Document by ID
<!-- TODO: Get document by id -->

## Edit document
<!-- TODO: Edit document -->

## Delete document
<!-- TODO: Delete document -->
