

var assert = require('assert');
var dotenv = require('dotenv');

var botUnitTest = require("./lib/botUnitTest.js");
var greetings = require("./lib/greetings.js");

describe('Array', function() {

  /**
   * stablish bot connection
   */
  //test.connection();


  let response = greetings.sayHelloInEnglish();
  console.log(response);

  botUnitTest.connection();

  var botResponse = botUnitTest.sendMessage("hola bot");
  console.log(botResponse);
  
  /*describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function() {
      assert.equal([1,2,3].indexOf(4), -1);
    });
  });
  */
});