import _ from 'lodash'
// BEGIN
    const getDomainInfo = (string) => {
        const parts = string.split('://');
        const name = _.last(parts);
        const scheme = parts.length > 1 ? parts[0] : 'http'
        const info = {scheme, name};
            return info;
            }
            export default getDomainInfo
// END