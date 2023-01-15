const arr = [3,66,4,2,7,65,444,3332,-3,0,1,32,48]

const quickSort = (array) => { 
  if (array.length <= 1){
    return array;
  }
  let pivotIndex = Math.floor( array.length / 2)
  let pivot = array[pivotIndex]
  let less = [];
  let greater = [];
  for (let i = 0; i < array.length; i++) {
    if (i === pivotIndex) { 
      continue
    }
    if (array[i] < array[pivotIndex]) {
      less.push(array[i])
    } else { 
      greater.push(array[i])
    }
  }
  return [...quickSort(less),pivot,...quickSort(greater)]
}

console.table( quickSort(arr))