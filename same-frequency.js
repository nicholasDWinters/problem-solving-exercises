// add whatever parameters you deem necessary
function sameFrequency(num1, num2) {
    let obj1 = createFrequencyCounter(num1.toString());
    let obj2 = createFrequencyCounter(num2.toString());
    for (let num of Object.keys(obj1)) {
        if (obj1[num] !== obj2[num]) return false;
    }
    return true;
}

function createFrequencyCounter(array) {
    let frequencies = {};
    for (let val of array) {
        let valCount = frequencies[val] || 0;
        frequencies[val] = valCount + 1;
    }
    return frequencies;
}

module.exports = { sameFrequency };