function divideArray(num){
    if(num.length<=1){
        return num;
    }

    let middle =Math.floor(num.length/2);
    let left = num.slice(0,middle);
    let right = num.slice(middle);
    return sortedArray(divideArray(left),divideArray(right));

}

function sortedArray(left,right){
    let emptyArray = [];
    while (left.length && right.length){
        if(left[0]<right[0]){
            emptyArray.push(left.shift());

        }
        else{
            emptyArray.push(right.shift());
 
        }
    }
    return[...emptyArray,...left,...right]
}



let num = [10,2,56,3,8,4,11]
console.log(divideArray(num));