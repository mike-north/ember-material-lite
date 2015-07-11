import Ember from 'ember';
import _computed from 'ember-new-computed';

export default Ember.Component.extend({
  childComponentClassName: null,
  classNameBindings: ['_childComponentClassString'],
  _childComponentClassString: _computed('composableParent', 'childComponentClassName', {
    get() {
      let cccn = this.get('childComponentClassName');
      if (!cccn) {
        return '';
      } else {
        let parentComponent = this.get('composableParent');
        return `${parentComponent.get('_primaryClassNameString')}--${this.get('childComponentClassName')}`;
      }
    }
  })
});
