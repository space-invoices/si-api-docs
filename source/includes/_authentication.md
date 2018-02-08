# Authentication

> To authorize, use this code:

```shell
# With shell, you can just pass the correct header with each request
curl "api_endpoint_here"
  -H "Authorization: TOKEN"
```

> Make sure to replace `TOKEN` with your authorization token.

Space Invoices uses authorization tokens to allow access to the API. A token can be aquired by loging in using an account's username and password. See Accounts > [Login](#login) section for detailed instructions.

The API key has to be included in all API requests to the server in a header like this:

`Authorization: TOKEN`

<aside class="notice">You must replace <code>TOKEN</code> with your obtained token.</aside>
