var each = require('async-each-series');

const delays = [300, 400, 500, 600, 200, 1000, 300, 760];
each(delays, function (delay, next) {
    setTimeout(function () {
        console.log("delay was "+delay);
        next();
      }, Math.random() * 1000);
}, function (err) {
    console.log('done');
  });