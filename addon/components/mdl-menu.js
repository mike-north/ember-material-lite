import Ember from 'ember';
import ParentComponentSupport from 'ember-composability/mixins/parent-component-support';
import layout from '../templates/components/mdl-menu';

const { Component, computed } = Ember;

export default Component.extend(ParentComponentSupport, {
  layout,
  _primaryClassNameString: 'mdl-menu',
  icon: 'more_vert',
  didInsertElement() {
    this._super(...arguments);
    let mdlmenu = new window.MaterialMenu(this.$('ul')[0]);
    this.set('_mdlComponent', mdlmenu);
  },
  _buttonId: computed('elementId', {
    get() {
      return `${this.get('elementId')}-button`;
    }
  }),
  align: 'top-left',
  _alignClass: computed('align', {
    get() {
      return `mdl-menu--${this.get('align')}`;
    }
  })
});
