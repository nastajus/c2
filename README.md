# Express

Following [Express 4x API](http://expressjs.com/en/4x/api.html#app) sample code.

### Learnt

Javascript using functions as first-class citizens continues to hold me in awe.

As I'm reading through the [Express 4x guide on routing](http://expressjs.com/en/guide/routing.html), it's mentioned how there exists already methods available on the response object `(res)`. It piques my interest as I realize I cannot explain it with the knowledge I have of JavaScript, and decide to revisit a fundamental concept to understand how callbacks work.

In the following excerpt, I wonder how I would explain that either parameter, `res` or `req`, is possible to be imbued with any inheritance at all, as it only brought into existance in this declaration below:

    app.get('/', function (req, res) {
      res.send('hello world')
    })


As I review the code provided by MDN on the [Callback function](https://developer.mozilla.org/en-US/docs/Glossary/Callback_function), it becomes apparent how the nature of passing a function [pointer](https://en.wikipedia.org/wiki/Pointer_(computer_programming)) directly which can be executed later becomes a clear first step of understanding. What's particularly cool is the ability to **inject new** parameters. In the following code, the *name was injected* (so to speak) in the middle of execution flow, triggered from the first function `processUserInput`, added inside that first function, which finally triggers the second function inside named `callback` but really executing `greeting`. Yet that inner execution was never called directly (no `greeting()` written), instead it gets called via a placeholder function (`callback(name)`).

    function greeting(name) {
      alert('Hello ' + name);
    }

    function processUserInput(callback) {
      var name = prompt('Please enter your name.');
      callback(name);
    }

    processUserInput(greeting);


