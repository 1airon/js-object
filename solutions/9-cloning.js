// BEGIN
const surfaceCopying = (object) => {
    let newObj = {};
    for (let i in object) {
        newObj [i] = object [i];
    }
    return newObj;
}
export default surfaceCopying;
// END
