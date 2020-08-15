function realType(obj) {
    return {}.toString.call(obj).split(' ')[1].slice(0, -1).toLowerCase();
  }

console.log(realType([])); 
console.log(realType(1)); 
console.log(realType('1ad')); 
console.log(realType(true)); 

