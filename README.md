# ember-material (WIP)

Google's [Material Design Lite](http://www.getmdl.io/) for Ember.js apps

## Installation

```
# ember-cli < 0.2.3
ember install:addon ember-material-lite
# ember-cli >= 0.2.3
ember install ember-material-lite
```

### Without SASS

This addon can be used without SASS (relying on pure CSS for styles). If you choose this path, you'll need to alter your app slightly.

1. Delete the `ember-cli-sass` dependency that the installation blueprint will add to your app. You may also remove the dependency on `material-design-lite-src`, making sure to leave the one for (`material-design-lite` in place)
2. Your app.css should start with
```css
@import "bower_components/material-design-lite/material.css";
```

## Running Tests

* `ember test`
* `ember test --server`

## Building

* `ember build`

For more information on using ember-cli, visit [http://www.ember-cli.com/](http://www.ember-cli.com/).
