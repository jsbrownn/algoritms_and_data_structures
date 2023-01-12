let count = 0;
let arr = [1,2,3,4,5,6,7,8,9,10,11,12,13]
const linearSearch = (array,item) => { 

  for (let i = 0; i < array.length; i++) { 
    count += 1;
    if(array[i] === item) {
      return `find item ${item} on position ${i}. Count of iteration - ${count}`;
    }
  }
  return null;
}

console.log( linearSearch(arr,3))