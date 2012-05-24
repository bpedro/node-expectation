exports.create = function (checkFunction, runFunction, data, period) {
  var result = undefined;
  if (undefined == period) {
    period = 1000;
  }
  var emitter = new (require('events').EventEmitter)();

  var timeoutFunction = function (data) {
    emitter.emit('checking');
    if (result = checkFunction(data)) {
      if (undefined == result) {
        result = data;
      }
      emitter.emit('checked', result);
    } else {
      emitter.emit('restart');
      setTimeout(emitter.start, period);
    }
  };
  
  emitter.start = function () { emitter.emit('start'); };

  emitter.on('start', function () { timeoutFunction(data); });
  emitter.on('checked', function () { runFunction(result); });

  emitter.start();

  return emitter;
}
