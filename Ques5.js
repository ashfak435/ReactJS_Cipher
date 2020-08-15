
function replaceVowel(string) {

    //var changed = "";
    var result = ['a','e','i','o','u'];
    for (var i = 0; i < string.length; i++) {
        if (isVowel(string[i])) {
            string =string.replace(string[i], result.indexOf(string[i],0)+1);
        }
      }
      return string;
  }
  
  function isVowel(char) {
    return 'aeiou'.includes(char);
  }
  
  console.log(replaceVowel('Hello World!'));
  console.log(replaceVowel("chembur"));