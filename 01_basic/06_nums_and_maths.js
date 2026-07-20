// const nums = 100;
// const str = "naincy"
// console.log(nums);
// console.log(str);

// const number = new Number(100);//they special specify the string or the number
// const string = new String("naincy");
// console.log(number);
// console.log(string);
// console.log(number.toString().length)//ye convert kar degi number ko string mai
// console.log(number.toFixed(2));//ye decimal kai baad ki digit fix karega
 
// const otherNumber = 123.567;
// console.log(otherNumber.toPrecision(4))//ye value to rounf off karega 0 index se jase mene 3 diys to vo starting kai 3 digit ko roundoff karega na ki decimal kai baad 
//  const hundreds = 1000000;
//  console.log(hundreds.toLocaleString("en-IN"));//ye by defaul us se answer dega

 //+========================MATH=====================================

//  console.log(Math);//object
//  console.log(Math.abs(-3))//convert negative to postion but vise varse is not allow
//  console.log(Math.round(7.4));
//  console.log(Math.round(7.5));
//  console.log(Math.round(7.6));
//  console.log(Math.ceil(4.02));//ceil math height he dege thoda bhi jada ho to bhi
//  console.log(Math.floor(4.9))//ceil ka reverse
//  console.log(Math.sqrt(625));//ye batate hai ye kisi ka square hai
//  console.log(Math.pow(2,6));//ye 2^6 calculate kar diya hai
//  console.log(Math.min(1,2,3,4));
//  console.log(Math.max(1,2,3,4));

// console.log(Math.random())//ka use random (randomly generated) number paane ke liye karte hain, jo 0 se 1 ke beech hota hai.
// console.log(Math.floor((Math.random()*10)+1));//humko zero se badi value chaiye is liya 10* kiya usse ak value shift ho jaygi but +1 is liya kiya ki kabhi multiply karne pr bhi 0 aa gaye to 
// //us nnumber ko round off kar kai choti value dete hai floor 

const min = 10 ;
const max = 20 ;

console.log(Math.floor(Math.random()*(max-min+1)+min));

 