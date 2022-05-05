const birthdate = document.querySelector("#input_date");
const button = document.querySelector("#btn");
const output = document.querySelector("#outputBox");
const output2 = document.querySelector("#outputBox2");

button.addEventListener("click" , callfunction );
console.log("clicked");

function callfunction(){
var birthday = birthdate.value;
console.log(birthday)
const arr = birthday.split("-")
console.log(arr)
const date = {
  year: arr[0],
  month: arr[1],
  day : arr[2]
}
// console.log(date)

function checkalldayformats(date){
let datestr ={day:'',month:'',year:''}
 if(date.day < 10){
   datestr.day = date.day
 }else{
   datestr.day = date.day;
 };
   
   if(date.month < 10){
     datestr.month = date.month;
 }else{
     datestr.month = date.month;
   };
  datestr.year = date.year;
 
 return datestr;
};
var newdate = checkalldayformats(date)


function dayinto(newdate){
var dd_mm_yyyy =newdate.day  +newdate.month +newdate.year
 var mm_dd_yyyy =newdate.month +newdate.day  +newdate.year
 var yyyy_mm_dd =newdate.year +newdate.day +newdate.month 
 var date1   = newdate.day + newdate.month + newdate.year.slice(-2)
 var date2  = newdate.day + newdate.month + newdate.year.slice(-2)
 var date3   = newdate.year.slice(-2) + newdate.month + newdate.day  
return [dd_mm_yyyy , mm_dd_yyyy , yyyy_mm_dd ,date1,date2,date3];
}

var arrayofdate = dayinto(newdate)
// console.log(arrayofdate)

function isPalindrome(arrayofdate){
let array = []
 for(let i=0;i<arrayofdate.length;i++){
 let split = arrayofdate[i].split("");
let reversed = split.reverse();
let reversedstring = reversed.join('');
var truee =   (reversedstring==arrayofdate[i])
   array.push(truee);
  } return array
}
isPalindrome(arrayofdate)
var finalanswer = isPalindrome(arrayofdate);
// console.log(finalanswer)


function checkpalindrome(finalanswer){
let alldateformat = finalanswer;
for(let i=0 ;i<alldateformat.length;i++){
 var flags = alldateformat[i]===true;
  break;
}
return flags;
}
console.log(checkpalindrome(finalanswer))
output.innerHTML = `Your birthday is a palindrome = ${checkpalindrome(finalanswer)}`

const date1 = new Date(birthday)
const date2  = new Date("02/03/2030")
// console.log(date1)
// console.log(date2)
let differcebetweendates =   date2.getTime()  - date1.getTime()
let differceinday = differcebetweendates/ (1000 * 3600 * 24)
console.log(Math.floor(differceinday))
output2.innerHTML = `No. of days in next Palindrome date is = ${Math.floor(differceinday)}`
}


















