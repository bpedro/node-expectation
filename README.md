# expectation

expectation lets you specify code that will run whenever something happens.

![expectation flowchart](https://github.com/bpedro/node-expectation/raw/master/doc/images/expectation.png)

## Example

    var expectation = require('../lib/expectation');

    expectation.create(
      function () {
        return 'we are there!';
      },
      function (data) {
        console.log(data);
      }
    );