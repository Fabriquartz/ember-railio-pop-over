/* globals blanket, module */

var options = {
  modulePrefix: 'ember-railio-pop-over',
  filter: '//.*ember-railio-pop-over/.*/',
  antifilter: '//.*(tests|template).*/',
  loaderExclusions: [],
  enableCoverage: true,
  cliOptions: {
    reporters: ['json'],
    autostart: true
  }
};
if (typeof exports === 'undefined') {
  blanket.options(options);
} else {
  module.exports = options;
}
