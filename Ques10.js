const isValid = element =>{

    for(var i=0;i<element.length;i++){
        if(element.charCodeAt(i)>=48&&element.charCodeAt(0)<=57){
            return true;
        }
    }
    return false;
}

const numInStr = inputarray =>{
    const array=[];
    inputarray.forEach(element => {
        if(isValid(element)){
            console.log(element);
            array.push(element);
        }
    });
    return array;
}

console.log(numInStr(["1a","12b", "avac","abc"]));