const arr = [4,5,6]
const arr2 = [1,2,3]
const max  = Math.max(...arr)
console.log(max);
var arrClone = [...arr,7]
console.log(arrClone);

const concatArr = [...arr,0,...arr2]
console.log(concatArr);

const arr1 = [1,2,3]
const arr12 = arr1.map((item)=>{
    return item*2;
})
console.log(arr12);
console.log(arr1);

const arr3 = [1,2,3]
const arr13 = arr3.filter((item)=>{
    return item%2===0;
})
console.log(arr13);
console.log(arr3);