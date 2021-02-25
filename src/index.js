
exports.min = function min(array) {
  if (typeof array == "undefined" || array.length == 0) {
    return 0;
} else {
  return array.reduce(function (a, b) {
    return ( a < b ? a : b);
  });
  }
}


exports.max = function max(array) {
  if (typeof array == "undefined" || array.length == 0) {
    return 0;
      } else {
    return array.reduce(function (a, b) {
      return ( a > b ? a : b);
    }); 
    }
  }

exports.avg = function avg(array) {
  if (typeof array == "undefined" || array.length == 0) {
    return 0;
  } else {
    let sum = 0;
    for (i = 0; i < array.length; i++){
      sum += array[i];
    }
    let average = sum / array.length; 
    return average;
   }
 }
