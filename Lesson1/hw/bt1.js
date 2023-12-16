const arr = [1, 3, 2, 5, 7, 4, 5, 9, 12, 18, 17]
function sum(){

    let tong=0; 
    for(var i=0; i<arr.length; i++){
        
        tong+=arr[i]; 
    }
    alert(tong);
}

function max(){
    // const max = Math.max(...arr)
    // alert(max)
    let max = arr[0];
    for(var i =1; i<arr.length;i++){
        if(arr[i]>max){
            max=arr[i]
        }
    }
alert(max)
}

 function min(){
    // const min = Math.min(...arr)
    // alert(min)
    let min = arr[0];
    for(var i =1; i<arr.length;i++){
        if(arr[i]<min){
            min=arr[i]
        }
    }
    alert(min)
 }

 function reverse(){
    const reverse = arr.reverse();
    alert(reverse)
 }
function same(){
let myArrayWithNoDuplicates = arr.reduce(function (accumulator, element) {
    if (accumulator.indexOf(element) === -1) {
      accumulator.push(element)
    }
    return accumulator
  }, [])
  
  console.log(myArrayWithNoDuplicates)
}

function chan(){
    const arr13 = arr.filter((item)=>{
        return item%2===0;
    })
    console.log(arr13);
}


