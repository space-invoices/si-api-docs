# Model custom data

> **Example custom data**

```json
{
  ...
  "custom": {
    "string": "String",
    "boolean": true,
    "object": {},
    "number": 42
  }
}
```

Most models support adding free form custom data, this is achievable through the `custom` property which is of type object.

Custom property and it's nested data can also be filtered when querying a model endpoint, see [filters](#filters) section for details.
