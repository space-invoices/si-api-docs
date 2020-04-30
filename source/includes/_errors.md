# Errors

Space Invoices API uses the following error codes:

**400** Bad Request  
_Your request is invalid._

**401** Unauthorized  
_You do not have the permission to access the route or are not authorized for the resource with the given ID._

**404** Not Found  
_The specified route could not be found._

**422** Unprecessable entity  
_The provided data is invalid, usually manifesting due to a validation error. Details about the error are visible in the server response body._

**500** Internal Server Error  
_We had a problem with our server. Try again later._
_This is very rate._

**503** Service Unavailable  
_We're temporarily offline for maintenance. Please try again later._
_This is very rare._
