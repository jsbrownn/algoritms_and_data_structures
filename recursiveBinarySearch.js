const arr =[3,66,4,2,7,65,444,3332,-3,0]
const recursiveBinarySearch = (array,start,end,item) => { 
  let middle = Math.floor( (start + end) / 2)
  if (item === array[middle]) {
    return middle
  }
  if (item < array[middle]) { 
    return recursiveBinarySearch(array, start,middle - 1, item)
  } else {
    return recursiveBinarySearch(array, middle + 1, end, item)
  }
}

console.log(recursiveBinarySearch(arr,0,arr.length,7))