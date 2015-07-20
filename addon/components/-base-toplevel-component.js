import Ember from 'ember';
import computed from 'ember-new-computed';

export default Ember.Component.extend({
  primaryClassName: null,
  _jsClass: true,
  classNameBindings: ['_primaryClassNameString', '_jsClassNameString'],

  _primaryClassNameString: computed('primaryClassName', {
    get() {
      return `mdl-${this.get('primaryClassName')}`;
    }
  }),
  _jsClassNameString: computed('primaryClassName', '_jsClass', {
    get() {
      if (this.get('_jsClass')) {
        return `mdl-js-${this.get('primaryClassName')}`;
      } else {
        return '';
      }
    }
  })
});
