//indexOf 接收三个参数，第一个 array 为数组，第二个参数 value 为需要查找的值，
//第三个 fromIndex 参数和数组的 indexOf 方法一样，用来指定开始查找的位置。

function indexOf(array,value,fromIndex = 0){
    const length = array == null ? 0 : array.length
    if(!length){
        return  -1;
    }
    if(fromIndex < 0){
        fromIndex = array.length + fromIndex;
        if(fromIndex < 0 ){
            fromIndex = 0
        }
    }

    for(let i = fromIndex ; i < length ; i++){
        if(array[i] === value){
            return i;
        }
    }

    return -1;
}

console.log(indexOf([1, 2, 1, 2], 2)); // => 1
console.log(indexOf([1, 2, 1, 2], 2, 2)); // => 3