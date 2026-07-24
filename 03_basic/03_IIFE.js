//Immediately Invoked Function Expression(IIFE)
//()()first block decalaration second block function exection
(function chai(){//named IIFE kyu ki ye function ka naam hai
    console.log("naincy sahu")
})();//for fast execution used for removed gloabl scope pollution
//used as arrow function isme muje last mai ; lagne chaiye
(() => {//ye ak arrow function hai,ye normal IIFE hai
    console.log("hello nano")
})();
((name) => {
    console.log(name)
})("sweetu");




