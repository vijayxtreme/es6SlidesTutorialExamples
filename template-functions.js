let parseTemplate = (text, variable1, variable2) => {
    console.log(text);
    console.log(variable1);
    console.log(variable2);
    return variable2;
}
  
  let item1 = "Laundry"
  let item2 = function(){ return "Groceries" }
  
  let result = parseTemplate`I have to do my ${item1} and ${item2}`
 
  //console.log(result)
  console.log(`Finished with ${result()}`)
  