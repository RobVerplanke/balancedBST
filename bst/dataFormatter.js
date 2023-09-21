// Remove duplicated elements
function removeDuplicates(arr) {
  return arr.filter((element, index) => arr.indexOf(element) === index);
}

// Sort and merge the array elements
function merge(leftArr, rightArr) {
  const sortedArray = [];

  while (leftArr.length > 0 && rightArr.length > 0) {
    if (leftArr[0] < rightArr[0]) {
      sortedArray.push(leftArr[0]);
      leftArr.shift();
    } else {
      sortedArray.push(rightArr[0]);
      rightArr.shift();
    }
  }

  while (rightArr.length > 0) {
    sortedArray.push(rightArr[0]);
    rightArr.shift();
  }

  while (leftArr.length > 0) {
    sortedArray.push(leftArr[0]);
    leftArr.shift();
  }

  return sortedArray;
}

// Recursive merge sort
function mergeSort(arr) {
  const middleIndex = Math.floor(arr.length / 2);
  const leftArr = arr.slice(0, middleIndex);
  const rightArr = arr.slice(middleIndex);

  if (arr.length === 1) return arr;

  return merge(mergeSort(leftArr), mergeSort(rightArr));
}

// Prepare data before using it in the binary search tree
export default function formatData(arr) {
  return mergeSort(removeDuplicates(arr));
}
