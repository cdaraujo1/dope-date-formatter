# dope-date-formatter
a JS tool to format timestamp to human readable date!

##### Brazilian style too!

## How to use:

Just convert the timstamp in milisseconds (ISO-8601) and the timezone/notation desired.

For example: Converting a timestamp to Brazilian date/hour format.

```
dope.syncFormat(1612213200000, "BRT")
```

Result:

```
01/02/2021 às 18:00
```