import Ember from 'ember';

const { LinkComponent } = Ember;

let mdlNavItem = LinkComponent.extend({

  classNames: ['mdl-navigation__link'],

  params: null,

  didReceiveAttrs() {
    this.attrs.params = this.get('params');
    this.attrs.hasBlock = false;
  }

});

mdlNavItem.reopenClass({

  positionalParams: 'params'

});

export default mdlNavItem;