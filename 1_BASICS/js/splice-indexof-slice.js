/// splice - splices means cuts off -- the remaining elements
// in the array. So, array gets divided
let array = ['Mango','Pineapple','Apple','Papaya','Sapota','Watermelon', 'Tharbooj', 'Fruit 1', 'Fruit 2']
console.log('The complete array is '+array)
let newArray = array.splice(0,3) 

console.log('array.splice(0,3) gives '+newArray);
console.log('left over array elements are '+array)

/// slice - starts from first given element to (last element-1)
// that is, it ignores last element. It does not cut off the array
let sliceArray = array.slice(0,3)
console.log('array.slice(0,3) gives '+sliceArray)
console.log('See it left off tharbooj which is the 3rd element')
console.log('Remaining array is intact ' + array)

/// indexof
var array2 = ['Anthony', 'Banderas', 'Cameron']
console.log(array2.indexOf('Cameron'))

// if indexOf can not find the value, it always returns -1
console.log(array2.indexOf('cameron')) // lowercase