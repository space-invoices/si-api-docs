# Rate limits

The API has a hard limit of 100 requests/second. Exceeding the limit will throw a 429 status.

The Documents create endpoint has a throttler setup after the limiter to ensure consecutive document numbering. In case of a burst the refresh rate of the limiter is set to 10ms meaning that 100 concurrent calls would resolve in 1000ms minimum not including the processing time for each.
