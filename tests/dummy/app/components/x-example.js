import Ember from 'ember';
import computed from 'ember-new-computed';

const { Component, computed: { empty } } = Ember;

export default Component.extend({
  classNames: ['x-example', 'mdl-cell'],
  classNameBindings: ['colClass'],
  cols: 4,
  colClass: computed('cols', function() {
    return `mdl-cell--${this.get('cols')}-col`;
  }),
  title: 'Example',
  emptySnippet: empty('snippet'),
  exampleFrameClass: 'mdl-cell mdl-cell--12-col',
  partialName: computed('snippet', function() {
    return `snippets/${this.get('snippet') || 'none'}`;
  }),
  snippetName: computed('snippet', function() {
    return `${this.get('snippet') || 'none'}.hbs`;
  }),
  send() {
    this.get('targetObject').send(...arguments);
  }
});
