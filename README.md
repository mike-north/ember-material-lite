# ember-material-lite

[![Build Status](https://travis-ci.org/mike-north/ember-material-lite.svg?branch=master)](https://travis-ci.org/mike-north/ember-material-lite)
[![Dependency Status](https://david-dm.org/mike-north/ember-material-lite.svg)](https://david-dm.org/mike-north/ember-material-lite)
[![devDependency Status](https://david-dm.org/mike-north/ember-material-lite/dev-status.svg)](https://david-dm.org/mike-north/ember-material-lite#info=devDependencies)
![NPM Version](https://img.shields.io/npm/v/ember-material-lite.svg)
[![Code Climate](https://codeclimate.com/github/mike-north/ember-material-lite/badges/gpa.svg)](https://codeclimate.com/github/mike-north/ember-material-lite)
[![Ember Observer Score](http://emberobserver.com/badges/ember-material-lite.svg)](http://emberobserver.com/addons/ember-material-lite)
[![Coverage Status](https://coveralls.io/repos/mike-north/ember-material-lite/badge.svg?branch=master&service=github)](https://coveralls.io/github/mike-north/ember-material-lite?branch=master)

<img src="http://i57.tinypic.com/ic6cdy.png" align="right" />

Google's [Material Design Lite](http://www.getmdl.io/) for Ember.js apps

**This addon requires ember >= `1.11.0`**

## Installation

```
# ember-cli < 0.2.3
ember install:addon ember-material-lite
# ember-cli >= 0.2.3
ember install ember-material-lite
```

### Without SASS

This addon can be used without SASS (relying on pure CSS for styles). If you choose this path, you'll need to alter your app slightly.

1. Delete the `ember-cli-sass` NPM dependency that the installation blueprint will add to your app.
2. Add the following line to your `ember-cli-build.js`.
```js
app.import(app.bowerDirectory + '/material-design-lite/material.css');
```

## Configuration

### Colors


<img src="http://i59.tinypic.com/ih4lro.png" align="right" />

You can customize the colors of material design elements globally by setting sass variables prior to importing the main styles. 

**app/styles/app.scss**
```scss
@import "_color-definitions";

$color-primary: $palette-teal-500;
$color-accent: $palette-pink-A200;

@import "material-design-lite";
```

## Load Material design icons fontfiles locally
Adding `http://fonts.googleapis.com/icon?family=Material+Icons` into the `index.html` just works.
But in few scenarios(like running app offline) you would want to include these icon fonts from the project directories itself. 
To achieve the same, first edit `ember-cli-build.js` to include the following

```js
var EmberApp = require('ember-cli/lib/broccoli/ember-app');
var mergeTrees = require('broccoli-merge-trees');
var pickFiles = require('broccoli-static-compiler');

module.exports = function(defaults) {
  var app = new EmberApp(defaults, {
    sassOptions: {
      includePaths: ['bower_components/material-design-lite/src']
    }    
  });

  var googleFontFiles = pickFiles('bower_components/material-design-icons/iconfont', {
    srcDir: '/',
    files: ['**/*.woff', '**/*.woff2', '**/*.eot', '**/*.ttf'],
    destDir: '/fonts'
  });

  return mergeTrees([app.toTree(), googleFontFiles]);
};
```

Also Add below code on top of `app/styles/app.scss` file to import icon font files.
```css
/*Material Icons css*/
@font-face {
  font-family: 'Material Icons';
  font-style: normal;
  font-weight: 400;
  src: url(../fonts/MaterialIcons-Regular.eot); /* For IE6-8 */
  src: local('Material Icons'),
       local('MaterialIcons-Regular'),
       url(../fonts/MaterialIcons-Regular.woff2) format('woff2'),
       url(../fonts/MaterialIcons-Regular.woff) format('woff'),
       url(../fonts/MaterialIcons-Regular.ttf) format('truetype');
}
```

## Running Tests

* `ember test`
* `ember test --server`

## Building

* `ember build`

For more information on using ember-cli, visit [http://www.ember-cli.com/](http://www.ember-cli.com/).

![Analytics](https://ga-beacon.appspot.com/UA-66610985-1/mike-north/ember-material-lite/readme)
