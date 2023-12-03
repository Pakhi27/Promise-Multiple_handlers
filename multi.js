let p1=new Promise((resolve,reject)=>{
    alert("Hey I am not resolved")
    setTimeout(()=>{
        resolve(1)
    },2000)
})
//Multiple Handlers
p1.then(()=>{
    console.log("Promise is resolved")
})
p1.then(()=>{
    console.log("Hurray")
    //promise Chaining
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(4)
        },3000)
    })
}).then((value)=>{
    console.log(value)
})