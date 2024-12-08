// Given 2 arrays, create a function that let's a user know (true/false) whether these two arrays contain any common items
//For Example:
//const array1 = ['a', 'b', 'c', 'x'];//const array2 = ['z', 'y', 'i'];
//should return false.
//-----------
//const array1 = ['a', 'b', 'c', 'x'];//const array2 = ['z', 'y', 'x'];
//should return true.

// 2 parameters - arrays - no size limit
// return true or false

function hung1(array1,array2){
    for(let i = 0; i < array1.length; i++){
        for(let j = 0 ; j< array2.length;j++){
            if (array1[i] === array2[j]){
                return true;
            }
        }
    }
    return false;
}
const array1 = ['a', 'b', 'c', 'x'];
const array2 = ['z', 'y', 'a'];
function hung2(array1,array2) {
    let map = {};
    for (let i = 0 ; i <array1.length; i++){
        if(!map[array1[i]]){
            const item  = array1[i];
            map[item] = true;}
    }
    for ( let j = 0 ; j < array2.length; j++){
        if (map[array2[j]]){
            return true;
        }
    }
    return false;
}

function hung3(array1,array2){
    return array1.some(item => array2.includes(item))

}
 // hung1(array1, array2)
// hung2(array1, array2)
hung3(array1, array2)

