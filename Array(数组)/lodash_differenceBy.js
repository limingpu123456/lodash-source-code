//第三个参数是迭代器
function differenceBy(array,values,iteratee){
    if(!Array.isArray(array) || !Array.isArray(values)){
        throw new Error('Expected arrays for both the array and values arguments')
    }
    if(typeof iteratee === 'string'){
        const key = iteratee;
        iteratee = (obj) => obj[key]
    }else if(typeof iteratee !== 'function'){
        iteratee = (obj) => obj
    }

    const set = new Set(values.map(item => {return iteratee(item)}))
    return array.filter((arr) => !set.has(iteratee(arr)))
}

differenceBy([3.1, 2.2, 1.3], [4.4, 2.5], Math.floor);
// => [3.1, 1.3]
 
differenceBy([{ 'x': 2 }, { 'x': 1 }], [{ 'x': 1 }], 'x');
// => [{ 'x': 2 }]