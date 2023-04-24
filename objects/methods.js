let student ={
    name:"Ann",
    age:20,
    introduce:function(){
        console.log("Hello");
        console.log(`Hello my name is ${this.name}`);

    }

}
student.introduce();



student.hobby="Swimming"
console.log(student.hobby);

student.hobby=function(){
    console.log("I love Swimming");
}

console.log({student})
student.hobby()


