
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
const binarySearch = (array,item) => {
  let start = 0;
  let middle ;
  let end = arr.length;
  let position = -1;
  let found = false;

  while (found === false && start <= end) { 
    middle = Math.floor( (start + end) / 2 );
    if (item === array[middle]) {
      found = true;
      position = middle;
    }  
      if (item < array[middle]) {
        end = middle - 1;
      }else{ 
        start = middle + 1
      }  
  }
  return position;
}
console.log(binarySearch(arr, 4))