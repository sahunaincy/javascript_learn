// let mydate = new Date();
// console.log(mydate);
// console.log(mydate.toString());
// console.log(mydate.toDateString());//Tue Jul 21 2026
// console.log(mydate.toTimeString());//ye universal time dege isme koi argument nhi hote 
// console.log(mydate.toLocaleTimeString("en-IN"));
// console.log(mydate.toLocaleString());
// console.log(typeof mydate);//object

// let myCreatedDate = new Date(2026,0,13)//year,month,day , month 0 se start hote hai
// console.log(myCreatedDate);

// let myTimeStamp = Date.now();
// console.log(myTimeStamp);//ye millisec mai answer dega 
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/100));//convert millisec to sec
// console.log(Math.floor(myTimeStamp/100));
 
let newdate= new Date();
console.log(newdate.getDate());//find date
console.log(newdate.getDay());//find day
console.log(newdate.getFullYear());///find year
console.log(newdate.getMilliseconds());

console.log(`date is ${newdate.getDate()} and year is ${newdate.getFullYear()}`);



