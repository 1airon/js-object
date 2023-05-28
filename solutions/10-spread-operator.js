// BEGIN
function make(name, additionalProperties = {}) {
  const defaultProperties = {
    state: 'moderating',
    createdAt: Date.now(),
  };

  const mergedProperties = {
    ...defaultProperties,
    ...additionalProperties
  };

  const company = {
    name,
    ...mergedProperties
  };
  return company;
}

export default make;
// END