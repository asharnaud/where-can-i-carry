import mori from 'mori'
import Component from 'inferno-component'

class MoriComponent extends Component {
  shouldComponentUpdate (nextProps, _state) {
    if (!mori.isCollection(nextProps.imdata)) {
      // TODO: Delete this!
      console.log('Not a mori component! This is the props: ' + nextProps)
    }

    return !mori.equals(this.props.imdata, nextProps.imdata)
  }
}

export default MoriComponent
