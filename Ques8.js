
const removeDuplicates=(array)=> {
    let newArray = [];
    array.forEach(element=> {
        if (!newArray.includes(element)) {
            
            newArray.push(element);
        }
    })
    return newArray;
}

console.log(removeDuplicates([1,2,1,2,3,4]));
console.log(removeDuplicates(["cat","dog","lion","dog","lion","lioness"]));
