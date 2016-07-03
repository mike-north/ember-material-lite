import Ember from 'ember';
import BadgeSupport from '../mixins/badge-support';
import layout from '../templates/components/mdl-icon';

const { Component } = Ember;

export default Component.extend(BadgeSupport, {
  classNames: ['icon', 'material-icons'],
  layout
});
