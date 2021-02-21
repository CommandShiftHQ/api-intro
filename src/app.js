const express = require('express');
const randomHex = require('./helpers/random-hex');
const fizzBuzz = require('./helpers/fizzbuzz');
const questions = require('./resources/questions.json');

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
        "message": "Thank you for your application to API Inc.\n\nOur automated fizzbuzz interview process will help us determine if you have what it takes.\n\nFor each question, you will GET the question and then give us the answer back to the same URL.\nYou will also find the URL for the next question in the nextQuestion parameter for each response.\n\nThe first question is at https://api-introduction/fizzbuzz/question/1.\n\nGood Luck\n",
        "nextQuestion": "/fizzbuzz/question/1"
      })
})

app.get('/fizzbuzz/question/:questionNumber', (req, res) => {
    const { nextQuestion, successMessage, ...question } = questions[req.params.questionNumber];
    res.status(200).json(question);
})

app.post('/fizzbuzz/question/:questionNumber', (req, res) => {
    const { questionNumber } = req.params;
    const { rules, numbers, successMessage, nextQuestion } = questions[questionNumber]

    const answer = questionNumber === "1" ? null : fizzBuzz(rules, numbers)
    
      if (questionNumber === "1") {
        res.status(200).json({ result: 'correct', successMessage, nextQuestion })
      } else if (answer === req.body.answer) {
          res.status(200).json({ result: 'correct', successMessage, nextQuestion })
      } else {
          res.status(400).json({ result: 'incorrect' });
      }
});

app.get('*', (_, res) => {
    res.status(200).json({ message: 'Instructions are at https://github.com/MCRcodes/api-intro' });
});

module.exports = app;
