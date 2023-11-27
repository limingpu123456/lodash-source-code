//isLength用于判断所传入的值是否为数组或者类数组可用的length属性

const MAX_SAFE_INTEGER = 9007199254740991
function isLength(value){
	return typeof value == 'number' && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER
}
/*
typeof value == 'number' ，很明显，length 属性必须是 number 类型。

value > -1 ，正常的数组下标是从 0 开始的，因此可以用大于 -1 来判断。

value % 1 == 0 ，数组的下标必需是整数，这个可以与 1 取模来判断，这个条件和上一个条件合起来就是 length 必须为大于 -1 的整数。

value <= MAX_SAFE_INTEGER ，众所周知，js 所能表达的整数范围是有限的，length 是数字，也受这个限制，因此最后要判断其数值不能超过 js 所表达的最大正整数。

因此可以总结出来，是否为合法的数组 length 属性包含下面几个条件：
是数字
大于 -1
整数
数值在安全范围内
这几个条件的判断顺序也是经过精心安排的，越排在前面的，使用的频率越高，这样可以避免无效的判断。
 */

