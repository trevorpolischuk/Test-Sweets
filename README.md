Test Sweets
======================
### A boilerplate test suite for automated Javascript tests.

Test Sweets is designed to be a portable, flexible, and easy to understand approach to automating javascript tests in the browser and in the command line.

It lives neatly in its own polite folder, sitting carefully as not to disturb the rest of your app, but unlocks a powerful timesaver and fascinating programming challenge.

#### Should you read on, and use Test Sweets in your web application, you will receive the following benefits:

- Constant immediate feedback on the state of your application
- An early warning system that catches the worst kind of bugs: silent failures
- A greater sense of confidence when making changes to your codebase
- A goal in life.

#### Additional technical features.

- List of sample assertions available in the qUnit test framework
- A sample test runner for rapid cross browser testing
- Configurations for integrating Grunt
- Testing at the command line using PhantomJS

### Testing Philosophy

Testing front-end code in web applications is not as straight forward as one would assume. It is very possible to write poor, brittle tests, that cost more time to maintain than any advantages gained from automated testing.

Just like how writing clean and effective code adheres to concepts like "Seperation of Concerns" and "Dont Repeat Yourself", your testing philosophy will determine the quality of your test suite.

#### Testing Principles

 - Every test must be atomic.

 - A test should be fast.

 - Write once, run forever

Every test you write should be able to run individually and in any order. A test should not rudely affect any other test. HTML required for the test should be appended to the <div id="qunit-fixture"></div>, which will be magically wiped clean after every test.

Tests should be fast as F. Long winded tests that take several seconds (or worse, minutes) to complete will deter your fellow developers from running the tests on every compile.

Tests should be written once, and not be so tightly coupled to the code that every change to the code requires updating the test.

TODO: Test Philosophy
      Pitfalls that make testing Javascript very difficult
      Setting up Test Sweets
      Example Project