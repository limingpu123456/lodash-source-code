function findLastIndex(array,predicate,fromIndex = array.length - 1){
    if(!Array.isArray(array)){
        throw new Error('The first argument must be an array.')
    }
    if(typeof predicate === 'function'){
        for(let i = fromIndex ; i >= 0 ; i--){
            if(predicate(array[i])){
                return i;
            }
        }
    }else if(typeof predicate === 'object'){
        for(let i = fromIndex ; i >= 0 ; i--){
            const item = array[i]
            if(matchesPredicate(item,predicate)){
                return i;   
            }
        }
    }else if(typeof predicate === 'string'){
        for(let i = fromIndex ; i >= 0 ; i--){
            if(array[i][predicate]){
                return i
            }
        }
    }
    return -1;
}

function matchesPredicate(item,predicate){

    if(typeof predicate === 'object'){
        if(Object.keys(item).length !== Object.keys(predicate).length){
            return false;
        }
        for(const key in predicate){
            //这个检查确保只比较predicate对象自身的属性，
            //而不包括从原型链继承的属性。这是因为for...in循环会遍历对象及其原型链上的所有可枚举属性。
            if(!predicate.hasOwnProperty(key) || item[key] !== predicate[key]){
                return false;
            }
        }
        return true;
    }
    return false;
}

var users = [
    { 'user': 'barney',  'active': true },
    { 'user': 'fred',    'active': false },
    { 'user': 'pebbles', 'active': false }
  ];

console.log(findLastIndex(users, function(o) { return o.user == 'pebbles'; }));// => 2
console.log(findLastIndex(users, { 'user': 'barney', 'active': true }));// => 0
console.log(findLastIndex(users, 'active'));// => 0