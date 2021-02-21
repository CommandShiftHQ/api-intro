const express = require('express');
const randomHex = require('./helpers/random-hex');
const fizzBuzz = require('./helpers/fizzbuzz');

const app = express();
app.use(express.json())

app.get('/colors', (req, res) => {
    const count = req.query.count || 1;
    const colors = [];

    for (i = 0; i < count; i += 1) {
        colors.push({ value: randomHex() });
    }

    res.status(200).json({ colors });
});

app.get('/fizzbuzz', (_, res) => {
    res.status(200).json({
        "message": "FizzBuzz is the name of the game.\nHere's a list of numbers.\nSend me back a string as follows:\nFor each number:\nIf it is divisible by 3, print \"Fizz\".\nIf it is divisible by 5, print \"Buzz\".\nIf it is divisible by 3 and 5, print \"FizzBuzz\".\nOtherwise, print the number.\n\nEach entry in the string should be separated by a space.\n\nFor example, if the numbers are [1, 2, 3, 4, 5], you would send back:\n\n{\n  \"answer\": \"1 2 Fizz 4 Buzz\"\n}\n",
  "rules": [
    { "number": 3, "response": "Fizz" },
    { "number": 5, "response": "Buzz" }
  ],
  "numbers": [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15 ],
  "exampleResponse": { "answer": "1 2 Fizz 4 Buzz..." }  
    })
});

app.post('/fizzbuzz', (req, res) => {
  const answer = fizzBuzz(
    [
        { "number": 3, "response": "Fizz" },
        { "number": 5, "response": "Buzz" }
    ], 
    [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15 ])

  console.log(answer)

  if (answer === req.body.answer) {
      res.sendStatus(200)
  } else {
      res.status(400).json({ message: 'incorrect' });
  }
})

app.get('*', (_, res) => {
    res.status(200).json({ message: 'Instructions are at https://github.com/MCRcodes/api-intro' });
})

module.exports = app;
