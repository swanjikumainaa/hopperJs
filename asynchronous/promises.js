let success = true;
let promise = new Promise((resolve,reject)=>{
    if(success){
        resolve("I succeeded");
    }
    else{
        reject("I am still looking for a job");
    }
}).then(()=>{console.log("I will work hard")})
  .catch(()=>{console.log("Take more time to upskill")})
  .finally(()=>{console.log("I am Royalty")})

console.log({promise});