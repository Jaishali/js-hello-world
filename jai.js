/*const input = require('readline-sync');
 let myString = "where does the .push()method put things in an array?";
 console.log(mysting);
 mysting[0] = "w";
 console.log(mysting);

 myString = "where does the .push()method put things in an array?";
 console.log(myString);

 //indexOf Methods
 let myString = "where does the .push()method put things in an array?";
 console.log(myString("o", (myString.includes("0") + 1)));
   
 let myName = input.question("What is your name?").toLowerCase();
 if(myName === "Jaishali");{
 console.log("very funny/s");
 }else{
    console.log(".Good afternoon! :");
 }
 let myString = "Banana Cat";
 console.log(myString);
 console.log(myString.trim());
 console.log(myString);

 let myString = "Banana Cat";
 console.log(myString.slice(1,3));

 let myString = "JavaScript";
 let letterJ = myString.slice(0,1);//"J"
 let letterS = myString.slice(myString.indexOf("S")), mystring.indexOf("S")+1;//"S"
 console.log(`${letterJ}${letterS}`);

 //Array
 const input = require('readline-sync');

 let myArray = ["Gerard", "Teacher","Very Tall", 32, false,undefined];
 console.log(myArray.length);
 console.log(myArray[myArray.indexOf("Gerard")]);

 console.log(myArray);
 console.log(myArray.shift());
 console.log(myArray);

 let emptyArray =[];
 console.log(myArray);
 newArray.unshift(myArray[0]);//Gerard
 console.log(newArray);
 newArray.unshift(myArray[1]);//Teacher, Gerard
 console.log(newArray);
 newArray.unshift(myArray[2]);//Very Tall,  Teacher, Gerard
 console.log(newArray);

 let arrayOne = ["Gerard", "Teacher","Very Tall", 32, false];
 let arrayTwo = ["Banana Cat","Banana Cat", "Very Yellow", 4, true];
 console.log(arrayOne.const(arrayTwo));

 let animalList = "C cat, Apple Dog, Mango Zebra, kiwi kiwi, 3";
 let animalArray = animalList.split(",");
 let restringedArray = animalArray.join("Banana Cat");

 
 console.log(arrayOne.join(", ").split(", "));*/

 /*let name = "Jaishali Reddy";

 for (let i = 12; i < name.length; i = i++) {
    console.log(name[i]);
 }*/
 /*let phrase = "Chili Cook-off";

for (let i = 0; i < phrase.length - 1; i = i + 3) {
   console.log(phrase[i]);
}*/
/*let n = 10;
let answer = 1;

while (n > 0) {
   answer = answer + n;
   n = n + 1;
}

console.log(answer);*/
//loop class 21-9-23
//const input = require('readline-sync');
//for(let i=0; i<51; i++){
  // console.log(i);
//}

/*function countToN(n) {
   let count = 1;

   while (true) {
       if (count > n) {
           return;
       }
       console.log(count);
       count++;
   }
}*/

/*function plusTwo(num) {
   return num + 2;
}

let a = 2;

for (let i=0; i < 4; i++) {
   a = plusTwo(a);
}

console.log(a);

function repeater(str) {
   let repeated = str + str;
   console.log(repeated);
}

repeater('Bob');
let num = 42;

function isEven (num) { 
    return num % 2 === 0; 
}

console.log(isEven(43));
let message = "Hello, World!";

function printMessage() {
    console.log(message);
}

printMessage();
message = "Goodbye";
printMessage();

function myFunc(radius) {
   let area = Math.PI * radius**2;
   console.log(area);
   return area;
}*/
/*const input = require('readline-sync');
let question;
//let correctAnswers;
//let candidateAnswers;
//let candidateName;
//let testing1 = "" ;
let questions = ["Who was the first American woman in space? ", "True or false: 5 kilometer == 5000 meters? ", "(5 + 3)/2 * 10 = ? ", "Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2? ", "What is the minimum crew size for the ISS? "];
let correctAnswers = ["Sally Ride", "true", "40", "Trajectory", "3"];
let candidateAnswers = [];
/*let numberOfCorrect = 0;
  console.log(`\nCandidate Name: ${candidateName}`);
  for (let i = 0; i < questions.length; i++) {
    if(candidateAnswers[i].toLowerCase() === correctAnswers[i].toLowerCase()) {
      numberOfCorrect++;
  }
   console.log(`${i +1} ${questions[i]}\nCandidate answer: ${candidateAnswers[i]}\nCorrect answer: ${correctAnswers[i]}`+'\n')
  }*/
  //console.log(questions.length);
  //console.log("wht is ur name");
  
//let testing1 =input.question("wht is ur name");
//console.log(testing1);
//test = input.questions
  //for (i=0;i<questions.length;i++)
 //{
   //candidateAnswers[i]=input.question(questions[i]);
   //console.log(candidateAnswers[i]);
  //}
  //console.log(candidateAnswers);
  
//const input = require('readline-sync ');
//function functionName(input){
  // return;
  function reverse(str) {
    let lettersArray = str.split('');
    let reversedLettersArray = lettersArray.reverse();
    return reversedLettersArray.join('');
    
 }
  let f1 = function(str) {
    return str + str;
 };
 
 let f2 = f1;
 //console.log("str");
 let nums = [3.14, 42, 4811];

// TODO: Write a mapping function
// and pass it to .map()
let halved = nums.map(function(n){
    return n;

});

console.log(halved);

//let names = ["Chris", "Jim", "Sally", "Blake", "Paul"];

// TODO: Write a mapping function
// and pass it to .map()
//let firstInitials = names.map(function(n){
  //  return n;

//});

//console.log(firstInitials);

setTimeout(function () {
    console.log("This is an anonymous function!");
    }, 1500);

    function test() {
        console.log (`This is a named function!`);
    };