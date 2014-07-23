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

Just like how writing clean and effective code adheres to concepts like "Separation of Concerns" and "Don't Repeat Yourself", your testing philosophy will determine the quality of your test suite.

#### Testing Principles

 - Every test must be atomic.

 Every test you write should be able to run individually and in any order. A test should not rudely affect any other test.
 One way to achieve this is to append any markup required for the test to the `<div id="qunit-fixture"></div>`, which will be magically wiped clean after every test, while waiting dutifully for the next test to run.

 - A test should be fast.

 Think milliseconds fast. Long winded tests that take several seconds (or worse, minutes) to complete will deter your fellow developers from running the tests on every compile. Speed can be achieved through mocking connections to remote servers, and overriding animation timers to 0 seconds.

 - Write once, run forever

Tests should be robust and run obediently until they have something useful to report. They should not be tightly coupled, brittle pieces of code that require constant attention.





TODO: Test Philosophy
      Pitfalls that make testing Javascript very difficult
      Setting up Test Sweets
      Example Project