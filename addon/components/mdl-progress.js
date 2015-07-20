import Ember from 'ember';
import BaseComponent from './-base-toplevel-component';
import layout from '../templates/components/mdl-progress';
import computed from 'ember-new-computed';

const { computed: { empty } } = Ember;

export default BaseComponent.extend({
  primaryClassName: 'progress',
  classNameBindings: [
    'indeterminate:mdl-progress__indeterminate'
  ],
  _progress: null,
  _buffer: null,
  _mdlComponent: null,

  indeterminate: empty('progress'),
  layout,

  didInsertElement() {
    this._super(...arguments);
    let mdlprogress = new window.MaterialProgress(this.get('element'));
    this.set('_mdlComponent', mdlprogress);
    this._updateProgress();
    this._updateBuffer();
  },

  _updateProgress() {
    let progress = this.get('progress');
    if (progress !== null) {
      this.get('_mdlComponent').setProgress(progress);
    }
  },
  _updateBuffer() {
    let buffer = this.get('buffer');
    if (buffer !== null) {
      this.get('_mdlComponent').setBuffer(buffer);
    }
  },

  progress: computed('_progress', {
    get() {
      return this.get('_progress');
    },
    set(key, newVal) {
      if (this.element) {
        this._updateProgress();
      }
      this.set('_progress', newVal);
      return newVal;
    }
  }),

  buffer: computed('_buffer', {
    get() {
      return this.get('_buffer');
    },
    set(key, newVal) {
      if (this.element) {
        this._updateBuffer();
      }
      this.set('_buffer', newVal);
      return newVal;
    }
  })
});
