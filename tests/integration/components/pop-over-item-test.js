import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('pop-over-item', 'Integration | Component | pop-over-item', {
  integration: true
});

test('it renders', function(assert) {
  this.render(hbs`{{pop-over-item}}`);

  assert.equal(this.$('.pop-over__item').length, 1,
               'renders with pop-over__item class');
});
