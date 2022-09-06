# API Introduction

A collection of API endpoints for getting to grips with Postman and Fetch.

## /colors

The colour endpoint returns an array of random hex values.

### Getting a single hex value

`GET https://api-intro.onrender.com/colors`

```
{
  "colors": [
    { "value": "#E37171" }
  ]
}
```

### Get multiple hex values

`GET https://api-intro.onrender.com/colors?count=5`

```json
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

```js
fetch('https://api-intro.onrender.com/colors?count=5')
    .then(response => response.json())
    .then(data => {
        // Do something with your colors here
    })

```

## /fizzbuzz

### get started with fizzbuzz

`Get https://api-intro.onrender.com/fizzbuzz`

```json
{
    "message": "Thank you for your application to API Inc.\n\nOur automated fizzbuzz interview process will help us determine if you have what it takes.\n\nFor each question, you will GET the question and then give us the answer back to the same URL.\nYou will also find the URL for the next question in the nextQuestion parameter for each response.\n\nThe first question is at https://api-introduction/fizzbuzz/question/1.\n\nGood Luck\n",
    "nextQuestion": "/fizzbuzz/question/1"
}
```

### GET the first question

`GET https://api-intro.onrender.com/fizzbuzz/question/1`

```json
{
    "message": "FizzBuzz is the name of the game.\nHere's a list of numbers.\nSend me back a string as follows:\nFor each number:\nIf it is divisible by 3, print \"Fizz\".\nIf it is divisible by 5, print \"Buzz\".\nIf it is divisible by 3 and 5, print \"FizzBuzz\".\nOtherwise, print the number.\n\nEach entry in the string should be separated by a space.\n\nFor example, if the numbers are [1, 2, 3, 4, 5], you would send back:\n\n{\n  \"answer\": \"1 2 Fizz 4 Buzz\"\n}\n",
    "rules": [
        {
            "number": 3,
            "response": "Fizz"
        },
        {
            "number": 5,
            "response": "Buzz"
        }
    ],
    "numbers": [
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10,
        11,
        12,
        13,
        14,
        15
    ],
    "exampleResponse": {
        "answer": "1 2 Fizz 4 Buzz..."
    }
}
```

### Answer the first question

`POST https://api-intro.onrender.com/fizzbuzz/question/1`

```json
{ "answer": "your answer here..." }
```