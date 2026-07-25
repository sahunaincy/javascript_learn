//for
// f
// for (let i = 1; i <= 4; i++) {
//     let pattern = "";

//     for (let j = 1; j <= i; j++) {
//         pattern = pattern + j;//for single line
//     }

//     console.log(pattern);
// }
// for(let i = 1 ; i<=10 ; i++){
//     console.log("table of "+i);
//     for(let j = 1; j<=10;j++){
//         console.log(`${i} * ${j} = ${i*j}`);
//     }
// }
//break and continue
//++++++++++++++++++++++++++while and do while+++++++++++++++++++++
//let i = 0 ;
// while(i<=10){
//     console.log(i);
//     i=i+3;
// }
// let i = 11
// do{
//     console.log(i);//first 11 is print than loop are terminate
//     i++
// }while(i<=10)
 //+++++++++++++++++++++++++++++++++++FOR OF+++++++++++++++

// const arr=[1,2,3,4,5]
// for(const i of arr){//ye hai for of isme koi jarurt nhi hai staring index or increment karne ki
//     console.log(i);
// }
//  

//++++++++++++++++++++++++++++ map +++++++++++++++++++++++++++
//the map object holds key value pair and remenberes the original insertion order of key
const map = new Map();    // Map(3) {
//                                   'IN' => 'india',
//                                   'USA' => 'united states of America',
//                                   'fr' => 'France'
//                                   }
map.set('IN',"india");
map.set('USA',"united states of America");
map.set('fr',"France");
// console.log(map)
//map iterator 
// for(const i of map){//isme pure map array mai aa ajyge
//     console.log(i);
// }
// for(const [key,value] of map){//hum key value alg alg access kar sakhte hai
//     console.log(key , ':-', value);
// }
// const myobj ={//object iteratable nhi hai is method se
//     'game1':"subaysufar",
//     'game2':"templerun"

// }
// for(const [key,value] of myobj){//hum key value alg alg access kar sakhte hai
//     console.log(key , ':-', value);
// }
//object kai liya forn in loop
//  for(const i in myobj){
//      console.log(i);//ye key print karega
//        console.log(myobj[i]);//ye value bhi de dega
// }
// // const myarr=["cat","dog","goat"];
// for(const i in myarr){
//     console.log(i);//ye index print karayega
// }
//++++++++++++++++++++++++++++++ FOR EACH LOOP +++++++++++++++++++
    const coding=['c','c++','java','javascript'];

    // coding.forEach(function(val){ //function
    //     console.log(val);
    // })
    // //or
    // coding.forEach((item)=>{//arrow function
    //   console.log(item);
    // })
    // function printme(item){
    //     console.log(item);
    // }
    // coding.forEach(printme);//as a referel pass karge na ki function call karega
//  coding.forEach((item,index,arr)=>{
//      console.log(item,index,arr)
//  })   
//array mai multiple object
// const myCoding =[
//     {
//         languageName:"javascript",
//         languageFileName:"js"
//     },
//     {
//         languageName:"java",
//         languageFileName:"java"
//     },
//     {
//         languageName:"c++",
//         languageFileName:"cpp"
//     }
// ]
// myCoding.forEach((item)=>{
//     console.log(item.languageName)
//     console.log(item.languageFileName)
// })

// const value = myCoding.forEach((item)=>{//ye kuch value return nhi karte 
//     console.log(item)
//     return item
// })
//console.log(value)
const mynum =[1,2,3,4,5,6,7,8,9,10]
// const newNum=mynum.filter((num)=> num>4)//foreach loop kuch return nhi kar raha tha is liya hum filter ka used karege
// console.log(newNum);
// const newNum=mynum.filter((num)=> {
//     num>4//agr mai asa likhugi to ye [] return kaega 
// })
//console.log(newNum);
// const newNum=mynum.filter((num)=> {
//     return num>4//to humko return karne padega 
// })
// console.log(newNum);
const newNums=[]
mynum.forEach((num)=>{
    if(num>4){
        newNums.push(num)
    }
})
console.log(newNums);