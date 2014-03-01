/*
 * grunt-smartsprites
 * https://github.com/starandtina/grunt-smartsprites
 *
 * Copyright (c) 2014 starandtina
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function (grunt) {
  var path = require('path');
  // Project configuration.
  grunt.initConfig({
    jshint: {
      all: [
        'Gruntfile.js',
        'tasks/*.js',
        '<%= nodeunit.tests %>',
      ],
      options: {
        jshintrc: '.jshintrc',
      },
    },

    // Before generating any new files, remove any previously-created files.
    clean: {
      tests: ['tmp'],
    },

    // Configuration to be run (and then tested).
    smartsprites: {
      default_options: {
        options: {
          rootDirPath: path.resolve('./test/fixture')
        }
      },
      custom_options: {
        options: {
          rootDirPath: path.resolve('./test/fixture'),
          //documentRootDirPath: '',
          outputDirPath: path.resolve('./test/output'),
          cssFileEncoding: 'UTF-8',
          cssFileSuffix: '',
          logLevel: 'WARN',
          spritePngDepth: 'AUTO',
          spritePngIe6: true
        }
      }
    },

    // Unit tests.
    nodeunit: {
      tests: ['test/*_test.js'],
    },

  });

  // Actually load this plugin's task(s).
  grunt.loadTasks('tasks');

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-nodeunit');

  // Whenever the "test" task is run, first clean the "tmp" dir, then run this
  // plugin's task(s), then test the result.
  grunt.registerTask('test', ['clean', 'smartsprites', 'nodeunit']);

  // By default, lint and run all tests.
  grunt.registerTask('default', ['jshint', 'test']);

};