import Ember from 'ember';
import layout from '../templates/components/mdl-nav-header';
import ShadowSupport from '../mixins/shadow-support';

const { Component } = Ember;

export default Component.extend(ShadowSupport, {

  layout,
  tagName: 'header',
  classNames: ['mdl-layout__header'],
  classNameBindings: [
    'waterfallMenu:mdl-layout__header--waterfall',
    'scroll:mdl-layout__header--scroll',
    'transparent:mdl-layout__header--transparent'
  ],
  waterfallMenu: false,
  scroll: false,
  transparent: false

});