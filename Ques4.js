const addUp = number =>{
    let sum=0;
    for(let i=1;i<=number;i++){
        sum+=i;
    }
    return sum;
}

console.log(addUp(4));
console.log(addUp(10));