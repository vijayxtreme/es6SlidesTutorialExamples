let p = new Promise((resolve, reject) => {
  
    setTimeout(() => {
      let rand = Math.floor((Math.random()*10),1), 
      x = false
      
      x = (rand % 2 == 0) ?  true : x
      console.log(rand)
       
      x ? resolve(rand) : reject(rand)
  
    }, 1000) 
  })
  
  p.then((result) => {
    console.log(`Life's great, ${result}`)
  })
  .catch(e => console.log(e, `You can't always get what you want`))
  