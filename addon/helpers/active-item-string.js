import Ember from 'ember';

export function activeItemString(params/*, hash*/) {
  Ember.assert('active-item-string must be passed 4 params', params.length === 4);
  let baseString = params[0];
  let activeString = params[1];
  let currentVal = params[2];
  let activeVal = params[3];
  let result = [baseString];
  if (currentVal === activeVal) {
    result.push(activeString);
  }
  return result.join(' ');
}

export default Ember.HTMLBars.makeBoundHelper(activeItemString);
