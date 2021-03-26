const { range } = require('range');

function getListMultiplesOfTwo(upTo) {
  return range(2, upTo + 1, 2)
}

module.exports = getListMultiplesOfTwo;