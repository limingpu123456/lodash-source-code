# Lodash源码
中文文档：https://www.lodashjs.com/docs/lodash.chunk

# 数组

## chunk

chunk函数可以将一个数组，切割成指定大小的块，返回由这些块组成的新数组
chunk函数在前端可以缓解一些性能问题。例如大量操作DOM的时候，可以分块让浏览器在空闲的时候处理，避免页面卡死。

## compact

compact函数用于去除数组中的假值，并返回由不为假值的元素组成的新数组
false,null,0,"",undefined,NaN都为假值

## concat

创建一个新数组，将array与任何数组 或 值连接在一起

## difference

difference方法，返回一个新数组，接受两个参数，创建一个array值的数组，每个值不包含在其给定的数组中

## differenceBy
这个方法类似_.difference ，除了它接受一个 iteratee （注：迭代器）， 调用array 和 values 中的每个元素以产生比较的标准。 结果值是从第一数组中选择。
注意: 这个方法会返回一个新数组。

## differenceWith

这个方法类似difference ，除了它接受一个 comparator （注：比较器），它调用比较array，values中的元素。 结果值是从第一数组中选择。comparator 调用参数有两个：(arrVal, othVal)。

## drop

drop 的作用是在移除数组中前 n 个数的元素，并将剩余的元素返回。如果指定的个数比数组的长度大，返回的是空数组。

## dropRight

dropRight 的作用是在移除数组中后 n 个数的元素，并将剩余的元素返回。如果指定的个数比数组的长度大，返回的是空数组。

## dropRightWhile(结尾丢失元素)

从数组的后面开始进行判断，如果返回true就丢掉元素，直到返回false结束，返回剩下的元素。

## dropWhile(开头丢失元素)

从数组的前面开始进行判断，如果返回true就丢掉元素，直到返回false结束，返回剩下的元素。

## fill

fill使用 value 值来填充（替换） array，从start位置开始, 到end位置结束（但不包含end位置）。

## findIndex

该方法类似_.find，区别是该方法返回第一个通过 predicate 判断为真值的元素的索引值（index），而不是元素本身。

## findLastIndex

这个方式类似_.findIndex， 区别是它是从右到左的迭代集合array中的元素。

## flattenDepth

用来展平数组，可以指定展平的深度。

## head

获取数组的第一项

## indexOf

用于查找指定元素的下标，indexOf 接收三个参数，第一个 array 为数组，第二个参数 value 为需要查找的值，第三个 fromIndex 参数和数组的 indexOf 方法一样，用来指定开始查找的位置。

## isLength

isLength用于判断所传入的值是否为数组或者类数组可用的length属性

## isObjectList

isObjectLike返回值是否是类对象

## last

获取数组的最后一项


>>>>>>> droprightwhile fix
