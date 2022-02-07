const numberOfVowels = function(data) {
  let count = data.match("a") ? data.match("a").length : 0;
  count +=  data.match("e") ? data.match("e").length : 0 ;
  count += data.match("i") ? data.match("i").length : 0 ;
  count += data.match("o") ? data.match("o").length : 0 ;
  count += data.match("u") ? data.match("u").length : 0 ;
  return count;
};

console.log(numberOfVowels("orange"));
console.log(numberOfVowels("lighthouse labs"));
console.log(numberOfVowels("aeiou"));