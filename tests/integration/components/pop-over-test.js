import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import wait from 'ember-test-helpers/wait';

moduleForComponent('pop-over', 'Integration | Component | {{pop-over}}', {
  integration: true,

  setup() {
    $('body').append(`<div id="pop-over-target" style="width: 50px; height: 50px; border: 2px solid black; position: fixed; top: 300xp; left: 50%;"></div>`);
  }
});

test('it renders when active', function(assert) {
  this.render(hbs`{{pop-over for="pop-over-target"
                             active=true}}`);

                             debugger;

  assert.equal($('.pop-over').length, 1, 'renders pop-over with class');
});

test('renders pop-over with title and subtitle', function(assert) {
  this.render(hbs`{{pop-over for="pop-over-target"
                             title="Test title for pop-over"
                             subtitle="This is a subtitle"
                             active=true}}`);

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
  this.render(hbs`{{pop-over for="pop-over-target"
                             objectId="4932"
                             active=true}}`);

  let $objectId = $('.pop-over__id');

  assert.equal($objectId.length, 1, 'renders pop-over id');
  assert.equal($objectId.text().trim(), '4932', 'Renders objectId text');
});

test('renders pop-over with content', function(assert) {
  this.render(hbs`
    {{#pop-over for="pop-over-target" active=true}}
      This is the content for this pop-over
    {{/pop-over}}
  `);

  let $content = $('.pop-over__content');

  assert.equal($content.length, 1, 'renders pop-over content');
  assert.equal($content.text().trim(), 'This is the content for this pop-over',
               'Renders content text');
});

test('activates on hovering target', function(assert) {
  this.render(hbs`{{pop-over for="pop-over-target"}}`);

  assert.equal($('.pop-over').length, 0, 'By default pop-over not shown');

  $('#pop-over-target').mouseenter();

  return wait()
    .then(() => {
      assert.equal($('.pop-over').length, 1, 'Shows pop-over on hovering target');
      return wait();
    });
});

test('passes custom class to pop-over', function(assert) {
  this.render(hbs`{{pop-over for="pop-over-target"
                             classes="test-class"
                             active=true}}`);

  assert.ok($('.pop-over').hasClass('test-class'), 'renders with classes');
});
