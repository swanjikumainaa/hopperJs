// creating an object
let person = {
    name:"Susan",
    age:25,
    height:"5ft3Inch",
    friend:{
        name:"Amanda",
        age:20
    }
}

let student = new Object();
student.name="Mary" //adding a property
console.log({student});
console.log(person.age)//log a value using dot notation
console.log(person["name"]);//log a value using bracket
console.log(person.height);
console.log(person.friend.name);
console.log(person["friend"]["name"]);

person.school="AkiraChix";//adding a new property to the objet
console.log(person.school);

person.age=19;//updating the value of a property
console.log(person.age);

let person2= Object.assign(person);//clonning a previous object
console.log({person2});

let keys=Object.keys(person);
console.log({keys});

let values = Object.values(person);
console.log({values});
