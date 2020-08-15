const charCount = (a,b) =>{

    let count=0;
    for(let i=0;i<b.length;i++){
        if(b.charAt(i)===a){
            count+=1;
        }

    }
    return count;

}
console.log(charCount('a',"abcabcaa"));
console.log(charCount('b',"aBbcdsvb"));