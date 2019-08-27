const arr = ["|", "/", "—", "\\     \n"];
let timeInterval= 100;

for (let item of arr) {

  setTimeout(() =>  process.stdout.write(`\r${item}`), timeInterval)
  timeInterval += 200;
}; 


