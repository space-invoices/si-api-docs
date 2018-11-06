# Payments

Payments are stored for each invoice. Each invoice can have multiple payments that can also sum up to more that the invoice's total value. Payments are in the Currency of the document.

## Create New Payment

```shell
curl "https://api.spaceinvoices.com/v1/documents/5a3683ea12d5a67dd0ef2f4d/payments" \
  -H "Authorization: TOKEN" \
  -d type="bank" \
  -d date="2018-01-01" \
  -d amount=1000
```

```javascript
spaceInvoices.payments.create(documentId, {
  type: "bank",
  date: "2018-01-01",
  amount: 1000
})
.then(function(payment) {
  console.log(payment);
})
```
```csharp
SpacePaymentService paymentService = new SpacePaymentService();
SpacePaymentCreateOptions createOptions = new SpacePaymentCreateOptions
{
    Type = "bank",
    Date = DateTime.Today,
    Amount = 1000
};

SpacePayment payment =  paymentService.Create("DOCUMENT_ID", createOptions);
```

```php
<?php
  Spaceinvoices\Payments::create("DOCUMENT_ID", array(
    "type" => "bank",
    "date" => "2018-01-01",
    "amount" => 1000
  ));
?>
```

> Returns:

```shell
{
  "id": "5a3683ea12d5a67dd0ef2f4c",
  "documentId": "5a3683ea12d5a67dd0ef2f4d",
  "organizationId": "5a3683ea12d5a67dd0ef2f4e",
  "type": "bank",
  "date": "2018-01-01",
  "amount": 1000
}
```
```javascript
{
  "id": "5a3683ea12d5a67dd0ef2f4c",
  "documentId": "5a3683ea12d5a67dd0ef2f4d",
  "organizationId": "5a3683ea12d5a67dd0ef2f4e",
  "type": "bank",
  "date": "2018-01-01",
  "amount": 1000
}
```
```csharp
public class SpacePayment
{
  [JsonProperty("id")]
  public string Id { get; set; }

  [JsonProperty("documentId")]
  public string DocumentId { get; set; }

  [JsonProperty("organizationId")]
  public string OrganizationId { get; set; }

  [JsonProperty("type")]
  public string Type { get; set; }

  [JsonProperty("date")]
  public DateTime Date { get; set; }

  [JsonProperty("amount")]
  public decimal Amount { get; set; }

  [JsonProperty("description")]
  public string Description { get; set; }
}
```
```php
<?php
  {
    "id": "5a3683ea12d5a67dd0ef2f4c",
    "documentId": "5a3683ea12d5a67dd0ef2f4d",
    "organizationId": "5a3683ea12d5a67dd0ef2f4e",
    "type": "bank",
    "date": "2018-01-01",
    "amount": 1000
  }
?>
```

This endpoint creates a new Payment.

### HTTP Request

`POST https://api.spaceinvoices.com/v1/documents/:id/payments`

#### Query parameters

|      |     |
| ---: | --- |
| id **required** | ID of Document for which we are creting the Payment. |

#### Arguments

|      |     |
| ---: | --- |
| type **required** | Type of payment, one of `bank` / `online` / `paypal` / `cash` / `crypto` / `other`. |
| date **required** | Date of payment. |
| amount **required** | Amount of Payment. |
| description | Description of Payment. |

### HTTP Response

#### Arguments

|      |     |
| ---: | --- |
| id | Unique ID of model instance. |


## Update Payment

```shell
curl -X PUT "https://api.spaceinvoices.com/v1/payments/5a3683ea12d5a67dd0ef2f4c" \
  -H "Authorization: TOKEN" \
  -d type="bank" \
  -d documentId="5a3683ea12d5a67dd0ef2f4d" \
  -d date="2018-01-01" \
  -d amount=1000
```

```javascript
spaceInvoices.payments.edit(paymentId, {
  type: "bank",
  documentId: documentId,
  date: "2018-01-01",
  amount: 1000
})
.then(function(payment) {
  console.log(payment);
})
```
```csharp
SpacePaymentEditOptions editOptions = new SpacePaymentEditOptions
{
    Amount = 1000,
    DocumentId = "DOCUMENT_ID",
    Date = DateTime.Today,
    Type = "online"
};
SpacePaymentService paymentService = new SpacePaymentService();
SpacePayment payment =  paymentService.Edit("PAYMENT_ID", editOptions);
```


```php
<?php
  Spaceinvoices\Payments::edit("PAYMENT_ID", array(
    "type" => "bank",
    "documentId" => "DOCUMENT_ID"
    "date" => "2018-01-01",
    "amount" => 1000,
  ));
?>
```

> Returns:

```shell
{
  "id": "5a3683ea12d5a67dd0ef2f4c",
  "documentId": "5a3683ea12d5a67dd0ef2f4d",
  "organizationId": "5a3683ea12d5a67dd0ef2f4e",
  "type": "bank",
  "date": "2018-01-01",
  "amount": 1000
}
```
```javascript
{
  "id": "5a3683ea12d5a67dd0ef2f4c",
  "documentId": "5a3683ea12d5a67dd0ef2f4d",
  "organizationId": "5a3683ea12d5a67dd0ef2f4e",
  "type": "bank",
  "date": "2018-01-01",
  "amount": 1000
}
```
```csharp
public class SpacePayment
{
  [JsonProperty("id")]
  public string Id { get; set; }

  [JsonProperty("documentId")]
  public string DocumentId { get; set; }

  [JsonProperty("organizationId")]
  public string OrganizationId { get; set; }

  [JsonProperty("type")]
  public string Type { get; set; }

  [JsonProperty("date")]
  public DateTime Date { get; set; }

  [JsonProperty("amount")]
  public decimal Amount { get; set; }

  [JsonProperty("description")]
  public string Description { get; set; }
}
```
```php
<?php
  {
    "id": "5a3683ea12d5a67dd0ef2f4c",
    "documentId": "5a3683ea12d5a67dd0ef2f4d",
    "organizationId": "5a3683ea12d5a67dd0ef2f4e",
    "type": "bank",
    "date": "2018-01-01",
    "amount": 1000
  }
?>
```

This endpoint updates a Payment by ID.

### HTTP Request

`PUT https://api.spaceinvoices.com/v1/payments/:id`

#### Query parameters

|      |     |
| ---: | --- |

#### Arguments

|      |     |
| ---: | --- |
| type **required** | Type of payment, one of `bank` / `online` / `paypal` / `cash` / `crypto` / `other`. |
| documentId **required** |	ID of Document for which we are updating the Payment. |
| date **required** | Date of payment. |
| amount **required** | Amount of Payment. |
| description | Description of Payment. |

### HTTP Response

#### Arguments

|      |     |
| ---: | --- |


## Delete Payment

```shell
curl -X DELETE "https://api.spaceinvoices.com/v1/payments/5a3683ea12d5a67dd0ef2f4c" \
  -H "Authorization: TOKEN"
```

```javascript
spaceInvoices.payments.delete(paymentId)
.then(function(count) {
  console.log(count);
})
```
```csharp
SpacePaymentService paymentService = new SpacePaymentService();
Counter counter = paymentService.Delete("PAYMENT_ID");
```
```php
<?php
  Spaceinvoices\Payments::delete("PAYMENT_ID");
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

This endpoint deletes a Payment by ID.

### HTTP Request

`DELETE https://api.spaceinvoices.com/v1/payments/:id`

#### Query parameters

|      |     |
| ---: | --- |
| id **required** | ID of Payment to delete. |

### HTTP Response

#### Arguments

|      |     |
| ---: | --- |
| count | Number of successfuly deleted payments. |


## List Payments

```shell
curl "https://api.spaceinvoices.com/v1/organizations/5a3683ea12d5a67dd0ef2f4d/payments" \
  -H "Authorization: TOKEN"
```

```javascript
spaceInvoices.payments.list(organizationId)
.then(function(payments) {
  console.log(payments);
})
```
```csharp
SpacePaymentService paymentService = new SpacePaymentService();
List<SpacePayment> payments = paymentService.List("ORGANIZATION_ID");
```

```php
<?php
  Spaceinvoices\Payments::find("ORGANIZATION_ID");
?>
```

> Returns:

```shell
[
  {
    "id": "5a3683ea12d5a67dd0ef2f4c",
    "documentId": "5a3683ea12d5a67dd0ef2f4d",
    "organizationId": "5a3683ea12d5a67dd0ef2f4e",
    "type": "bank",
    "date": "2018-01-01",
    "amount": 1000
  }
]
```
```javascript
[
  {
    "id": "5a3683ea12d5a67dd0ef2f4c",
    "documentId": "5a3683ea12d5a67dd0ef2f4d",
    "organizationId": "5a3683ea12d5a67dd0ef2f4e",
    "type": "bank",
    "date": "2018-01-01",
    "amount": 1000
  }
]
```
```csharp
List<SpacePayment> 
```
```php
<?php
  [
    {
      "id": "5a3683ea12d5a67dd0ef2f4c",
      "documentId": "5a3683ea12d5a67dd0ef2f4d",
      "organizationId": "5a3683ea12d5a67dd0ef2f4e",
      "type": "bank",
      "date": "2018-01-01",
      "amount": 1000
    }
  ]
?>
```

This endpoint lists Organization's Payments.

### HTTP Request

`GET https://api.spaceinvoices.com/v1/organizations/:id/payments`

#### Query parameters

|      |     |
| ---: | --- |
| id **required** | ID of Organization. |
| filter | Object containing query filters. See [Filters](#filters) section for more details. |

### HTTP Response

#### Arguments

|      |     |
| ---: | --- |
| type | Type of payment. |
| date | Date of payment. |
| amount | Amount of Payment. |
| description | Description of Payment. |


## List a Document's Payments

```shell
curl "https://api.spaceinvoices.com/v1/documents/5a3683ea12d5a67dd0ef2f4d/payments" \
  -H "Authorization: TOKEN"
```

```javascript
```
```csharp
SpacePaymentService paymentService = new SpacePaymentService();
List<SpacePayment> payments = paymentService.ListADocumentPayments("DOCUMENT_ID");
```

```php
```

> Returns:

```shell
[
  {
    "id": "5a3683ea12d5a67dd0ef2f4c",
    "documentId": "5a3683ea12d5a67dd0ef2f4d",
    "organizationId": "5a3683ea12d5a67dd0ef2f4e",
    "type": "bank",
    "date": "2018-01-01",
    "amount": 1000
  }
]
```
```javascript
[
  {
    "id": "5a3683ea12d5a67dd0ef2f4c",
    "documentId": "5a3683ea12d5a67dd0ef2f4d",
    "organizationId": "5a3683ea12d5a67dd0ef2f4e",
    "type": "bank",
    "date": "2018-01-01",
    "amount": 1000
  }
]
```
```csharp
List<SpacePayment>
```
```php
<?php
  [
    {
      "id": "5a3683ea12d5a67dd0ef2f4c",
      "documentId": "5a3683ea12d5a67dd0ef2f4d",
      "organizationId": "5a3683ea12d5a67dd0ef2f4e",
      "type": "bank",
      "date": "2018-01-01",
      "amount": 1000
    }
  ]
?>
```

This endpoint lists Document's Payments.

### HTTP Request

`GET https://api.spaceinvoices.com/v1/documents/:id/payments`

#### Query parameters

|      |     |
| ---: | --- |
| id **required** | ID of Document. |
| filter | Object containing query filters. See [Filters](#filters) section for more details. |

### HTTP Response

#### Arguments

|      |     |
| ---: | --- |
| type | Type of payment. |
| date | Date of payment. |
| amount | Amount of Payment. |
| description | Description of Payment. |