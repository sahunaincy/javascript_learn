//mainly datatype has two type 1 primitive , 2 non primitive
//primitive : (call by value) means ye original data ki jagha copy bhejte hai 
// 7 type : string , number , boolean , null , undefined , symbol , bigInt

//javascript are dinamically type language ya stataic type language ??

//reference(non primitive)= means ye original data bhejte hai
//type -> array , functaion , objects

//symbol ak unique ID/label banane ke liya use hote hai.har baar symbol() likhne par ak alag unique value banti hai 
 
// let FirstId = Symbol("123");
// let SecondId= Symbol("123");

// console.log(FirstId==SecondId);

const family =["dharmendra","jyoti","naincy","yash","naveen"];//array
let myObj = {
    name:"naincy",
    age:22
}
const myfunction = function(){
    console.log("hello world");
}
console.log(typeof family);//object
console.log(typeof myObj);//object
console.log(typeof myfunction);//function

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//stack(primitive)(ye copy dege ),heap(non-primitive)(original data mai change hoga)
let myname="naincy";
let anothername=myname;
anothername="sweetu"
console.log(myname);
console.log(anothername);

let userone = {
      email :"user@gmail.com",
      upi :"user@bei"
}
let usertwo=userone;
usertwo.email="naincy@gmail.com";
console.log(userone);
console.log(usertwo);