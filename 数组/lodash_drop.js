//drop 的作用是在移除数组中前 n 个数的元素，并将剩余的元素返回。如果指定的个数比数组的长度大，返回的是空数组。

function drop(array,n=1){
	const length = array == null ? 0 : array.length;
	return length ? array.slice(n < 0 ? 0 : n) : []
}

drop([1, 2, 3]);
// => [2, 3]
 
drop([1, 2, 3], 2);
// => [3]
 
drop([1, 2, 3], 5);
// => []
 
drop([1, 2, 3], 0);
// => [1, 2, 3]