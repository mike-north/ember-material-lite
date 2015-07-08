import Ember from 'ember';
import RippleSupport from '../mixins/ripple-support';
import layout from '../templates/components/mdl-button';
import computed from 'ember-new-computed';

export default Ember.Component.extend(RippleSupport, {
  tagName: 'button',
  icon: null,
  isColored: true,
  isRaised: false,
  isFloating: false,
  isMiniFab: false,
  isAccent: false,
  _isIconMode: computed('icon', 'isFloating', {
    get() {
      return !this.get('isFloating') && this.get('icon');
    }
  }),
  attributeBindings: ['disabled'],
  classNames: ['mdl-button', 'mdl-js-button'],
  classNameBindings: [
    'isMiniFab:mdl-button--mini-fab',
    'isAccent:mdl-button--accent',
    'isRaised:mdl-button--raised',
    '_isIconMode:mdl-button--icon',
    'isColored:mdl-button--colored',
    'isFloating:mdl-button--fab'],
  layout,

  click() {
    this.sendAction();
  }
});
