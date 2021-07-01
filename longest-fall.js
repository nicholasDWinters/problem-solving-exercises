// add whatever parameters you deem necessary
function longestFall(arr, max = 0) {

    let count = 0;
    let i = 0;
    if (arr.length === 0) return max;
    while (arr[i] > arr[i + 1]) {
        count++;
        i++;
    }
    count++;
    arr.shift();
    if (count > max) max = count;

    return longestFall(arr, max);

}



module.exports = { longestFall };