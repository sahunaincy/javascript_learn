let score = 'naincy';
console.log(typeof score);
console.log(typeof(score));//ye method hai dono tarika sahi hai;

let valueInNumber=Number(score);//type casting kai liya capital mai likhna hai first letter
console.log(typeof valueInNumber);
console.log(valueInNumber);//give output nan means not a number
let value =Number(null);//they give 0 as a output
console.log(value);
let values = true // it return 0 in case og false and 1 in case of true
//visevarsa
let isLoggedIn="naincy";//agr ye empty string hai to answer false aayge 
let booleanIsLoggedIn=Boolean(isLoggedIn);
console.log(booleanIsLoggedIn);
//1 -> true , 0 ->false , ""->false, "naincy"->true
//operations 
onsole.log(2+2);
console.log(2-2);
console.log(2*2);
console.log(2/2);
console.log(2**2)//2 ki power 2
console.log(2**3);//2 ki power 3
console.log(2^2); //bitwise xor
console.log("1"+2+2)//122
console.log(1+2+"2")//32
console.log(+true)//1
console.log(+"")//0