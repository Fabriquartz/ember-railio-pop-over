import Ember from 'ember';
import Tether from 'ember-tether/components/ember-tether';
import layout from 'ember-railio-pop-over/templates/components/pop-over';
import $ from 'jquery';

const { computed, run } = Ember;
const { alias, reads } = computed;
const { htmlSafe } = Ember.String;

export default Tether.extend({
  layout: layout,
  active: false,
  delay: 0,
  on: ['hover'],
  flow: alias('location'),

  customStyle: Ember.computed('width', function() {
    const width = this.get('width');
    if (!isNaN(width)) {
      return htmlSafe('width: ' + width + 'px');
    }
    return;
  }),

  _for: Ember.computed('for', function() {
    return '#' + this.get('for');
  }),

  target: reads('for'),

  _target: Ember.computed('target', function() {
    return '#' + this.get('target');
  }),

  constraints: Ember.computed(function() {
    return [{
      to: 'window',
      attachment: 'together',
      pin: true
    }];
  }),

  didInsertElement: function() {
    const openPopOver  = () => this._openPopOver();
    const closePopOver = () => this._closePopOver();

    this.set('openPopOver', openPopOver);
    this.set('closePopOver', closePopOver);

    $(this.get('_for'))
      .on('mouseenter', openPopOver)
      .on('mouseup', openPopOver)
      .on('mouseleave', closePopOver)
      .on('mousedown', closePopOver);
  },

  willDestroy: function() {
    $(this.get('_for'))
      .off('mouseenter', this.get('openPopOver'))
      .off('mouseup', this.get('openPopOver'))
      .off('mouseleave', this.get('closePopOver'))
      .off('mousedown', this.get('closePopOver'));
  },

  _openPopOver: function() {
    this.set('setHoveredTimeOut', run.later(() => {
      if (!this.isDestroyed) {
        this.set('active', true);
      }
    }, this.get('delay')));
  },

  _closePopOver: function() {
    run.cancel(this.get('setHoveredTimeOut'));
    this.set('active', false);
  }

});
