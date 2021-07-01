// add whatever parameters you deem necessary
function countPairs(arr, num) {
    let sorted = arr.sort((a, b) => a - b);
    let left = 0;
    let right = arr.length - 1;
    let count = 0;
    while (left < right) {
        let added = sorted[left] + sorted[right];
        if (added === num) {
            count++;
            left++;
            right--;
        } else if (added < num) {
            left++;
        } else {
            right--;
        }
    }
    return count;
}

module.exports = { countPairs };