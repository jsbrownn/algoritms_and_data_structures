const arr =[3,66,4,2,7,65,444,3332,-3,0]

const selectionSort = (array) => { 
  for (let i = 0; i < array.length; i++) { 
    let indexMin = i;
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[indexMin]){
        indexMin = j;
      }
    }
    let tmp = array[i];
    array[i] = array[indexMin];
    array[indexMin] = tmp
  }
  return array;
}

console.table(selectionSort(arr))