# Organizations

## Create New Document - Simple

```shell
curl "https://api.spaceinvoices.com/v1/organizations/:id/documents" \
  -d name='The Space store ltd' \
  -d country='USA'
```

> Returns:

```json
{
  "id": "5a3683ea12d5a67dd0ef2f4c",
  "name": "The Space store ltd",
  "country": "USA",
  "_defaults": {
    ...
  }
}
```

This endpoint creates a new document for given organization.

### HTTP Request

`POST https://api.spaceinvoices.com/v1/organizations/:id/documents`

### Request arguments

Parameter | Description
--------- | -----------
name **required** | Name of organization.
country **required** | County of organization. _The country parameter is used to apply some smart defaults to the organization being created including tax rates and default texts (both may be effected by taxSubject property in some cases)._
taxSubject _default is *false*_ | Specify if the organization is subject to tax. _Property effects creation of tax rates and default texts._

### Response arguments

Parameter | Description
--------- | -----------
id | Unique id of model instance
name | Provided name
country | Provided country
_defaults | Array of objects. Each object contains an organization's default setting.