import Tether from 'ember-tether/components/ember-tether';
import layout from 'ember-railio-pop-over/templates/components/pop-over';

import computed, { alias, reads } from 'ember-computed';
import { htmlSafe }               from 'ember-string';

import run from 'ember-runloop';
import $   from 'jquery';

export default Tether.extend({
  layout,
  active: false,
  delay:  0,
  on:     ['hover'],
  flow:   alias('location'),

  customStyle: computed('width', function() {
    let width = this.get('width');
    if (!isNaN(width)) {
      return htmlSafe(`width: ${width}px`);
    }
    return;
  }),

  _for: computed('for', function() {
    return `#${this.get('for')}`;
  }),

  target: reads('for'),

  _target: computed('target', function() {
    return `#${this.get('target')}`;
  }),

  attachment:       'top left',
  targetAttachment: 'bottom left',

  constraints: computed(function() {
    return [{
      to:         'window',
      attachment: 'together',
      pin:        true
    }];
  }),

  didInsertElement() {
    let openPopOver  = () => this._openPopOver();
    let closePopOver = () => this._closePopOver();

    this.set('openPopOver', openPopOver);
    this.set('closePopOver', closePopOver);

    $(this.get('_for'))
      .on('mouseenter', openPopOver)
      .on('mouseup', openPopOver)
      .on('mouseleave', closePopOver)
      .on('mousedown', closePopOver);
  },

  willDestroy() {
    $(this.get('_for'))
      .off('mouseenter', this.get('openPopOver'))
      .off('mouseup', this.get('openPopOver'))
      .off('mouseleave', this.get('closePopOver'))
      .off('mousedown', this.get('closePopOver'));
  },

  _openPopOver() {
    this.set('setHoveredTimeOut', run.later(() => {
      if (!this.isDestroyed) {
        this.set('active', true);
      }
    }, this.get('delay')));
  },

  _closePopOver() {
    run.cancel(this.get('setHoveredTimeOut'));
    this.set('active', false);
  }

});
