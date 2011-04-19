var expectation = require('../lib/expectation');

var expect = expectation.create(
  function () {
    return false;
  },
  function (data) {
    console.log(data);
  }
);

expect.on('checking', function () { console.log('checking'); });
expect.on('restart', function () { console.log('restarting'); });