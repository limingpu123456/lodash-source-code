//chunk函数可以将一个数组，切割成指定大小的块，返回由这些块组成的新数组
//chunk函数在前端可以缓解一些性能问题。例如大量操作DOM的时候，可以分块让浏览器在空闲的时候处理，避免页面卡死。

function chunk(array,size){
	size = Math.max(size,0)
	const length = array == null ? 0 : array.length
	if(!length || size < 1){
		return []
	}

	let index = 0 ;
	let resIndex = 0;
	const result = new Array(Math.ceil(length / size))
	while(index < length){
		result[resIndex++] = array.slice(index,(index += size))
	}
	return result
}

console.log(chunk(['a', 'b', 'c', 'd'], 2));
// => [['a', 'b'], ['c', 'd']]
 
console.log(chunk(['a', 'b', 'c', 'd'], 3));
// => [['a', 'b', 'c'], ['d']]