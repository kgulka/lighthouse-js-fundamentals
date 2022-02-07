const urlEncode = function(text) {
  let remainString = text.trim();
  let newString = "";
  //console.log(remainString);
  for (let i = 0 ; i < remainString.length ; i++){
    let pos = remainString.indexOf(" ");
    if (pos > 0){
      newString += remainString.substring (0,pos) + "%20";
      remainString = remainString.substring (pos);
      remainString = remainString.trim();
    }
  }

  return newString + remainString;

};

console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));
