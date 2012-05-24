var expectation = require('../lib/expectation');
var assert = require('assert');

/**
 * Tests the creation of an expectation with a successful outcome
 */
exports.testCreateSuccessfulExpectation = function() {
  expectation.create(
    function () {
      return '_test';
    },
    function (data) {
      assert.equal(data, '_test');
    }
  );
}

/**
 * Tests the creation of an expectation with an unsuccessful outcome
 */
exports.testCreateUnsuccessfulExpectation = function() {
  expectation.create(
    function () {
      return true;
    },
    function (data) {
      assert.notEqual(data, '_test');
    }
  );
}
