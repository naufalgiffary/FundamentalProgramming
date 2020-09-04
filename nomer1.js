function allEqual(arr){
    let k = arr [0];
    for (let i = 0 ; i < arr.length ; i++) {
        while(k!==arr[i]){
            return false;
        }
    }
    return true;
}

console.log(allEqual([1, 2, 3, 4, 5, 6]))
console.log(allEqual([12, 12, 12, 12]))
console.log(allEqual([2]))