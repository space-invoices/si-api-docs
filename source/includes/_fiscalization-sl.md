# Slovenia

**We provide a complete mechanism for fiscalization based on Slovenian financial office's (Finančna Uprava Republike Slovenije - FURS) regulatory requirements.**

It is required by law for all companies selling goods or services in Slovenia to report all cash or credit card paid invoices to govt. This also includes all invoices for which the form of payment is not known in advance. Additionally it is also required to fiscalize all advances and credit notes for previeously issued invoices that were fiscalized of will be fiscalized.

Fiscalization also requires additional data when creating documents, Space Invoice's validation changes when fiscalization is enabled to make sure appropriate data is provided.

WARNING: While we take great care to ensure fiscalization is performed as required by law and that our technical solution fits all requirements where applicable, we urge users to do their own research on the matter. Space Invoices can only ensure the technical aspect of the process, the final responsibility of fiscalization setup and operation is on the side of the user / provider of the data / the issuer of the invoices ie. the end user and not Space Invoices.

## Setup

There is a setup involved before we can start taking advantage of this functionality.

HINT: Since this is usually a one time process we also provide a visual step-by-step tool (wizard if you will 🧙‍♂️) that can take you through the whole process of setting up all required configuration for fiscalization for a organization.

### 1. Certificate

To enable fiscalization one of the first steps is to acquire a certificate from the Slovenian Financial office (FURS), the certificate and passphrase can then be uploaded to Space Invoices and is required to register business premises and fiscalize invoices.

NOTE: A test certificate can be acquired from FURS and used with Space Invoices to create a test integration before going live. See the certificate section for more details.

### 2. Account configuration

First name, last name and tax number (if available) of the responsible person or person issuing the documents must be provided on the account that is creating documents.

For automatically generated documents it is recommended that users specify the company's responsible person ie. CEO's information. In case documents are issued manually then it is recommended to create an account for each person and adding their data.

Space Invoices will throw a validation error if this data is not provided. Please see the Account documentation for details.

### 3. (legal) act

A legal act must be created and stored by the issuing organization. Please see the Apollo interface for an example of one created based on the recommendations of FURS. The document is required by law and contains information about how documents are numbered.

To fully form this document a decision must be made about business premises and electronic devices, this step is a good point to do so.

## Uploading the certificate and passphrase

```shell
curl "https://api.spaceinvoices.com/v1/organizations/:id/upload-certificate?type=furs" \
  -H "Authorization: LAUNCH_CODE" \
  -H "passphrase: CERTIFICATE_PASSWORD" \
  -F "certificate=@path/to/local/file"
```

If we perform multiple uploads the last certificate will be kept and the previous ones deleted.

The certificate's password is symmetrically encrypted with our own strong secret key and a per-password random generated unique strong key to ensure brute force protection and maximum security. Our key, the certificate and the password are all stored in separate locations with limited personel access.

NOTE: A test certificate can also be uploaded, take care to set the right (`test`) environment for the fiscalization configuration based on the type of uploaded certificate.

## Adding business premises

Business premieses must have unique identifier (name) set for `businessPremiseId` value.

The correct data for this is available and should be gathered from public records.

```shell
curl "https://api.spaceinvoices.com/v1/organizations/:id/businesspremises" \
  -H "Authorization: LAUNCH_CODE" \
  -d businessPremiseId="P1" \
  -d type="realestate" \
```

## Adding electronic devices

An electronic device belongs to a business premise and must have a unique identifier (name) set for `electronicDeviceId` value. The value only has to be unique in the givven business premise the device is related to.

```shell
curl "https://api.spaceinvoices.com/v1/businesspremises/:id/electronicdevices" \
  -H "Authorization: LAUNCH_CODE" \
  -d electronicDeviceId="D1" \
```

## Going live / enabling fiscalization

Once all the above steps are complete we are ready to enable fiscalization.

NOTE: While we validate steps for fiscalization configuration, there are certain parts of the process, like the creation of the legal act, acquisition of a valid certificate, correct business premise and electronic device setup, that we do not control and is thus left to the users to ensure is correct before going live.

To enable fiscalization the following settings have to be added or updated on the given organization's defaults. See defaults section for more details.

|                |                                                                                                                                                                                     |
| -------------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|       furs_env | String, defaults to `production` if not set and can also be `test`. Indicates which FURS fiscalization API endpoint to call.                                                        |
|  furs_strategy | String, defaults to `C` if not set, one of `C`, `B`. Indicates numbering strategy to use. Either per business premise (C) or per electronic device (B). C is the recommended value. |
| firs_verifying | Boolean indicates if fiscalization is enabled.                                                                                                                                      |
