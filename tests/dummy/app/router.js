import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('badges');
  this.route('buttons');
  this.route('cards');
  this.route('footer');
  this.route('icons');
  this.route('menus');
  this.route('navs');
  this.route('progress');
  this.route('sliders');
  this.route('table');
  this.route('tabs');
  this.route('textfields');
  this.route('toggles');
  this.route('tooltips');
});

export default Router;
