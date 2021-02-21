const evaluateRules = (rules, number) => {
    const answer = [];
    rules.forEach((rule) => {
      if (number % rule.number === 0) {
        answer.push(rule.response);
      }
    });
    !answer.length && answer.push(number);
    return answer.join("");
  };

  module.exports = (rules, numbers) => numbers.map((number) => evaluateRules(rules, number)).join(' ');
  