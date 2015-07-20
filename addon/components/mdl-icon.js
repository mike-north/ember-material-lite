import Ember from 'ember';
import BadgeSupport from '../mixins/badge-support';
import layout from '../templates/components/mdl-icon';

export default Ember.Component.extend(BadgeSupport, {
  classNames: ['icon', 'material-icons'],
  layout
});
