# Authentication

> Launch codes must be used to make calls to the API:

```shell
# With shell, you can just pass the correct header with each request
curl "https://api.spaceinvoices.com/v1/..."
  -H "Authorization: LAUNCH_CODE"
```

```javascript
var spaceInvoices = new SpaceInvoices('LAUNCH_CODE');
```

```csharp
SpaceConfiguration.SetApiKey("LAUNCH_CODE");
```

```php
<?php
  Spaceinvoices\Spaceinvoices::setAccessToken("LAUNCH_CODE");
?>
```


> Make sure to replace `LAUNCH_CODE` with your own launch code.

__Space Invoices uses launch codes to allow access to the API. A launch code can be aquired from our developer dashboard [Mission Control](http://spaceinvoices.com/signup).__

The API launch code has to be included in all API requests to the server in a header like this:

`Authorization: LAUNCH_CODE`

<aside class="notice">You must replace <code>LAUNCH_CODE</code> with your launch code obtained from our website.</aside>

<br>

Alternatively the launch code can be added as a query parameter of the URL but this is a less recomended way as it poses a security risk.

`?access_token=LAUNCH_CODE`

<!-- <br>

PRO TIP: [Apollo UI](https://getapollo.io) uses the same access rights and launch code as Space Invoices. A user can be given access to view their account and organizations by clicking a link with a launch code in the URL. You can read more about Apollo [here](#apollo-ui). -->
