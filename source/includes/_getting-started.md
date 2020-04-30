# Getting started

> **To create your first invoice:**

```shell
curl "https://api.spaceinvoices.com/v1/organizations/ORG_ID/documents" \
  -H "Authorization: LAUNCH_CODE" \
  -d _documentClient[name]="Rocket Man" \
  -d _documentClient[country]="United Kingdom" \
  -d _documentItems[0][name]="Space suit" \
  -d _documentItems[0][quantity]=2 \
  -d _documentItems[0][unit]="Item" \
  -d _documentItems[0][price]="1000" \
  -d _documentItems[0][_documentItemTaxes][0][rate]=21
```

> **To download a PDF of the created invoice**

```shell
curl "https://api.spaceinvoices.com/v1/documents/DOCUMENT_ID/pdf?l=en" \
  -H "Authorization: LAUNCH_CODE" \
  -o my-first-invoice.pdf
```

**Here are some recommended steps to successfully venture into the invoicing universe.**

#### 1. Create an [Account](#accounts) on [Space Invoices](https://spaceinvoices.com/signup)

Signup for an account if you haven't already, you'll need it to start making API calls.

It's also recommended to log into [Space Invoices](https://spaceinvoices.com/login) as your launch code (access token) will be automatically populated in all documentation examples.

---

#### 2. Create an [Organization](#organizations)

Organizations are the central unit of all other resources in the API, you'll need one to issue invoices.

_Space Invoices supports multi-tenant management, meaning an account can have multiple organizations linked to it, each one represents a legal entity like a business, NGO, club, and similar._

---

#### 3. Try creating your first [invoice](#the-document-object)

On the right is an API call to create a simple invoice, take it for a spin.

_If you're logged into Space Invoices your launch code and organization's ID should already be populated in the example._

---

#### 4. Fetch the PDF version of the invoice you just created

Now let's use the next command to fetch a PDF the invoice, this time you'll need to replace the `DOCUMENT_ID` in the URL with the actual ID of the created invoice.

---

#### 5. That's it

Great, you now know how to issue invoices!

- Read about how to [send an invoice to a customer by email](#send-a-document-in-email).

---

You can also create and manage organizations for your end customers and issue invoices in their name:

- Read about how to [create organizations](#create-an-organization),

- and how to [grant user access to an organization](#invite-user-to-organization).
