
const valid = (a,b)=>{
    
    if(a.length!=b.length)
        return false;

    for(let i=0;i<a.length;i++){
        if(a.charAt(i)!=b.charAt(i)){
            return false;
        }
    }
    return true;    
}

const check = array =>{

    let first = array[0];
    
    for( let i=1;i<array.length;i++){
        
        if(!valid(array[i],first)){
            return false;
        }
    }
    return true;


}

console.log(check(["abc","abc","abc" ,"abc"]));
console.log(check(["ac","abc","a" ,"abc"]));