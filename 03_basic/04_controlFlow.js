//if
// if(condition==true){

// }
// const balance =1000;
// if(balance >500)console.log("test");
// const balance =1000;
// if(balance >500)console.log("test"),console.log("naincy sahu");//javascript mai ye bhi valid hai but ye bht unreadable hai
//  if(condition){   //multiple condition
//  }else if(condition){
//  }else{
//  }
//real life used example
// const userLoggedIn=true
// const debitCard=true
// if(userLoggedIn && debitCard){
//     console.log("allow to buy course");
// }
//nullish coalescing operator (??) : null undefined
// ye opertor null or undefined kai liya hote hai tabhi kabhi mmethod functon se koi value na aaye to vo 
// null or undefined answer de jisse program aaram se run ho
 //let val;
 //val=5??10;//isme jo phele hoga vo ans 5
 //val=null??5//isme function ne value return ki to null aayge
//  val = null??undefined//undefined
//  val=null??undefined??15//15
 //console.log(val);

//+++++++++++++++++++++++++++++++++++ switch case +++++++++++++++++++++++++++++++
// switch (key){//syntax 
//     case value:
//     break;
//     default:
//     break;
// }
// const name = "dharmendra sahu";//shift+alt+dwon arrow for duplicate
// switch(name){
//     case "naincy": console.log("hello naincy");
//      break;
//     case "yash": console.log("hello yash");
//      break;
//     case "naveen": console.log("hello naveen");
//      break;
//     case "jyoti": console.log("hello mummy");
//      break;
//     case "dharmendra": console.log("hello papa");
//      break;
//     default:console.log("other family members");

// }
//+++++++++++++++++++++++++++++ truthy and falsey value +++++++++++++++++++++
// const name ="naincy";

// if(name){//isne automatic isko true naam liya
//     console.log(`hello ${name}`);
// }else{
//     console.log("no user are present");
// }
// const name ="";//isne emypt string ko automatic false maan liya hai

// if(name){//isne automatic isko true naam liya
//     console.log("hello user");
// }else{
//     console.log("no user are present");
// }
// const name =[];//isne emypt array  ko automatic ture maan liya hai

// if(name){//isne automatic isko true naam liya
//     console.log("hello user");
// }else{
//     console.log("no user are present");
// }
//falsy value: false, 0, -0, BigInt 0n , "",null , undefined, NaN 
//in sub ko falsy value mana jate hai
//inko chod kar badi sub to hai he truthy but kuch specil jo confused kar deti hai
//truth : "0",'false'," ",[],{},function() empty array , empty object or empty function bhi trythy value hai
// const emptyArray=[];
// if(emptyArray.length===0){
//     console.log("Array is empty");
// }
// const emptyObject = {}
// if(Object.keys(emptyObject).length===0){//ye method hoti hai jo object ki key nikalti hai
//     console.log("object is empty");
// }
// false==0//true;
// false=='';//true
// 0=='';//true