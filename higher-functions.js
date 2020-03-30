let sum = (x,y) => x+y
//console.log(sum(1,2))

let arr = [1,2,3,4,5,6,7,8,9,10];
let forEach = (arr, cb) => {
    for(let i=0; i<arr.length; i++){
        cb(arr[i])
    }
}
arr.forEach()

let add = arr => {
    let total = 0;
    forEach(arr, (item)=>{
        total += item
    })
    return total
}

console.log(add(arr))


_.each = _.forEach = function(obj, iteratee, context) {
    iteratee = optimizeCb(iteratee, context);
    var i, length;
    if (isArrayLike(obj)) {
      for (i = 0, length = obj.length; i < length; i++) {
        iteratee(obj[i], i, obj);
      }
    } else {
      var keys = _.keys(obj);
      for (i = 0, length = keys.length; i < length; i++) {
        iteratee(obj[keys[i]], keys[i], obj);
      }
    }
    return obj;
  };