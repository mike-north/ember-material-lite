import Ember from 'ember';
import BadgeSupport from '../mixins/badge-support';
import layout from '../templates/components/mdl-icon';

export default Ember.Component.extend(BadgeSupport, {
	classNames: ['icon material-icons'],
  	layout
});
// <div class="icon material-icons mdl-badge" data-badge="1">account_box</div>
