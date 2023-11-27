//concat  创建一个新数组，将array与任何数组 或 值连接在一起

function concat(array, ...values) {
    const result = array.slice();
    for(const value of values){
        if(Array.isArray(value)){
            result.push(...value);
        }else{
            result.push(value);
        }
    }    
    return result;
}

var array = [1];
var other = concat(array, 2, [3], [[4]]);

console.log(other);
// => [1, 2, 3, [4]]
 
console.log(array);
// => [1]