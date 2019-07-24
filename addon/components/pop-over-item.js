import Component                 from '@ember/component';
import { className, classNames } from '@ember-decorators/component';

export default
@classNames('pop-over__item')
class PopOverItemComponent extends Component {
  @className fullWidth;
}
