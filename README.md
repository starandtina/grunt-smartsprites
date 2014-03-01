# grunt-smartsprites

> Sprite CSS with SmartSprites.

## Getting Started
This plugin requires Grunt `~0.4.2`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-smartsprites --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-smartsprites');
```

## The "smartsprites" task

### Overview
In your project's Gruntfile, add a section named `smartsprites` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  smartsprites: {
    options: {
      // Task-specific options go here.
    },
    your_target: {
      // Target-specific file lists and/or options go here.
    },
  },
});
```

### Options

#### options.rootDirPath
Type: `String`

Path to the directory that contains the css files to be processed.

#### options.outputDirPath
Type: `String`

Output directory for processed CSS files and CSS-relative sprite images.

#### options.documentRootDirPath
Type: `String`

Document root path for document-root-relative (starting with '/') image urls in CSS.

#### options.cssFileEncoding
Type: `String`

Encoding of the input and output CSS files

#### options.cssFileSuffix
Type: `String`

Suffix to be appended to the processed CSS file name

#### options.logLevel
Type: `String`

Message logging level, including INFO | IE6NOTICE | WARN.

#### options.spritePngDepth
Type: `String`

Color depth of sprites in the PNG format.

#### options.spritePngIe6
Type: `String`

Enables/disables generation of IE6-friendly sprite images.

Please refer to [csssprites.org/#usage](http://csssprites.org/#usage) for more detailed info about these options.

### Usage Examples

#### Default Options
In this example, the default options are only used to set the rootDirPath, and the CSS files will be written next to the original CSS files with css.file.suffix, and sprite images will be written relative to CSS files.

```js
grunt.initConfig({
  smartsprites: {
    options: {
      rootDirPath: path.resolve('./test/fixture')
    }
  },
});
```

#### Custom Options
In this example, you could set your custom options as your requirements.

```js
grunt.initConfig({
  smartsprites: {
    options: {
      rootDirPath: path.resolve('./test/fixture'),
      outputDirPath: path.resolve('./test/output'),
      cssFileEncoding: 'UTF-8',
      cssFileSuffix: '',
      logLevel: 'WARN',
      spritePngDepth: 'AUTO',
      spritePngIe6: true
    }
  }
});
```

## Dependencies
* [SmartSprites](http://csssprites.org/)
* [grunt-exec](https://github.com/jharding/grunt-exec)

## Testing
```shell
npm test
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
* 0.1.0: initialize the whole grunt plugin and provide basice functionality.

## Versioning
Strictly following the Semantic Versioning. 
For more information on semantic versioning, please visit [semver](http://semver.org/).

## License
Copyright (c) 2014 starandtina
Licensed under the MIT License.
