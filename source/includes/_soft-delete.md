# Soft delete

> **Soft deleted model object:**

```json
{
  "_isDeleted": true,
  "deletedId": "5a3683ea12d5a67dd0ef2f4c",
  "deletedAt": "2020-04-17 16:40:43.714Z"
}
```

Indicated models are non-permanently (soft) deleted when performing a delete operation on them.

Soft deleted model instances do not appear in any queries. To retrieve soft deleted instances a `deleted` property must be added to the filter parameter when querying data, see the [filters](#filters) section for more details.

The `deleted` property can't be used in the count request.
