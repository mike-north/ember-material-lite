import Component from '@ember/component';
import { computed } from '@ember/object';
import ParentComponentSupport from 'ember-composability/mixins/parent-component-support';
import layout from '../templates/components/mdl-menu';

export default Component.extend(ParentComponentSupport, {
  layout,
  _primaryClassNameString: 'mdl-menu',
  icon: 'more_vert',
  didInsertElement() {
    this._super(...arguments);
    const uLElement = this.element.querySelectorAll("ul")[0];
    const mdlmenu = new window.MaterialMenu(uLElement);
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
