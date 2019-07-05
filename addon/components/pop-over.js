import Component    from '@ember/component';
import { computed } from '@ember/object';
import { reads }    from '@ember/object/computed';
import { htmlSafe } from '@ember/template';

import { layout, tagName } from '@ember-decorators/component';

import template from 'ember-railio-pop-over/templates/components/pop-over';

@layout(template)
@tagName('')
export default class PopOverComponent extends Component {
  delay   = 0

  interactive     = false;
  animation       = 'fill';
  arrow           = false;
  flip            = null;
  hideDuration    = 300;
  @reads('delay') hideDelay;
  hideOn          = 'mouseleave blur escapekey';
  isOffset        = false;
  isShown         = false;
  lazyRender      = false;
  modifiers       = null;
  onChange        = null;
  placement       = 'top';
  popperContainer = '.ember-application';
  renderInPlace   = false;
  @reads('delay') showDelay;
  showduration    = 300;
  showOn          = 'mouseenter focus';
  useCapture      = false;

  @computed('width')
  get customStyle() {
    let width = this.get('width');
    if (!isNaN(width)) {
      return htmlSafe(`width: ${width}px`);
    }
    return null;
  }
}
