const strings = ['a', 'b', 'c', 'd', 'e']
// 4*4 = 16 bytes of string 

strings[2] //O(1)

//push
strings.push('e'); //O(1) or can be as O(n)
console.log(strings)
//pop
strings.pop();
strings.pop(); //O(!)

//unshift
strings.unshift('x'); //O(n)

//splice
strings.splice(2,0,'alien'); //O(n)

console.log(strings)
