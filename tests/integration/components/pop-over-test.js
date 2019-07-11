import { module, test }               from 'qunit';
import { setupRenderingTest }         from 'ember-qunit';
import { render, triggerEvent, find } from '@ember/test-helpers';
import hbs                            from 'htmlbars-inline-precompile';
import { isVisible }                  from 'ember-attacher';

module('Integration | Component | {{pop-over}}', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders when active', async function(assert) {
    await render(hbs`{{pop-over}}`);

    assert.ok(find('.pop-over'), 'renders pop-over with class');
  });

  test('renders pop-over with title and subtitle', async function(assert) {
    await render(hbs`{{pop-over title="Test title for pop-over"
                                subtitle="This is a subtitle"}}`);

    let $title    = find('.pop-over__title');
    let $subTitle = find('.pop-over__subtitle');

    assert.ok($title, 'renders pop-over title');
    assert.equal($title.textContent.trim(), 'Test title for pop-over',
                 'Renders title text');

    assert.ok($subTitle, 'renders pop-over subtitle');
    assert.equal($subTitle.textContent.trim(), 'This is a subtitle',
                 'Renders subtitle text');
  });

  test('renders pop-over with id', async function(assert) {
    await render(hbs`{{pop-over objectId="4932"}}`);

    let $objectId = find('.pop-over__id');

    assert.ok($objectId, 'renders pop-over id');
    assert.equal($objectId.textContent.trim(), '4932', 'Renders objectId text');
  });

  test('renders pop-over with content', async function(assert) {
    await render(hbs`
      {{#pop-over}}
        This is the content for this pop-over
      {{/pop-over}}
    `);

    let $content = find('.pop-over__content');

    assert.ok($content, 'renders pop-over content');
    assert.equal($content.textContent.trim(),
      'This is the content for this pop-over',
      'Renders content text');
  });

  test('activates on hovering target', async function(assert) {
    await render(hbs`<div id="pop-over-target">{{pop-over}}</div>`);

    assert.notOk(isVisible('.ember-attacher'), 'By default pop-over not shown');

    await triggerEvent('#pop-over-target', 'mouseenter');

    assert.ok(isVisible('.ember-attacher'), 'Shows pop-over on hovering target');
  });

  test('passes custom class to pop-over', async function(assert) {
    await render(hbs`{{pop-over classes="test-class"}}`);

    assert.ok(find('.pop-over').classList.contains('test-class'),
      'renders with classes');
  });
});
