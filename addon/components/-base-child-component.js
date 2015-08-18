import Ember from 'ember';

const { Component, computed } = Ember;

export default Component.extend({
  childComponentClassName: null,
  classNameBindings: ['_childComponentClassString'],
  _childComponentClassStringDelimeter: '--',
  _childComponentClassString: computed('composableParent', 'childComponentClassName', function() {
    let cccn = this.get('childComponentClassName');
    if (!cccn) {
      return '';
    } else {
      let parentComponent = this.get('composableParent');
      return `${parentComponent.get('_primaryClassNameString')}${this.get('_childComponentClassStringDelimeter')}${this.get('childComponentClassName')}`;
    }
  })
});
