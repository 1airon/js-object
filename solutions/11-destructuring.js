// BEGIN
const sortAAlphabetically = (massive) => {
let newMassive = [];
for (let i of massive) {
    newMassive.push (i.name)
}
newMassive = newMassive.sort();
return newMassive;
}
export default sortAAlphabetically;
// END