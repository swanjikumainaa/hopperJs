let success = true;
let promise = new Promise((resolve,reject)=>{
    if(success){
        setTimeout(()=>{resolve("I succeeded")},5000)
        
    }
    else{
        setTimeout(()=>{reject("I am still looking for a job")},5000)
        
        
    }
// }).then(()=>{console.log("I will work hard")})
//   .catch(()=>{console.log("Take more time to upskill")})
//   .finally(()=>{console.log("I am Royalty")});

const student= async=>{
    let result = await promise;
    console.log({result});
}
student();