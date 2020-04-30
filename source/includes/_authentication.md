# Authentication

> To make calls to the API, ensure you have inserted your launch code:  
> **Space Invoices uses launch codes to allow access to the API. A launch code can be acquired from our developer dashboard [Mission Control](http://spaceinvoices.com/signup) or by [logging in through the API](#log-in-an-account).**

```shell
# With shell, you can just pass the correct header with each request
curl "https://api.spaceinvoices.com/v1/..."
  -H "Authorization: LAUNCH_CODE"
```

```javascript
var spaceInvoices = new SpaceInvoices("LAUNCH_CODE");
```

```php
<?php
  Spaceinvoices\Spaceinvoices::setAccessToken("LAUNCH_CODE");
?>
```

**Space Invoices uses launch codes to allow access to the API. A launch code can be acquired from our developer dashboard [Mission Control](http://spaceinvoices.com/signup).**

### In headers

The launch code has to be included in all API requests to the server in a header like the following:

`Authorization: LAUNCH_CODE`

### In query params

Alternatively, the launch code can be added as a query parameter of the URL.  
_Please note this implementation has considerable security risks!_

`?access_token=LAUNCH_CODE`

### In documentation

If you are logged into Mission Control the documentation examples will already contain your real `launch code`.  
We recommend creating a non-expiring one through [Mission Control](https://spaceinvoices.com) for production use.
