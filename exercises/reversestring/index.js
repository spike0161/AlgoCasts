// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

//solution #1

// function reverse(str) {
//   let reverseWord = str.split("");
//   let answer = [];
//   for (let i = reverseWord.length - 1; i >= 0; i--) {
//     answer.push(reverseWord[i]);
//   }
//   return answer.join("");
// }

//solution #2

function reverse(str) {
  return str.split("").reverse().join("");
}

module.exports = reverse;
