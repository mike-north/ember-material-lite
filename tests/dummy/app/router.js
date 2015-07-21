import Ember from 'ember';
import config from './config/environment';

let Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('badges');
  this.route('buttons');
  this.route('tabs');
  this.route('navs');
  this.route('icons');
  this.route('cards');
  this.route('progress');
  this.route('footer');
  this.route('textfields');
  this.route('toggles');
  this.route('tooltips');
});

export default Router;
