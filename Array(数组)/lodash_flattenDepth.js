//flattenDepth 用来展平数组，可以指定展平的深度。
//@param {Array} array : 需要展平的数组
//@param {Number} depth: 展平的深度

function flattenDepth(array,depth) {
	if(depth <= 0){
		return array.slice()
	}
	let result = [];
	for(const value of array){
		if(Array.isArray(value)){
			result.push(...flattenDepth(value,depth-1))
		}else{
			result.push(value);
		}
	}
	return result
}

var array = [1, [2, [3, [4]], 5]];

flattenDepth(array, 1);
// => [1, 2, [3, [4]], 5]
 
flattenDepth(array, 2);
// => [1, 2, 3, [4], 5]