# Changelog

## # 29.4.2020

- Updated sidebar with sections
- Updated property definition style for improved readability
- Updated the Documents section:
  - Added the Cancel Document action
  - Added the Uncancel Document action
  - Added the Mark Document as sent action
  - Added the Count Documents action
  - Added the reference property
  - Added Document Taxes and Reverse Taxes properties
  - Added the uniqueId property
  - Added the totalConverted and totalWithTaxConverted properties
  - Added the totalDue, totalPaid and paidInFull properties
  - Updated the Document Client property:
    - Added missing address properties
    - Added the isEndCustomer property
  - Updated the Document Issuer property:
    - Added missing address properties
  - Updated the Document Items property:
    - Added the priceGross property
    - Added the discountIsAmount property
    - Added the SKU property
    - Added read-only totals properties
    - Updated the Document Taxes property:
      - Added the name and abbreviation properties
- Added the Model custom data section
- Added the Calculations section
- Added the Smart codes section
- Added the Rate limits section
- Added the Defaults section
- Update the Accounts section:
  - Added the Impersonate action
  - Added the reset and update password sections
  - Added the accept invitation section
  - Added the reject invitation section
- Updated the Organizations section:
  - Added the Deactivate action
  - Added the Activate action
  - Added the Access object
    - Added the Invite action
    - Added the List Accounts with access action
    - Added the Remove access action
    - Added the Disable access action
    - Added the Enable access action
    - Added the Change role access action
  - Added the Stats actions
  - Added the Export action
- Added endpoints index to models
- Added use of token and organization id if user logged in

## # 16.4.2020

- Added 'incoming' property to document
- Added Webhooks section
- Added Soft delete section

## # 12.2.2019

- Added Fiscalization (SI) section

## # 4.11.2018

- Added instructions for `_documentItems[].save` property to the create document method
- Added instructions for missing `dateValidTill` and `datePaid` document properties
- Estimate's `dateValidTill` is set based on new default value set on organization `estimate_validTillDays`
- Added `_documentConversionRate` definition to `document`
- Added better tax loading for documents methods
- Added tax loading instructions for documents methods
- Added better tax loading for items methods
- Added tax loading instructions for items methods
- Fixed list taxes example response
- Fixed create tax curl typo

## # 01.11.2018

- Renamed token to launch codes :)

## # 24.10.2018

- Added countries documentation
- Fixed some iso references
- Added extra clarification about taxes
- Fixed currency id field name
- Added missing tax abbreviation field where applicable
- Removed redundant required field notation on read operations

## # 23.10.2018

- Added a changelog
- Added instructions for uploading a logo or signature to an organization
- Added information about Apollo UI
- Added instructions about listing a single organization's data
- Added alternative instructions for providing access token as query param of URL
- Added more information about sending documents in emails
- Added more information about downloading PDFs
