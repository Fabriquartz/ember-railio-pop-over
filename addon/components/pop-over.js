import Component from '@glimmer/component';
import { htmlSafe } from '@ember/template';

export default class PopOverComponent extends Component {
  get interactive() { return this.args.interactive || false; }
  get animation() { return this.args.animation || 'filll'; }
  get arrow() { return this.args.arrow || false; }
  get flip() { return this.args.flip || null; }
  get hideDuration() {return this.args.hideDuration || 300; }
  get hideDelay() { return this.args.delay || 0; }
  get hideOn() { return this.args.hideOn ||  'mouseleave blur escapekey'; }
  get isOffset() { return this.args.isOffset || false; }
  get isSHown() { return this.args.isShown || false; }
  get lazyRender() { return this.args.lazyRender || false; }
  get modifiers() { return this.args.modifiers || null; }
  get onChange() { return this.args.onChange || null; }
  get placement() { return this.args.placement || 'top'; }
  get popperContainer() { return this.args.popperContainer || '.ember-application'; }
  get renderInPlace() { return this.args.renderInPlace || false; }
  get showDuration() { return this.args.showDuration || 300; }
  get showDelay() { return this.args.delay || 0; }
  get showOn() { return this.args.showOn || 'mouseenter focus'; }
  get useCapture() { return this.args.useCapture || false; }

  get customStyle() {
    if (!isNaN(this.width)) {
      return htmlSafe(`width: ${this.width}px`);
    }
    return null;
  }
}
