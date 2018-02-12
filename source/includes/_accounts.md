# Accounts

Accounts represent users that can login and access different organizations based on access right.

## Authenticate

```shell
curl "https://api.spaceinvoices.com/api/v1/accounts/login" \
  -H "Authorization: TOKEN" \
  -d email="name@example.com" \
  -d password="supersecret"
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

`POST https://api.spaceinvoices.com/api/v1/accounts/login`

#### Attributes

|      |     |
| ---: | --- |
| email **required** | Chosen email. |
| password **required** | Chosen password. |

### HTTP Response

#### Attributes

|      |     |
| ---: | --- |
| id | Generated access token. |
| userId | ID of authenticated user account. |

## Create New Account

```shell
curl "https://api.spaceinvoices.com/api/v1/accounts" \
  -H "Authorization: TOKEN" \
  -d email="name@example.com" \
  -d password="supersecret"
```

> Returns:

```json
{
  "id": "5a3683ea12d5a67dd0ef2f4c",
  "email": "someone@example.com"
}
```

This endpoint creates a new account.

### HTTP Request

`POST https://api.spaceinvoices.com/api/v1/accounts`

#### Attributes

|      |     |
| ---: | --- |
| email **required** | Unique email address. |
| password **required** | Password, 8 character minimum, at least one capital letter and one symbol. |

### HTTP Response

#### Attributes

|      |     |
| ---: | --- |
| id | Unique ID of model instance. |
| email | Provided username. |