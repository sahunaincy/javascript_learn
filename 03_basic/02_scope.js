// if(true){
//     const username ="naincy"
//     if(username==="naincy"){
//         const website="youtube"
//         console.log(username+website);
//     }
//     console.log(website);
// }
// console.log(username);
//+++++++++++++++++++++++++++++++ intresting ++++++++++++++++++++
//console.log(addone(1));hum isko function kai phele likh sakte hai
// function addone(num){
//     return num+1
// }
//or
//console.log(addtwo(2 , 2)) hum isko function kai phele nhi likh sakhte
// const addtwo =function (num ,nums){
//     return num+2+nums;
// }
// console.log(addtwo(2 , 2))

//++++++++++++++arrow function ++++++++++++++++++++++++
//this current context ko refer karte hai
// const user={
//     username:"naincy sahu",
//     price:999,
//     welcomeMessage:function(username){
//         console.log(`${this.username} ,welcome to website`);
//     }
//     //console.log(welcomeMessage())Object ke andar sirf properties aur methods likhte hain.
// }
// console.log(user.welcomeMessage("rahul sharma"));//agr vaha this nhi hote to rahul sharma print hote
// //console.log(user);
// user.username="ram"
// user.welcomeMessage();

// function chai(){
//     let username ="hitesh"
//     console.log(this.username)//this obejct mehi kam kar raha function mai nhi karega
// }
// chai();
const chai = () =>{//ye hai arrow function
    let username="hitesh"
    console.log(this);
}
() => {}//arrow function syntax
const add = (num1,num2)=>{//explicit
    return num1+num2;
}
const add =(num1,num2)=>num1+num2;//inplicit 
console.log(add(1,2));
const add =(num1,num2)=>({username:"naincy"});//return object
console.log(add(1,2));