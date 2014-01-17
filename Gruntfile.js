'use strict';

module.exports = function(grunt) {

  // Skin variables
  var skinDir = 'theme/skin/frontend/my-theme/default/';
  var appDir = 'theme/app/design/frontend/my-theme/default/';

  // Load Tasks
  require('load-grunt-tasks')(grunt);

  // Grunt configuration
  grunt.initConfig({

    // Read package.json file
    pkg: grunt-file.readJSON('package.json'),

    compass: {
      dist: {
        options: {
          sassDir: skinDir + 'scss',
          cssDir: skinDir + 'css',
          environment: 'production',
          outputStyle: 'compressed'
        }
      }
    },

  });

  grunt.registerTask('default', ['compass']);

};