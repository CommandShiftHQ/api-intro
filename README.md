# API Introduction

A collection of API endpoints for getting to grips with Postman and Fetch.

## /colors

The colour endpoint returns an array of random hex values.

### Getting a single hex value

`GET https://api-introduction.herokuapp.com/colors`

```
{
  "colors": [
    { "value": "#E37171" }
  ]
}
```

### Get multiple hex values

`GET https://api-introduction.herokuapp.com/colors?count=5`

```
{
  "colors": [
    { "value": "#D44F3B" },
    { "value": "#062161" },
    { "value": "#F01479" },
    { "value": "#C4852D" },
    { "value": "#223078" }
  ]
}
```

After you have got the hang of getting random colors in postman, why not try it in the browser. You can make a request to the api in javascript like this: 

```
fetch('https://api-introduction.herokuapp.com/colors?count=5')
    .then(response => response.json())
    .then(data => {
        // Do something with your colors here
    })

```