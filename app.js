// -------------ASSAIGNMENT 26 T0 30  MATH METHODS--------- 

// Q1. Write a program that takes a positive integer from user &
// display the following in your browser.
// a. number
// b. round off value of the number
// c. floor value of the number
// d. ceil value of the number

// var num = 3.45214;
// document.write("<h1>number:" +num + "<br>")
// document.write ("<h1>round off value:" + Math.round(num) + "<br>")
// document.write ("floor value:"+ Math.floor(num) + "<br>" )
// document.write ("ceil value:" + Math.ceil(num))

// Q2. Write a program that takes a negative floating point
// number from user & display the following in your browser.
// a. number
// b. round off value of the number
// c. floor value of the number
// d. ceil value of the number

// var num = -2.673;
// document.write("<h1>number:" +num + "<br>")
// document.write ("<h1>round off value:" + Math.round(num) + "<br>")
// document.write ("floor value:"+ Math.floor(num) + "<br>" )
// document.write ("ceil value:" + Math.ceil(num))

// Q3. Write a program that displays the absolute value of a 
// number.
// E.g. absolute value of -4 is 4 & absolute value of 5 is 5

// let a = -4 ;
// let b = +prompt("enter a number")
// Math.abs(a)
// document.write("<h1>The absolute value of " +  a + "is" + b)

// Q4. Write a program that simulates a dice using random() 
// method of JS Math class. Display the value of dice in your 
// browser.:

// let randomValue =Math.random();
// document.write("random dice value:" + randomValue)


// Q5. Write a program that simulates a coin toss using random()
// method of JS Math class. Display the value of coin in your
// browser
// var headsUser = prompt("enter heads user name")
// var tailsUser = prompt("enter tails user name")
// var toss = Math.random()*2
// var floor = Math.floor(toss)
//     if (floor === 0){
//     alert("random coin value:"+ headsUser + "heads" )
// }else{
// alert("random coin value:"+ tailsUser + "tails" ) 
// }

// let value =Math.floor(Math.random)*2
//     if(value % 2===0){
//     document.write("Head")
// }
// else{
//     document.write( "Tail")
// }



// Q6. Write a program that shows a random number between 1 
// and 100 in your browser

// var ran =Math.random()*10;
// document.write("<h1>random number between 1 and 100:" + ran)

// Q7. Write a program that asks the user about his weight. Parse 
// the user input and display his weight in your browser. 
// Possible user inputs can be:
// a. 50
// b. 50kgs
// c. 50.2kgs
// d. 50.2kilograms

// let weight = prompt("Enter your weight in kgs");
// let weightInKgs = parseFloat(weight);
// let weightInPounds = weightInKgs * 2.20462;
// alert("The weight of user is " + (weightInKgs + 8.3).toFixed(1) + " kilograms");


// Q8. Write a program that stores a random secret number from 
// 1 to 10 in a variable. Ask the user to input a number 
// between 1 and 10. If the user input equals the secret 
// number, congratulate the user.

// let secretNumber = (Math.random())
// secretNumber =Math.floor ((secretNumber*10)+1)
//  let userNumber = + prompt("enter a number")
//  if (secretNumber==userNumber){
//     document.write(congratulate)
//  }
// else{
//     document.write("try again")
// }
// document. write (secretNumber) 




// -------------ASSAIGNMENT 31 T0 34  STRING METHODS---------

// Q1. Write a program that displays current date and time in
// your browser.

// var rightNow = new Date();
//  var theDay = rightNow.getDay();
//  document.write(rightNow)

// 2. Write a program that alerts the current month in words.
// For example December.
// var currentDate = new Date();
// var currentMonthIndex = currentDate.getMonth();
// var monthNames = [
//   'January', 'February', 'March', 'April', 'May', 'June', 
//   'July', 'August', 'September', 'October', 'November', 'December'
// ];
// var currentMonthName = monthNames[currentMonthIndex];
// document.write("<h1>current month:" + currentMonthName);

// Q3. Write a program that alerts the first 3 letters of the current
// day, for example if today is Sunday then alert will show 
// Sun.
//  var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
//  var now = new Date();
//  var theDay = now.getDay();
//  var nameOfToDay = dayNames[theDay];
//  document.write("<h1>Today is :" + nameOfToDay)

//  Q4. Write a program that displays a message “It’s Fun day” if 
// its Saturday or Sunday today.

// var currentDate = new Date()
// var  currentDay = currentDate .getDate()
// if (currentDay === 6 || currentDay === 0){
//   document.write("<h1>It's Fun day")  
// }else{
//     document.write("<h1>It's not  Fun day")   
// }
// Q5Write a program that shows the message “First fifteen 
// days of the month” if the date is less than 16th of the month 
// else shows “Last days of the month”.

// var currentDate = new Date()
// var currentDay = currentDate .getDate()
// if(currentDay < 16){
// document.write("<h1>First fifteen days of the  month")
// }else{
// ("Last days of the month")
// }

// Q6. Write a program that determines the minutes since 
// midnight, Jan. 1, 1970 and assigns it to a variable that 
// hasn't been declared beforehand. Use any variable you like 
// to represent the Date object

// var currentDate = new Date()
// var millsSince = currentDate.getMilliseconds()
// var minutesSince = currentDate.getMinutes()
// document.write("<h1>Current Date:" + currentDate + "<br>"+ "Elapsed milliseconds since january 1, 1970:" + millsSince + "<br>" + "Elapsed minutes since january 1, 1970:" + minutesSince)



//
// Q7. Write a program that tests whether it's before noon and 
// alert “Its AM” else “its PM”
// var currentDate = new Date();
// var currentHour = currentDate.getHours();

// if (currentHour < 12) {
  
//   alert("It's AM");
// } else {
  
//   alert("It's PM");
// }

// Q8. Write a program that creates a Date object for the last day 
// of the last month of 2020 and assigns it to variable named 
// laterDate.

//  var laterDate = new Date(2020,11,31);
//  document.write("<h1>Later Date:" + laterDate)
 

// Q9. Create a date object of the starting date of this Ramadan 
// and alert the number of days past since 1st Ramadan?
// Note: 1st Ramadan was on June 18, 2015

// let currentDate = new Date()
// let pastDate = new Date("2015-06-18")
// let days = (currentDate - pastDate)/(1000*60*60*24)
// alert(Math.floor(days)+ "days have passed since first Ramadan, 2015")

// Q10. Write a program that displays in your browser the 
// seconds that elapsed between the reference date and the 
// beginning of 2015.

// var referenceDate = new Date("Dec 5 ,2015");
// var beginningOf2015 = new Date("January 1, 2015");
// var Milliseconds = (referenceDate - beginningOf2015)
// var seconds = Math.floor(Milliseconds)/(1000)
//  document.write( "on refrence date" + referenceDate + "<br>" +  seconds + "Seconds had passed since beginning of 2015:" );

// Q11. Create a Date object for the current date and time. 
// Extract the hours, reset the date object an hour ahead and 
// finally display the date object in your browser.

// let currentDate = new Date()
// let dateBefore1Hour=new Date()
// dateBefore1Hour.setFullYear(currentDate.getFullYear()-1)
// document.write("currentDate:" +currentDate+ "<br>date before 1 hour was:" + dateBefore1Hour)

// 


// Q12. Write a program that creates a date object and show the 
// date in an alert box that is reset to 100 years back?
//  let currentDate = new Date()
//  var resetDate = new Date()
//  resetDate.setFullYear()-100
//  document.write("current date is:" +  currentDate  + "100 years back,it was" + resetDate);

// var currentDate = new Date()
// currentDate.setFullYear(currentDate.getFullYear()-100)
// document.write("date 100 years back" + currentDate)

// Q13. Write a program to ask the user about his age. Calculate 
// let userAge = +prompt("enter your age")
// let currentDate = new Date()
// currentDate = currentDate.getFullYear()
// let userBirthYear =  currentDate - userAge
// document.write("your age:"+userAge + "<br>your birth year"+userBirthYear)

// Q14. Write a program to generate your K-Electric bill in your
// browser. All the amounts should be rounded off to 2 
// decimal places. Display the following fields:
// a. Customer Name
// b. Current Month
// c. Number of units
// d. Charges per unit
// e. Net Amount Payable (within Due Date)
// f. Late Payment Surcharge
// g. Gross Amount Payable (after Due Date)
// Where,
// Net Amount Payable (within Due Date) = Number of units * Charges per unit
// & Gross Amount Payable (after Due Date) = Net Amount + Late Payment Surcharge


// var customerName = prompt("Enter customer name:");
// var currentMonth = prompt("Enter current month:");
// var numberOfUnits = parseFloat(prompt("Enter number of units:"));
// var chargesPerUnit = parseFloat(prompt("Enter charges per unit:"));
// var latePaymentSurcharge = parseFloat(prompt("Enter late payment surcharge:"));

// var netAmountPayable = numberOfUnits * chargesPerUnit
// var grossAmountPayable = netAmountPayable + latePaymentSurcharge;

// netAmountPayable = netAmountPayable.toFixed(2);
// grossAmountPayable = grossAmountPayable.toFixed(2);

// document.write("<h2>K-Electric Bill</h2>");
// document.write("<p><strong>Customer Name: </strong>" + customerName + "</p>");
// document.write("<p><strong>Current Month: </strong>" + currentMonth + "</p>");
// document.write("<p><strong>Number of units: </strong>" + numberOfUnits.toFixed(2) + "</p>");
// document.write("<p><strong>Charges per unit: </strong>" + chargesPerUnit.toFixed(2) + "</p>");
// document.write("<p><strong>Net Amount Payable (within Due Date): </strong>" + netAmountPayable + "</p>");
// document.write("<p><strong>Late Payment Surcharge: </strong>" + latePaymentSurcharge.toFixed(2) + "</p>");
// document.write("<p><strong>Gross Amount Payable (after Due Date): </strong>" + grossAmountPayable + "</p>");





















                                              



                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          





