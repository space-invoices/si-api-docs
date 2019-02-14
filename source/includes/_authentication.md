# Authentication

> To make calls to the API, ensure you have inserted your launch code:
__Space Invoices uses launch codes to allow access to the API. A launch code can be acquired from our developer dashboard [Mission Control](http://spaceinvoices.com/signup).__

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

__Space Invoices uses launch codes to allow access to the API. A launch code can be acquired from our developer dashboard [Mission Control](http://spaceinvoices.com/signup).__

The API launch code has to be included in all API requests to the server in a header like the following:

`Authorization: LAUNCH_CODE`

<aside class="notice">You must replace <code>LAUNCH_CODE</code> with your launch code obtained from our website.</aside>

<br>

Alternatively, the launch code can be added as a query parameter of the URL. 
Please note before using: This implementation has considerable security risks!

`?access_token=LAUNCH_CODE`

<!-- <br>

PRO TIP: [Apollo UI](https://getapollo.io) uses the same access rights and launch code as Space Invoices. If you wish to give individual users the ability to view their account and organizations, you may provide them with a URL link which has the launch code embedded. You can read more about Apollo [here](#apollo-ui). -->
