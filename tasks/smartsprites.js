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
  var util = require('util');

  grunt.registerMultiTask('smartsprites', 'Sprite CSS with SmartSprites.', function () {
    var options = this.options();

    if (!grunt.file.exists(options['rootDirPath']) && !grunt.file.exists(options['rootDirPath'])) {
      grunt.log.error('Either root directory or non-empty list of individual CSS files is required');

      return false;
    }

    grunt.loadNpmTasks('grunt-exec');

    grunt.config.set('exec', {
      smartsprites: {
        cwd: path.resolve('./tasks/lib/smartsprites'),
        cmd: function () {
          var commands = [];
          var isWin = /^win/.test(process.platform);

          if (isWin) {
            commands.push('smartsprites.cmd');
          } else {
            commands.push('./smartsprites.sh');
          }

          Object.keys(options).forEach(function (k) {
            var v = options[k];

            if (k === 'cssFileSuffix' && v === '') {
              v = '""';
            }

            if (k === 'spritePngIe6') {
              v = '';
            }

            commands.push(util.format('--%s %s', dasherize(k), v));
          });

          grunt.log.writeln('SmartSprites Command: ' + commands.join(' '));

          return commands.join(' ');
        }
      }
    });

    grunt.task.run('exec');
  });

  function dasherize(str) {
    return str.replace(/([A-Z])/g, '-$1').replace(/[-_\s]+/g, '-').toLowerCase();
  }
};