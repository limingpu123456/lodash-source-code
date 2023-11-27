//isObjectLike返回值是否是类对象
//就是用typeof操作符，如果返回值是object，并且值不为null，就认为是类对象
// Undefined	'undefined'
// Null	        'object'
// Boolean	    'boolean'
// Number	    'number'
// String	    'string'
// Symbol	    'symbol'
// 函数对象	     'function'
// 任意其它对象	  'object'
//上面是typeof的返回值，这里就需要注意，typeof null = 'object

function isObjectLike(value){
	return typeof value == 'object' && value != null
}

isObjectLike({});
// => true
 
isObjectLike([1, 2, 3]);
// => true
 
isObjectLike(null);
// => false




