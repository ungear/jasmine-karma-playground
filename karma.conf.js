module.exports = function(config) {
  config.set({
    basePath: '',
    browsers: ['Chrome'],
    frameworks: ['jasmine'],
    files: [
      'lib/*.js',
      'test/*.js'
    ]
  });
};