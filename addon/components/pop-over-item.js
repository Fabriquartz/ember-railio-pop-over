import Component                 from '@ember/component';
import { className, classNames } from '@ember-decorators/component';

@classNames('pop-over__item')
export default class PopOverItemComponent extends Component {
  @className fullWidth;
}
