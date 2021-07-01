// add whatever parameters you deem necessary
function constructNote(msg, ltrs) {
    if (msg.length === 0) return true;
    if (ltrs.length < msg.length) return false;
    let msgObj = createFrequencyCounter(msg);
    let ltrsObj = createFrequencyCounter(ltrs);
    for (let char of Object.keys(msgObj)) {
        if (msgObj[char] > ltrsObj[char]) {
            return false;
        }
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

module.exports = { constructNote };