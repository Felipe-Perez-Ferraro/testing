const stringLength = (string) => {
  if (typeof string !== 'string') {
    throw new Error('You must set a String');
  }
  if (string.length < 1 || string.length > 10) {
    throw new Error('Error!');
  }
  return string.length
};
module.exports = stringLength;