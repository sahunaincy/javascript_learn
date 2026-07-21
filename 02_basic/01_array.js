//In javascript array are resizable and contain a mix of different data type
//declaration of array

//  const arr1=[1,2,3,4];
//  const arr2=new Array(10,20,30,40);
// console.log(arr2);
// console.log(arr1.length);

//method in array
// console.log(arr1.push(6,7,5,5));//ye new array ki length return kar raha hai give possion
// console.log(arr1);
// console.log(arr1.pop());//remove last index element no need to give argument
// console.log(arr1);
// arr1.unshift(9);//ye first mai value add karega 
// console.log(arr1);
// arr1.shift();//remove first element 
// console.log(arr1);
// console.log(arr1.includes(9));//return ture and false it value are present in array
// console.log(arr1.indexOf(2));//give -1 if value are not presnt in array

// const newArr = arr1.join();//array ko string mai convet kar dete hai
// console.log(newArr);
// console.log(typeof newArr)
// console.log(arr1);

//slice
// const myarray = new Array(100,200,300,400,500,600);
// console.log(myarray.slice(1,3));//ye utne slice lakar de dege or last wale index ko include nhi karga
// console.log(myarray);

// console.log(myarray.splice(1,3));
// console.log(myarray);//ye array ko he manupulated kar dege matlab utne array he alg kar dege 
 const fruit =["apple","banana","graphs","orange"];
 const veg =["carrat","tamato","onion","ginger"];
//  console.log(fruit.push(veg));
//  console.log(fruit);//ye veg ko array ka ak element maan raha means array kai andr array
//  console.log(fruit[4]);
//  console.log(fruit[4][3]);

// let res = fruit.concat(veg);//ye ak new array dege jisme sub element hai
// console.log(res);//isne properly dono array ko merge kiya na ki element add kiya 

// let res = [...fruit,...veg];//ye bhi concate kar dete hai or isko he jada used karte hai
// console.log(res);//ye hai spread operator

// const arrInarr=[1,2,3,4,[1,2,[5,3,6,34],3],6,7,10];
// console.log(arrInarr.flat(Infinity));//yaha humko number dene hota hai ki humko kaha tak array kai andr aray solve karne hai 
// //flat sub array ko ak single array dete hai
// console.log(Array.isArray("naincy"))//ye puchega asa koi array hai kay
// console.log(Array.from("naincy"));//ye isko array mai convet kar dege
// console.log(Array.from({name:"naincy"}));//agr ye convert nhi kar pata to empty string dete hai

//variable to array 
let score1=100;
let score2=200;
let score3=300;
let name ="naincy";
let age="21";
console.log(Array.of(score1,score2,score3,name,age));//create array








