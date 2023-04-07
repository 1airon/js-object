// BEGIN
const make = (name, proporities = {}) => {

    if (!proporities.state) proporities.state = 'moderating'

    if (!proporities.createdAt) proporities.createdAt = Date.now();
    let company = {
        'name': name,
        ...proporities,
    }
    return company;
}

export default make;
// END