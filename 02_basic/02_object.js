//object decelaration
//agr hum constructor se banate hai to vo singleton hote hai object.create
//object literals ye second type hai object ko decelared karne ka 

const mysym1 = Symbol('key1');//symbol decelartion
//symbol ko humko object  ki key mai add karne hai
const mysym2 = Symbol("key2");
const JsUser = {  // ye object bana gaye 
    name : "naincy sahu",
    "full name":"naincy sahu",//isko hum doubt . se access kar he nhi sakhte 
    // mysym1 : 'key1',//symbal ko hum ase add nhi kar sakhte 
    [mysym2]:"key2",//ye symbol hai []isme likha pr symbol varne string
    age:21,
    location:"indore",
    email:"naincy@gmail.com",
    isLoggedIn:false,
    lastLoginDays:["monday","thusday","friday"]//array bhi de sakhte hai
}

//how to access object 1-> JsUser.email, 2->JsUser["eimal"];

// console.log(typeof JsUser.age);//doubt wala tarika sahi hai but durse jada sahi hai
// console.log(typeof JsUser.isLoggedIn);
// console.log(typeof JsUser["full name"]);
// console.log(typeof JsUser['age']);//ye second option mai hum string likhe ye number sub " "mehi likhne higa 
//console.log(typeof JsUser.mysym);//ye string dege na ki symbol
// console.log( JsUser[mysym2]);//undefined
// console.log(typeof JsUser[mysym2]);//"mysym2" ❌ aur .mysym2 ❌
// JsUser.email="naincy.sahu@gmail.com"//change value 
// console.log(JsUser)
// Object.freeze(JsUser)//means ab hum kuch bhi change nhi kar sakhte

// JsUser.email="naincy.sahu@gmail.com"//change value 
// console.log(JsUser)

// JsUser.greeting = function(){//function,method
//     console.log("hello js user");
// }

// JsUser.greeting2 = function(){
//     console.log(`hello JS user ${this.name} and your email is ${this.email}`);
// }

// console.log(JsUser.greeting());
// //console.log(JsUser["greeting"]());
// console.log(JsUser['greeting2']());

//+++++++++++++++++++++++++++++++++++++++++++++object detail+++++++++++++++++++++++++++++++

// const tinderUser = new Object();//ye singletone object hai
// const tinderuser = {};//ye non singletone 
// // console.log(tinderUser);
// // console.log(tinderuser);
// tinderUser.name='naincy sahu';
// tinderUser.email ="radharani@gmail.com"
// console.log(tinderUser);

// const regularUser={//nexting
//     email:"radhe@gmail.com",
//     fullname:{
//       userfullname:{
//         firstname:"naincy",
//         lastname:"sahu"
//       }
//     }

// }
// console.log(regularUser);
// console.log(regularUser.fullname);
// console.log(regularUser.fullname.userfullname);

//combine object
// const obj1={1:"a",2:"b"};
// const obj2={3:"c",4:"d"};

// const obj3={obj1,obj2};//ye object kai andr object bana dege na ki dono ko merge kkarega 
// console.log(obj3);
//const obj3=Object.assign({},obj1,obj2)//{}      → target / naya empty object obj1    → source object obj2    → source object
// const obj3 ={...obj1, ...obj2};//spread operator
// console.log(obj3);
// const tinderUser = {
//     name : "naincy sahu",
//     email :"sahu@gmail.com",
//     address :"26 jabran colony"
// }
// console.log(Object.keys(tinderUser))//ye humko keys return karega array kai form mai
// console.log(Object.values(tinderUser))
// console.log(Object.entries(tinderUser))//ye array mai key value kai array store kar dte hai[[ 'name', 'naincy sahu' ],[ 'email', 'sahu@gmail.com' ],[ 'address', '26 jabran colony' ]]
// console.log(tinderUser.hasOwnProperty("email"))//ye batayge ki ye elemet hai ki nhi hamre pass

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//object ko destructor karne 
const course = {
    course_name:"learn_javascript",
    course_fees:"free",
    courseInstructor:"hitesh"
}
console.log(course.courseInstructor);

// const {courseInstructor} = course;
// console.log(courseInstructor)//no need to write couse.courseInstructor 

 const {courseInstructor :IN} = course;//hum isko or chota kar sakte hai
console.log(IN)
{//object without body is called json ,json mai object ka naam bhi " "mai aate hai
    "name":"hitesh",
    "course":"js in hindi",
    "price" :"free"
}
[
    {},
    {},
    {}
]



