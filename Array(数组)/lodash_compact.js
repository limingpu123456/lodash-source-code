//compact函数用于去除数组中的假值，并返回由不为假值的元素组成的新数组
//false,null,0,"",undefined,NaN都为假值


function compact(array){
	let result = [];
	let index = 0;
	if(array == null){
		return result;
	}

	for(let i=0; i<array.length; i++){
		if(array[i]){
			result[index++] = array[i];
		}
	}
	return result;
}

var arr = [1,false,2,null,3,0,4,NaN,5,undefined]
compact(arr) // 返回 [1，2，3，4，5]