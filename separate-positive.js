// add whatever parameters you deem necessary
function separatePositive(arr) {
    let i = 0;

    while (i < arr.length) {
        if (arr[i] > 0 && i > 0) {
            let el = arr.splice(i, 1);
            arr.splice(0, 0, el[0]);
            i++;
        } else {
            i++;
        }
    }
    return arr;
}

module.exports = { separatePositive };