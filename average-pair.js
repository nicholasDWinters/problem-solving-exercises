// add whatever parameters you deem necessary
function averagePair(arr, target) {
    let i = 0;
    let j = arr.length - 1;

    while (j > i) {
        let left = arr[i];
        let right = arr[j];
        let avg = (left + right) / 2;
        if (avg === target) return true;
        if (avg > target) {
            j--;
        } else {
            i++;
        }
    }
    return false;
}

module.exports = { averagePair };