# dope-date-formatter
a JS tool to format timestamp to human readable date!

#### Brazilian style too!

## How to use:

Just convert the timstamp in milisseconds (ISO-8601) and the timezone/notation desired.

#### Accepted formats/zones

- BRT: `01/01/2020 às 12:00` (brazilian)
- US24: `02-01-2021 at 18:00` (US 24h format)
- US12: `02-01-2021 at 9:00 am` (US 12h format)
- EU: `01-03-2020 12:00` (europe)

#### How to install (npm)

```
npm install dope-date-formatter
```

#### Examples

For example: Converting a timestamp to Brazilian date/hour format.

```
dope.syncFormat(1612213200000, "BRT")
```

Result:

```
01/02/2021 às 18:00
```

It can be used asyncronous and with an array as well!

```
//code example
let ts1 = 1577890800000
let ts2 = 1580569200000
let ts3 = 1583074800000
let ts4 = 1612180800000
let ts5 = 1612213200000
let ts6 = 1614567600000

let ts_array = [ts1, ts2, ts3, ts4, ts5, ts6]
```

```
ts_array.forEach(element => {
    ts_formatted = dope.asyncFormat(element, "US24").then(function (value) {
        ts_formatted = value;
        console.log(ts_formatted)
    }, () => {
        ts_formatted = "N/A"
    })
})
```

Result:

```
01-01-2020 at 12:00 pm
02-01-2020 at 12:00 pm
03-01-2020 at 12:00 pm
02-01-2021 at 9:00 am
02-01-2021 at 6:00 pm
03-01-2021 at 12:00 am
```