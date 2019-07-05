import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import wait from 'ember-test-helpers/wait';
import { isVisible } from 'ember-attacher';
import $    from 'jquery';
import { run } from '@ember/runloop';

moduleForComponent('pop-over', 'Integration | Component | {{pop-over}}', {
  integration: true
});

test('it renders when active', function(assert) {
  this.render(hbs`{{pop-over}}`);

  assert.equal($('.pop-over').length, 1, 'renders pop-over with class');
});

test('renders pop-over with title and subtitle', function(assert) {
  this.render(hbs`{{pop-over title="Test title for pop-over"
                             subtitle="This is a subtitle"}}`);

  let $title    = $('.pop-over__title');
  let $subTitle = $('.pop-over__subtitle');

  assert.equal($title.length, 1, 'renders pop-over title');
  assert.equal($title.text().trim(), 'Test title for pop-over',
               'Renders title text');

  assert.equal($subTitle.length, 1, 'renders pop-over subtitle');
  assert.equal($subTitle.text().trim(), 'This is a subtitle',
               'Renders subtitle text');
});

test('renders pop-over with id', function(assert) {
  this.render(hbs`{{pop-over objectId="4932"}}`);

  let $objectId = $('.pop-over__id');

  assert.equal($objectId.length, 1, 'renders pop-over id');
  assert.equal($objectId.text().trim(), '4932', 'Renders objectId text');
});

test('renders pop-over with content', function(assert) {
  this.render(hbs`
    {{#pop-over}}
      This is the content for this pop-over
    {{/pop-over}}
  `);

  let $content = $('.pop-over__content');

  assert.equal($content.length, 1, 'renders pop-over content');
  assert.equal($content.text().trim(), 'This is the content for this pop-over',
               'Renders content text');
});

test('activates on hovering target', function(assert) {
  this.render(hbs`<div id="pop-over-target">{{pop-over}}</div>`);

  assert.notOk(isVisible('.ember-attacher'), 'By default pop-over not shown');

  run(() => $('#pop-over-target').mouseenter());

  return wait()
    .then(() => {
      assert.ok(isVisible('.ember-attacher'), 'Shows pop-over on hovering target');
      return wait();
    });
});

test('passes custom class to pop-over', function(assert) {
  this.render(hbs`{{pop-over classes="test-class"}}`);

  assert.ok($('.pop-over').hasClass('test-class'), 'renders with classes');
});
