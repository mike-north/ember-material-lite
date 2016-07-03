import Ember from 'ember';
import config from './config/environment';

const { Router } = Ember;

let router = Router.extend({
  location: config.locationType
});

router.map(function() {
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

export default router;
