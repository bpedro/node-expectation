exports.create = function (checkFunction, runFunction, data, period) {
  if (undefined == period) {
    period = 1000;
  }
  var timeoutFunction = function (data) {
    if (result = checkFunction(data)) {
      if (undefined == result) {
        result = data;
      }
      runFunction(result);
    } else {
      setTimeout(function () { timeoutFunction(data); }, period);
    }
  };
  timeoutFunction(data);
}