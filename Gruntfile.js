'use strict';

module.exports = function(grunt) {

  // Skin variables
  var skinDir = 'theme/skin/frontend/gm/default/';
  var appDir = 'theme/app/design/frontend/gm/default/';

  // Load Tasks
  require('load-grunt-tasks')(grunt);

  // Grunt configuration
  grunt.initConfig({

    // Read package.json file
    pkg: grunt.file.readJSON('package.json'),

    compass: {
      dist: {
        options: {
          sassDir: skinDir + 'sass',
          cssDir: skinDir + 'css',
          environment: 'production'
        }
      }
    }

  });

  grunt.registerTask('default', ['compass']);

};