import Component from '@ember/component';
import BadgeSupport from '../mixins/badge-support';
import layout from '../templates/components/mdl-icon';

export default Component.extend(BadgeSupport, {
  classNames: ['icon', 'material-icons'],
  layout
});
