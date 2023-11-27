//last函数 获取数组的最后一项

function last(array){
	return (array != null && array.length)
	? array[array.length - 1]
	: undefined
}

last([1, 2, 3]);
// => 3