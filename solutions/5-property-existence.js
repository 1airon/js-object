import _ from 'lodash';

// BEGIN
const countingWords = (str) => {
    const obj = {};
    let words = _.words(str.toLowerCase())
    for(let variable of words) {
    if (variable in obj) {
    obj[variable] = obj[variable] + 1;
    }
    else
    {
    obj[variable] = 1;
    }
    }
    return obj;
    }
    export default countingWords;
// END