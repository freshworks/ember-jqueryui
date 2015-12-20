import Ember from 'ember';
import JqueryuiMethodsMixin from '../../../mixins/jqueryui-methods';
import { module, test } from 'qunit';

module('Unit | Mixin | jqueryui methods');

// Replace this with your real tests.
test('it works', function(assert) {
  var JqueryuiMethodsObject = Ember.Object.extend(JqueryuiMethodsMixin);
  var subject = JqueryuiMethodsObject.create();
  assert.ok(subject);
});
