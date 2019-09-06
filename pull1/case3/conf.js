// conf.js
exports.config = {
    framework: 'jasmine2',
    seleniumAddress: 'http://localhost:4444/wd/hub',
    useAllAngular2AppRoots: true,
    chromeOnly: true,
directConnect: true,
    specs: ['spec.js'],
    onPrepare: function() {
        var AllureReporter = require('jasmine-allure-reporter');
        jasmine.getEnv().addReporter(new AllureReporter({
          resultsDir: 'allure-results'
        }));
      }
  }