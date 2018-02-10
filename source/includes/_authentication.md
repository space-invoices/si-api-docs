# Authentication

> To authorize, use this code:

```shell
# With shell, you can just pass the correct header with each request
curl "https://api.spaceinvoices.com/api/v1/..."
  -H "Authorization: TOKEN"
```

> Make sure to replace `TOKEN` with your authorization token.

Space Invoices uses authorization tokens to allow access to the API. A token can be aquired from the developer dashboard [Mission Control](#).

The API key has to be included in all API requests to the server in a header like this:

`Authorization: TOKEN`

<aside class="notice">You must replace <code>TOKEN</code> with your obtained token.</aside>
