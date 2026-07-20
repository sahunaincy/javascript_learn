// const name ="naincy";
// const repo=3;

// console.log(name+ repo+" anything");//this line replace with next line
// console.log(`hello my name is ${name} and my repo count is ${repo} `);//we reserved a some space
const str = new String("This is a String Method");
// console.log(str.slice(-11));//11 is not icluded agr mai isme negative dugi to ye last se value priint karega
// console.log(str.substring(-11));//substring or slice mai yehi difference hote hai ki slice mai vo negative idex ko string ke end se count karta hai jabki substring mai negative index ko 0 maan lete hai 
//console.log(str.substr(3,11));//strating index , number of characters
//console.log(str.replace("a","an"));//ak letter ko replace kar kai terminate ho jayge
//console.log(str.replaceAll("a",'is'))
// console.log(str.toUpperCase()) convert to upper case 
// console.log(str.toLowerCase()) convert to lower case
//console.log(str.concat(" i love you")) merge a string at the end of the sentense
///console.log(str.trim());trim() sirf string ke starting aur ending ke extra spaces remove karta hai, beech ke multiple spaces nahi.
// console.log(str.padStart(29,"0"))//ye starting mai aad karge jab tak meri string ki length given length kai equal na ho jaye 
// console.log(str.padEnd("29",0))

// const splitLearn = new String('stands-for-GeeksForGeeks')
// console.log(splitLearn.split("-"));//splits the string into an array of sub-strings. This method returns an array. This method accepts a single parameter character on which you want to split the string.
// console.log(str.slice(0,9))//give starting index and ending index
 

console.log(str.repeat(2));//isme hum count dege ki kitni bar ye repeat hogi
const name = "naincy-sahu-ji";
console.log(name.split("-")); //ye convert kar kai array dege
console.log(name.blink());