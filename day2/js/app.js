// Create a file named app.js
// Write a program that:
// Asks for the user's first name
// Asks for the user's last name
// Logs the user's first name to the console
// Alerts the user's last name
// *Confirms the user's birthday and alerts the resulting birthday
// Include the app.js in an empty html page
// Add it to a repository's gh-pages branch so I can test it
// Send me the url of the gh-pages on Slack
// * Extra points if you use JavaScript's Date object for the birthday.


let firstName = prompt('What is your first name?'); // creating first name

let lastName = prompt('what is your last name?'); // creating last name

// let name = firstName + " " + lastName; // combining first and last name together

console.log(firstName); // console logging name

alert(lastName);

// let birthDay = prompt('What is your birthday');
//
// alert(birthDay);

let birthMonth = prompt('What month were you born?');
let birthDate = prompt('what day were you born?');
let birthYear = prompt('what year were you born?');

let birthDay = birthMonth + "/" + birthDate + "/" + birthYear;

let usersBirthDay = new Date(birthDay);

alert(usersBirthDay);
