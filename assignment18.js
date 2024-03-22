// QUSTION 1.


function checkAddElement(arr,elem){

    if(arr.includes(elem)){
        return 'element is already available in the given array'
    }
    else {
        arr.unshift(elem)
        return arr
    }
}

console.log(checkAddElement([1,2,3,4],6))
console.log(checkAddElement([1,2,3,4,5],1))



// QUSTION 2.


function CancArr(arr1,arr2){

   let NewArr = arr1.concat(arr2)
   return NewArr

}
let res = CancArr(['hello','ji','javascript'],['I','am','Amazing'])
 console.log(res);

 for(let str of res){
    if(str.length == 5){
        console.log(str);
    }
 }


// QUSTION 3.


function ArrayMethod(arr){

    arr = arr.slice(2,5)

    arr.splice(1,0,'hello')

    return arr

}
 console.log(ArrayMethod([1,2,3,4,5,6,7,]))


