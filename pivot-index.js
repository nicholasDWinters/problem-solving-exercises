// add whatever parameters you deem necessary
function pivotIndex(arr, i = 0) {
    let left = 0;
    let right = arr.length - 1;
    let total = 0;
    let total2 = 0;
    i++;
    if (i >= arr.length) return -1;
    let slice1 = arr.slice(left, i)
    let slice2 = arr.slice(i + 1, right + 1);

    for (let i = 0; i < slice1.length; i++) {
        total = total + slice1[i];

    }
    for (let i = 0; i < slice2.length; i++) {
        total2 += slice2[i];
    }

    if (total === total2) {
        return i;
    } else {
        return pivotIndex(arr, i);
    }

}

module.exports = { pivotIndex };