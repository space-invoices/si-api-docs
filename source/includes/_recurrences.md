# Recurrences

Recurrences are created for Documents. A recurrence dictates when a periodic automatic creation of a document occurs using the original document content as a base but where the date and number of the document is changed.

## Create New Recurrence

```shell
curl "https://api.spaceinvoices.com/v1/documents/5a3683ea12d5a67dd0ef2f4d/recurrence" \
  -H "Authorization: LAUNCH_CODE" \
  -d name="Monthly recurrence" \
  -d type="month" \
  -d dateFirst="2018-01-01" \
  -d numRecurrences=2
```

```javascript
spaceInvoices.recurrences.create(documentId, {
  name: "Monthly recurrence",
  type: "month",
  dateFirst: "2018-01-01",
  numRecurrences: 2,
})
.then(function(recurrence) {
  console.log(recurrence);
})
```
```csharp
SpaceRecurrenceService recurrenceService = new SpaceRecurrenceService();
SpaceRecurrenceCreateOptions createOptions = new SpaceRecurrenceCreateOptions
{
    Name = "Monthly recurrence",
    DateFirst = DateTime.Today,
    Type = "month",
    NumRecurrences = 2

};
SpaceRecurrence recurrence = recurrenceService.Create("DOCUMENT_ID", createOptions);
```

```php
<?php
  Spaceinvoices\Recurrences::create("DOCUMENT_ID", array(
    "name" => "Monthly recurrence",
    "type" => "month",
    "dateFirst" => "2018-01-01",
    "numRecurrences" => 2
  ));
?>
```

> Returns:

```shell
{
  "id": "5a3683ea12d5a67dd0ef2f4c",
  "documentId": "5a3683ea12d5a67dd0ef2f4d",
  "organizationId": "5a3683ea12d5a67dd0ef2f4e",
  "accountId": "5a3683ea12d5a67dd0ef2f4f",
  "name": "Monthly recurrence",
  "type": "month",
  "dateFirst": "2018-01-01",
  "numRecurrences": 2,
  "autoSend": false,
  "notify": true,
  "saveAsDraft": false,
  "_recurrenceDates": [
    {
      "date": "2018-01-01",
      "iteration": 1
    }, {
      "date": "2018-02-01",
      "iteration": 2
    }
  ]
}
```
```javascript
{
  "id": "5a3683ea12d5a67dd0ef2f4c",
  "documentId": "5a3683ea12d5a67dd0ef2f4d",
  "organizationId": "5a3683ea12d5a67dd0ef2f4e",
  "accountId": "5a3683ea12d5a67dd0ef2f4f",
  "name": "Monthly recurrence",
  "type": "month",
  "dateFirst": "2018-01-01",
  "numRecurrences": 2,
  "autoSend": false,
  "notify": true,
  "saveAsDraft": false,
  "_recurrenceDates": [
    {
      "date": "2018-01-01",
      "iteration": 1
    }, {
      "date": "2018-02-01",
      "iteration": 2
    }
  ]
}
```
```csharp
public class SpaceRecurrence
{
  [JsonProperty("id")]
  public string Id { get; set; }

  [JsonProperty("documentId")]
  public string DocumentId { get; set; }

  [JsonProperty("organizationId")]
  public string OrganizationId { get; set; }

  [JsonProperty("accountId")]
  public string AccountId { get; set; }

  [JsonProperty("name")]
  public string Name { get; set; }

  [JsonProperty("type")]
  public string Type { get; set; }

  [JsonProperty("dateFirst")]
  public DateTime DateFirst { get; set; }

  [JsonProperty("numRecurrences")]
  public int NumRecurrences { get; set; }

  [JsonProperty("autoSend")]
  public bool AutoSend { get; set; }

  [JsonProperty("notify")]
  public bool Notify { get; set; }

  [JsonProperty("saveAsDraft")]
  public bool SaveAsDraft { get; set; }

  [JsonProperty("_recurrenceDates")]
  public List<SpaceRecurrenceDate> _recurrenceDates { get; set; }
}

public class SpaceRecurrenceDate
{
  [JsonProperty("date")]
  public DateTime Date { get; set; }

  [JsonProperty("iteration")]
  public int Iteration { get; set; }
}
```
```php
<?php
  {
    "id": "5a3683ea12d5a67dd0ef2f4c",
    "documentId": "5a3683ea12d5a67dd0ef2f4d",
    "organizationId": "5a3683ea12d5a67dd0ef2f4e",
    "accountId": "5a3683ea12d5a67dd0ef2f4f",
    "name": "Monthly recurrence",
    "type": "month",
    "dateFirst": "2018-01-01",
    "numRecurrences": 2,
    "autoSend": false,
    "notify": true,
    "saveAsDraft": false,
    "_recurrenceDates": [
      {
        "date": "2018-01-01",
        "iteration": 1
      }, {
        "date": "2018-02-01",
        "iteration": 2
      }
    ]
  }
?>
```

This endpoint creates a new Recurrence.

### HTTP Request

`POST https://api.spaceinvoices.com/v1/documents/:id/recurrence`

#### Query parameters

|      |     |
| ---: | --- |
| id **required** | ID of Document for which we are creting the Recurrence. |

#### Arguments

|      |     |
| ---: | --- |
| name **required** | Name of the recurrence. |
| type **required** | Type of the recurrence, one of `week` / `month` / `year`. |
| dateFirst **required** | Date of the first recurrence. |
| numRecurrences **required** | Number of the Recurrence. |
| autoSend | Boolean if a created Document should be automatically sent to Client when created. |
| notify | Boolean if the Account that created the Recurrence should be notified when a Document is created. |
| saveAsDraft | Boolean if the invoice should be created as draft. |
| recurrenceDates | Array of objects containing created Recurrence dates. [toggle definition](#expand) |
| date | Date of the Recurrence. |
| iteration | Number iteration index of the Recurrence. |
| [](#empty) | |

### HTTP Response

#### Arguments

|      |     |
| ---: | --- |
| id | Unique ID of the model instance. |


## Delete Recurrence

```shell
curl -X DELETE "https://api.spaceinvoices.com/v1/recurrences/5a3683ea12d5a67dd0ef2f4c" \
  -H "Authorization: LAUNCH_CODE"
```

```javascript
spaceInvoices.recurrences.delete(recurrenceId)
.then(function(count) {
  console.log(count);
})
```

```csharp
SpaceRecurrenceService recurrenceService = new SpaceRecurrenceService();
Counter counter = recurrenceService.Delete("RECURRENCE_ID");
```

```php
<?php
  Spaceinvoices\Recurrences::delete("RECURRENCE_ID");
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

This endpoint deletes a Recurrence by ID.

### HTTP Request

`DELETE https://api.spaceinvoices.com/v1/recurrences/:id`

#### Query parameters

|      |     |
| ---: | --- |
| id **required** | ID of the Recurrence to be deleted. |

### HTTP Response

#### Arguments

|      |     |
| ---: | --- |
| count | Number of successfuly deleted recurrences. |


## List Recurrences

```shell
curl "https://api.spaceinvoices.com/v1/organizations/5a3683ea12d5a67dd0ef2f4d/recurrences" \
  -H "Authorization: LAUNCH_CODE"
```

```javascript
spaceInvoices.recurrences.list(organizationId)
.then(function(recurrences) {
  console.log(recurrences);
})
```
```csharp
SpaceRecurrenceService recurrenceService = new SpaceRecurrenceService();
List<SpaceRecurrence> recurrencies = recurrenceService.List("ORGANIZATION_ID");
```

```php
<?php
  Spaceinvoices\Recurrences::find("ORGANIZATION_ID");
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
List<SpaceRecurrence>
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

This endpoint lists the Organization's Recurrences.

### HTTP Request

`GET https://api.spaceinvoices.com/v1/organizations/:id/recurrences`

#### Query parameters

|      |     |
| ---: | --- |
| id **required** | ID of the Organization. |
| filter | Object containing query filters. See the [Filters](#filters) section for more details. |

### HTTP Response

#### Arguments

|      |     |
| ---: | --- |
| type | Type of recurrence. |
| date | Number price of the recurrence. |
| amount | Amount of the Recurrence. |
| description | Description of Recurrence. |


## List a Document's Recurrences

```shell
curl "https://api.spaceinvoices.com/v1/documents/5a3683ea12d5a67dd0ef2f4d/recurrence" \
  -H "Authorization: LAUNCH_CODE"
```

```javascript
spaceInvoices.recurrences.listDocumentRecurrences(documentId)
.then(function(recurrences) {
  console.log(recurrences);
});
```
```csharp
SpaceRecurrenceService recurrenceService = new SpaceRecurrenceService();
SpaceRecurrence recurrence = recurrenceService.GetADocumentRecurrence("DOCUMENT_ID");
```

```php
<?php
  Spaceinvoices\Recurrences::findDocumentRecurrences("DOCUMENT_ID");
?>
```

> Returns:

```shell
[
  {
    "id": "5a3683ea12d5a67dd0ef2f4c",
    "documentId": "5a3683ea12d5a67dd0ef2f4d",
    "organizationId": "5a3683ea12d5a67dd0ef2f4e",
    "accountId": "5a3683ea12d5a67dd0ef2f4f",
    "name": "Monthly recurrence",
    "type": "month",
    "dateFirst": "2018-01-01",
    "numRecurrences": 2,
    "autoSend": false,
    "notify": true,
    "saveAsDraft": false,
    "_recurrenceDates": [
      {
        "date": "2018-01-01",
        "iteration": 1
      }, {
        "date": "2018-02-01",
        "iteration": 2
      }
    ]
  }
]
```
```javascript
[
  {
    "id": "5a3683ea12d5a67dd0ef2f4c",
    "documentId": "5a3683ea12d5a67dd0ef2f4d",
    "organizationId": "5a3683ea12d5a67dd0ef2f4e",
    "accountId": "5a3683ea12d5a67dd0ef2f4f",
    "name": "Monthly recurrence",
    "type": "month",
    "dateFirst": "2018-01-01",
    "numRecurrences": 2,
    "autoSend": false,
    "notify": true,
    "saveAsDraft": false,
    "_recurrenceDates": [
      {
        "date": "2018-01-01",
        "iteration": 1
      }, {
        "date": "2018-02-01",
        "iteration": 2
      }
    ]
  }
]
```
```csharp
public class SpaceRecurrence
{
  [JsonProperty("id")]
  public string Id { get; set; }

  [JsonProperty("documentId")]
  public string DocumentId { get; set; }

  [JsonProperty("organizationId")]
  public string OrganizationId { get; set; }

  [JsonProperty("accountId")]
  public string AccountId { get; set; }

  [JsonProperty("name")]
  public string Name { get; set; }

  [JsonProperty("type")]
  public string Type { get; set; }

  [JsonProperty("dateFirst")]
  public DateTime DateFirst { get; set; }

  [JsonProperty("numRecurrences")]
  public int NumRecurrences { get; set; }

  [JsonProperty("autoSend")]
  public bool AutoSend { get; set; }

  [JsonProperty("notify")]
  public bool Notify { get; set; }

  [JsonProperty("saveAsDraft")]
  public bool SaveAsDraft { get; set; }

  [JsonProperty("_recurrenceDates")]
  public List<SpaceRecurrenceDate> _recurrenceDates { get; set; }
}

public class SpaceRecurrenceDate
{
  [JsonProperty("date")]
  public DateTime Date { get; set; }

  [JsonProperty("iteration")]
  public int Iteration { get; set; }
}
```
```php
<?php
  [
    {
      "id": "5a3683ea12d5a67dd0ef2f4c",
      "documentId": "5a3683ea12d5a67dd0ef2f4d",
      "organizationId": "5a3683ea12d5a67dd0ef2f4e",
      "accountId": "5a3683ea12d5a67dd0ef2f4f",
      "name": "Monthly recurrence",
      "type": "month",
      "dateFirst": "2018-01-01",
      "numRecurrences": 2,
      "autoSend": false,
      "notify": true,
      "saveAsDraft": false,
      "_recurrenceDates": [
        {
          "date": "2018-01-01",
          "iteration": 1
        }, {
          "date": "2018-02-01",
          "iteration": 2
        }
      ]
    }
  ]
?>
```

This endpoint lists Recurrences.

### HTTP Request

`GET https://api.spaceinvoices.com/v1/documents/:id/recurrence`

#### Query parameters

|      |     |
| ---: | --- |
| id **required** | ID of the Document. |
| filter | Object containing query filters. See the [Filters](#filters) section for more details. |

### HTTP Response

#### Arguments

|      |     |
| ---: | --- |
| name  | Name of the recurrence. |
| type  | Type of the recurrence. |
| dateFirst  | Date of the first recurrence. |
| numRecurrences | Number of the Recurrence. |
| autoSend | Boolean if a created Document should be automaticaly sent to Client when created. |
| notify | Boolean if the Account that created the Recurrence should be notified when a Document is created. |
| saveAsDraft | Boolean if the invoice should be created as draft. |
| recurrenceDates | Array of objects containing created Recurrence dates. [toggle definition](#expand) |
| date | Date of the Recurrence. |
| iteration | Number iteration index of the Recurrence. |
| [](#empty) | |
