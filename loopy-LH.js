let message = "";
const loopyOn3 = "Loopy";
const lighthouseOn4 = "Lighthouse";
for ( let i = 100; i <= 200; i++) {
  if (i % 3 === 0){
    message = loopyOn3;
  }
  if (i % 4 === 0){
    message += lighthouseOn4;
  }
  if (!message) {
    message = i;
  }
  console.log(message);
  message = "";
}
// message the end
console.log("The end");