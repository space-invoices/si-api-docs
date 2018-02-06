# Accounts

## Signup / Create New Account

```shell
curl "https://api.spaceinvoices.com/v1/accounts" \
  -d username='name@example.com' \
  -d password='supersecret'
```

> Returns:

```json
{
  "id": "5a3683ea12d5a67dd0ef2f4c",
  "username": "someone@example.com"
}
```

This endpoint creates a new account.

This is the entry point to start using the API. Once an account is created it can be used to login and make authenticated calls.

### HTTP Request

`POST https://api.spaceinvoices.com/v1/accounts`

### Request arguments

Parameter | Description
--------- | -----------
username **required** | Unique email address.
password **required** | Password, 8 character minimum, at least one capital letter and one symbol.

### Response arguments

Parameter | Description
--------- | -----------
id | Unique id of model instance.
username | Provided username.

## Login

```shell
curl "https://api.spaceinvoices.com/v1/accounts/login" \
  -d username='name@example.com' \
  -d password='supersecret'
```

> Returns:

```json
{
  "id": "5a3683ea12d5a67dd0ef2f4c5a3683ea12d5a67dd0ef2f4c",
  "userId": "5a3683ea12d5a67dd0ef2f4c"
}
```

This endpoint authenticates an account and returns an access token that can be used in consecutive calls to the API.

### HTTP Request

`POST https://api.spaceinvoices.com/v1/accounts/login`

### Request arguments

Parameter | Description
--------- | -----------
username **required** | Chosen email.
password **required** | Chosen password.

### Response arguments

Parameter | Description
--------- | -----------
id | Generated access token.
userId | Id of authenticated account.
