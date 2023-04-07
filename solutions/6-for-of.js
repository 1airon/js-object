// BEGIN
const formsAnObject = (obj, parameters) => {
    let newObj = {};
    for (let key in obj) {
    if(parameters.includes(key)) {
    newObj[key] = obj[key];
    }
    }
    return newObj;
    }
    export default formsAnObject;
// END