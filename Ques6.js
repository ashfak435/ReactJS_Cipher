const reverseWords = (str, c) => {
    var result = "";
    var wordArray = str.split(" ");
    for (var i = 0; i <= wordArray.length - 1; i++) {
        let temp=wordArray[i];       
        let  temp1 = "";
        if (temp[0] === c) {
            for (let j = temp.length- 1; j >= 0; j--) {
                temp1 += temp[j];
            }
            result += temp1+" ";
        } else {
            result += wordArray[i] + " ";
        }

    }
    return result.trim();
}

console.log(reverseWords("word searches are super fun",'s'));