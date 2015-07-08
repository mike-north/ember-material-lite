import Ember from 'ember';

export function activeItemString(params/*, hash*/) {
  Ember.assert('active-item-string must be passed 4 params', params.length === 4);
  let [baseString, activeString, currentVal, activeVal] = params;
  let result = [baseString];
  if (currentVal === activeVal) {
    result.push(activeString);
  }
  return result.join(' ');
}

export default Ember.HTMLBars.makeBoundHelper(activeItemString);
