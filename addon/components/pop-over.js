import Component from '@ember/component';
import layout from 'ember-railio-pop-over/templates/components/pop-over';

import computed, { reads } from 'ember-computed';
import { htmlSafe }        from 'ember-string';

export default Component.extend({
  layout,
  delay: 0,

  interactive:     false,
  animation:       'fill',
  arrow:           false,
  flip:            null,
  hideDuration:    300,
  hideDelay:       reads('delay'),
  hideOn:          'mouseleave blur escapekey',
  isOffset:        false,
  isShown:         false,
  lazyRender:      false,
  modifiers:       null,
  onChange:        null,
  placement:       'top',
  popperContainer: '.ember-application',
  renderInPlace:   false,
  showDelay:       reads('delay'),
  showduration:    300,
  showOn:          'mouseenter focus',
  useCapture:      false,

  customStyle: computed('width', function() {
    let width = this.get('width');
    if (!isNaN(width)) {
      return htmlSafe(`width: ${width}px`);
    }
    return;
  })
});
