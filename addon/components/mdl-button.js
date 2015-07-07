import Ember from 'ember';
import BadgeSupport from '../mixins/badge-support';
import layout from '../templates/components/mdl-button';

export default Ember.Component.extend(BadgeSupport, {
	tagName: 'button',
	classNames: ['mdl-button', 'mdl-js-button'],
	layout
});
