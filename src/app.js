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

app.get('/fizzbuzz/question/:questionNumber', (req, res) => {
    const { nextQuestion, successMessage, ...question } = questions[req.params.questionNumber];
    res.status(200).json(question);
})

app.post('/fizzbuzz/question/:questionNumber', (req, res) => {
    const { rules, numbers, successMessage, nextQuestion } = questions[req.params.questionNumber]

    const answer = fizzBuzz(rules, numbers)
    
      if (answer === req.body.answer) {
          res.status(200).json({ result: 'correct', successMessage, nextQuestion })
      } else {
          res.status(400).json({ result: 'incorrect' });
      }
});

app.get('*', (_, res) => {
    res.status(200).json({ message: 'Instructions are at https://github.com/MCRcodes/api-intro' });
});

module.exports = app;
