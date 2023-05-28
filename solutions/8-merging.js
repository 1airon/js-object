import _ from 'lodash';

// BEGIN
function fill(source, allowedKeys, data) {
  if (_.isEmpty(allowedKeys)) {
    _.merge(source, data);
    return source;
  }

  const filteredData = _.pick(data, allowedKeys);
  _.merge(source, filteredData);
  return source;
}

export default fill;
// END