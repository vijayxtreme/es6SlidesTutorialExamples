function promiseMeYoullWait() {
    return new Promise((resolve, reject) => {
        let x;
        if(x == true){
            setTimeout(() => {
                resolve(`You waited!`)
            }, 4000)
        }else {
            return reject(new Error(`Sorry x wasn't true`))
        }
    })
}

//Start here when you read this code...
async function myAsync() {
    let result;
    try {
       result = await promiseMeYoullWait()
       console.log(result)
    }catch (e) {
       console.log(e)
    }
    //Do something else
}
myAsync(); //You waited!