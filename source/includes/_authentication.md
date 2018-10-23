# Authentication

> Authorization token must be used to make calls to the API:

```shell
# With shell, you can just pass the correct header with each request
curl "https://api.spaceinvoices.com/v1/..."
  -H "Authorization: TOKEN"
```

```javascript
var spaceInvoices = new SpaceInvoices('TOKEN');
```

```csharp
SpaceConfiguration.SetApiKey("TOKEN");
```

```php
<?php
  Spaceinvoices\Spaceinvoices::setAccessToken("TOKEN");
?>
```


> Make sure to replace `TOKEN` with your authorization token.

__Space Invoices uses authorization tokens to allow access to the API. A token can be aquired from our developer dashboard [Mission Control](http://spaceinvoices.com/signup).__

The API token has to be included in all API requests to the server in a header like this:

`Authorization: TOKEN`

<aside class="notice">You must replace <code>TOKEN</code> with your obtained token.</aside>

<br>

Alternatively the token can be added as a query parameter of the URL but this is a less recomended way as it poses a security risk.

`?access_token=TOKEN`

<!-- <br>

PRO TIP: [Apollo UI](https://getapollo.io) uses the same access rights and tokens as Space Invoices. A user can be given access to view their account and organizations by clicking a link with a token in the URL. You can read more about Apollo [here](#apollo-ui). -->
