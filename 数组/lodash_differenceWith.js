function differenceWith(array,values,comparator){
    const result = []

    for(let i = 0 ; i < array.length ; i++){
      let isFount = false;
      for(let j = 0 ; j < values.length ;j++){
        if(comparator(array[i],values[j])){
          isFount = true;
          break;
        }
      }
      if(!isFount){
        result.push(array[i])
      }
    }
    return result
}

function isEqual(a,b){
    const keysA = Object.keys(a);
    const keysB = Object.keys(b);
    if(keysA.length !== keysB.length){
      return false;
    }
    for(let key of keysA){
      const valA = a[key];
      const valB = b[key];

      if(valA !== valB){
        return false
      }
    }
    return true;
}

var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }];

differenceWith(objects, [{ 'x': 1, 'y': 2 }], isEqual);
// => [{ 'x': 2, 'y': 1 }]
