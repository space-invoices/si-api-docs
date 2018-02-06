# Organizations

## Create New Organization

```shell
curl "https://api.spaceinvoices.com/v1/organizations" \
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

This endpoint creates a new organization.

Any given account can have multiple organizations either by creating them or by being given access to them from other account holders.

This is especially useful when there is a need to manage multiple organizations as they are created for users that might signup to a certain product.

An organization holds a reference to most of the information that is created through the API.

### HTTP Request

`POST https://api.spaceinvoices.com/v1/organizations`

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