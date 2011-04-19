var expectation = require('../lib/expectation');

expectation.create(
  function () {
    return 'ok';
  },
  function (data) {
    console.log(data);
  }
);