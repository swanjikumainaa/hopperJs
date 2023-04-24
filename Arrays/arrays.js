
let num = [24,true,"hello",38];
let num2 = new Array(24,true,"hello",38)


console.log(num);
console.log(num2);
num.push("fruits");
// adds elements at the end of the array
console.log(num);
num.unshift(3);
// adds at the start
console.log(num);
num.pop();
// removes at the end
console.log(num);
num.shift();
// removes at beggining
console.log(num);
num[3] = 3
console.log(num);

// given an array of numbers x return any array even where every item in x is multiplied by 5

//    steps ;-declare an array,loop through the array x,multiply every by 5,  and push items multiplied

// map returns an array 

let x = [5,8,2,87,3,67];
let even = x.map(function(item){
    return item*5
})

console.log(even)


// for each takes in a function but returns undefined

let result = x.forEach(function(item){
    return item*5
})


// wheen you console it inside you get a singular item each time

let result2 = x.forEach(function(item){
    return console.log(item*5)
})

// instesad you create an empty array
let result3 =[];
 x.forEach(function(item){
    // return.push(item*5)
})
console.log(result3);

// array concatenation
// using .concat
let newArray = num.concat(x);
console.log(newArray);

// using ...spread operator
let tests = ["Angela",...x];
console.log(tests);
// without the operator it'd just be a 2d array


// concatenation by destructuring
// we also use 
let [a,b,...c] =x;
console.log({a});
console.log({b});
console.log({c});


