function findIndex(array,predicate,fromIndex = 0){
    if(!Array.isArray(array)){
        throw new Error('The first argument must be an array.')
    }
    if(typeof predicate === 'function'){
     for (let i = fromIndex; i < array.length; i++) {
        if (predicate(array[i])) {
          return i;
        }
      }
    }else if(typeof predicate === 'object'){
        for(let i = fromIndex; i < array.length; i++) {
            const item = array[i];
            if(matchesPredicate(item,predicate)){
                return i;
            }
        }
    }else if(typeof predicate === 'string'){
        for(let i = fromIndex; i < array.length; i++) {
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
            if(predicate.hasOwnProperty(key) && item[key] !== predicate[key]){
                return false
            }
        }
        return true;
    }
    return false;
}

var users = [
    { 'user': 'barney',  'active': false },
    { 'user': 'fred',    'active': false },
    { 'user': 'pebbles', 'active': true }
  ];
  
  console.log(findIndex(users, function(o) { return o.user == 'barney'; })); // 0
  console.log(findIndex(users, { 'user': 'fred', 'active': false })); // 1
  console.log(findIndex(users, 'active')); // 2
