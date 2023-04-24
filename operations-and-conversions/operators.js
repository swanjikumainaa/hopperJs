const num = 10;
const num2 = 30;


console.log(num+num2);
console.log(num-num2);
console.log(num*num2);
console.log(num%num2);
console.log(num/num2);

let a = 4;
a++;
console.log(a);
a--;
console.log(a);
let x=5;
x+=1;
console.log(x);
// +== is a shortform for x =x+1


console.log(num>=num2);



let age = 10;
let age2 ="10";

// losely equalto checks the value but not the type
console.log("losely equal",age==age2);
console.log("losely not equal",age!=age2);

// strictly and strictly not equal to
console.log("strictly equal",age===age2);
console.log("strictly not equal",age!==age2);

// Logical
// and
if(age==age2 && num>=num2){
    console.log("and",true);
}
else{
    console.log("and false",false);
}

// logical or  

if(age==age2 && num>=num2){
    console.log("and",true);
}
else{
    console.log("",false);
}







