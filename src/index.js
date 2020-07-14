const bubbleSort = (arr) => {
  let isSwapped;
  let stepsCount = arr.length - 1;
  do {
    isSwapped = false;
    for (let i = 0; i < stepsCount; i += 1) {
      if (arr[i] > arr[i + 1]) {
        const temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        isSwapped = true;
      }
    }
    stepsCount -= 1;
  } while(isSwapped);
  return arr;
};
export default bubbleSort;