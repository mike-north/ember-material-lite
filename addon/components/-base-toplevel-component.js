import Ember from 'ember';

const { computed } = Ember;

export default Ember.Component.extend({
  primaryClassName: null,
  _jsClass: true,
  classNameBindings: ['_primaryClassNameString', '_jsClassNameString'],

  _primaryClassNameString: computed('primaryClassName', function() {
    return `mdl-${this.get('primaryClassName')}`;
  }),

  _jsClassNameString: computed('primaryClassName', '_jsClass', function() {
    if (this.get('_jsClass')) {
      return `mdl-js-${this.get('primaryClassName')}`;
    } else {
      return '';
    }
  })
});
