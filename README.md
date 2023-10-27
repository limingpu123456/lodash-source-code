# Lodash源码

## chunk

chunk函数可以将一个数组，切割成指定大小的块，返回由这些块组成的新数组
chunk函数在前端可以缓解一些性能问题。例如大量操作DOM的时候，可以分块让浏览器在空闲的时候处理，避免页面卡死。

## compact

compact函数用于去除数组中的假值，并返回由不为假值的元素组成的新数组
false,null,0,"",undefined,NaN都为假值

## drop

drop 的作用是在移除数组中前 n 个数的元素，并将剩余的元素返回。如果指定的个数比数组的长度大，返回的是空数组。

## dropRight

dropRight 的作用是在移除数组中后 n 个数的元素，并将剩余的元素返回。如果指定的个数比数组的长度大，返回的是空数组。

## isLength

isLength用于判断所传入的值是否为数组或者类数组可用的length属性

## isObjectList

isObjectLike返回值是否是类对象

## flattenDepth

用来展平数组，可以指定展平的深度。

## head

获取数组的第一项

## last

获取数组的最后一项

## indexOf

用于查找指定元素的下标，indexOf 接收三个参数，第一个 array 为数组，第二个参数 value 为需要查找的值，第三个 fromIndex 参数和数组的 indexOf 方法一样，用来指定开始查找的位置。

## concat

创建一个新数组，将array与任何数组 或 值连接在一起