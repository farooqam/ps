//jshint strict: false
module.exports = function(config) {
  config.set({

    basePath: './app',

    files: [
      'bower_components/angular/angular.js',
      'bower_components/angular-route/angular-route.min.js',
      'bower_components/angular-ui-router/release/angular-ui-router.min.js',
      'bower_components/angular-mocks/angular-mocks.js',
      'app.js',
      'course/**/*.js',
      'authorList/**/*.js',      
      'courseDescription/**/*.js',
      'courseAuthorInfo/**/*.js',  
      'courseDiscussion/**/*.js',   
      'courseHeading/**/*.js', 
      'courseList/**/*.js', 
      'courseModules/**/*.js',      
      'courseNavigator/**/*.js',    
      'courseViewer/**/*.js',    
      'home/**/*.js',    
      'navigator/**/*.js',   
      'userStatus/**/*.js'
    ],

    autoWatch: true,

    frameworks: ['jasmine'],

    browsers: ['PhantomJS'],

    plugins: [
      'karma-chrome-launcher',
      'karma-firefox-launcher',
      'karma-phantomjs-launcher',
      'karma-jasmine',
      'karma-junit-reporter'
    ],

    junitReporter: {
      outputFile: 'test_out/unit.xml',
      suite: 'unit'
    }

  });
};
