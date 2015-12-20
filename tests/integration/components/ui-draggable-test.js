import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('ui-draggable', 'Integration | Component | ui draggable', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(2);

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{ui-draggable}}`);

  assert.equal(this.$().text().trim(), '', 'Dummy component with no yield is rendered');

  // Template block usage:
  this.render(hbs`
    {{#ui-draggable}}
      template block text
    {{/ui-draggable}}
  `);

  assert.equal(this.$().text().trim(), 'template block text', 'Yield works fine!');
});
