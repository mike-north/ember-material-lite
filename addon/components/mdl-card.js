import Ember from 'ember';
import BaseComponent from './-base-toplevel-component';
import layout from '../templates/components/mdl-card';
import computed from 'ember-new-computed';

export default BaseComponent.extend({
  primaryClassName: 'card',
  _jsClass: false,
  classNameBindings: ['_shadowClassString'],
  layout,
  shadowDepth: 2,
  _shadowClassString: computed('shadowDepth', {
  	get() {
  		return `mdl-shadow--${this.get('shadowDepth')}dp`;
  	}
  })
});
