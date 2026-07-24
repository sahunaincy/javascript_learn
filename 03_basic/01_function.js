//decelartaion
// function myname (){
//     console.log("naincy sahu");
// }
// myname //ye bs ak reference hai 
// myname();

// function add(a , b){//ye perameter ha
//     console.log(a+b);
// }
// //add(1,5);//ye agrument hai
// const res = add(1,5);
// console.log(res);//undefined kyu ki vo kuch return nhi kar raha hai
// function add(a , b){//ye perameter ha
//     return a+b;
// }
//add(1,5);//ye agrument hai
// const res = add(1,5);
// console.log(res);
// function login(username){
//     return `${username} just logged in`
// }
// console.log(login());//agr humne kuch bhi pass nhi kiya to undefined
// console.log(login(true));
// function login(username='naincy'){//agr username koi pass na kare to by default ye ho jaye 
//     return `${username} just logged in`
// }
// console.group(login());

// function calculateCartPrice(...num1){//rest operator
//     return num1;//return array
// }
// console.log(calculateCartPrice(200,400,1000,600));
// //who to pass object in function

// const obj ={
//     name :"naincy sahu",
//     email:"naincy@gmail.com"
// }
// function handleObject(obj){
//     console.log(`username is ${obj.name} and email is ${obj.email}`)
// }
// handleObject(obj);
const myNewArray=[100,200,300,400];
function returnArray(getArray){
    return getArray[3];
}
console.log(returnArray(myNewArray));