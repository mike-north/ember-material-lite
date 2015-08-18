import Ember from 'ember';
import BaseComponent from './-base-toplevel-component';
import RippleSupport from '../mixins/ripple-support';
import layout from '../templates/components/mdl-button';

const { computed } = Ember;

export default BaseComponent.extend(RippleSupport, {
  primaryClassName: 'button',
  tagName: 'button',
  icon: null,
  isColored: true,
  isRaised: false,
  isFloating: false,
  isMiniFab: false,
  isAccent: false,
  _mdlComponent: null,
  'for': null,
  _isIconMode: computed('icon', 'isFloating', function() {
    return !this.get('isFloating') && this.get('icon');
  }),
  attributeBindings: ['disabled', 'for'],
  classNameBindings: [
    'isMiniFab:mdl-button--mini-fab',
    'isAccent:mdl-button--accent',
    'isRaised:mdl-button--raised',
    '_isIconMode:mdl-button--icon',
    'isColored:mdl-button--colored',
    'isFloating:mdl-button--fab'],
  layout,

  didInsertElement() {
    this._super(...arguments);
    let mdlbtn = new window.MaterialButton(this.get('element'));
    this.set('_mdlComponent', mdlbtn);
  },

  click() {
    this.sendAction(this);
  }
});
