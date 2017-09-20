import mori from 'mori'
import MoriComponent from './mori-component'
import {booleanNot} from './util.js'

function clickAllowsOpenCarry () {
  window.NEXT_STATE = mori.updateIn(window.CURRENT_STATE, ['newLocationForm', 'modalAllowsOpenCarry'], booleanNot)
}

function clickAllowsConcealedCarry () {
  window.NEXT_STATE = mori.updateIn(window.CURRENT_STATE, ['newLocationForm', 'modalAllowsConcealedCarry'], booleanNot)
}

class FormCheckboxes extends MoriComponent {
  render () {
    const openCarryAllowed = mori.get(this.props.imdata, 'modalAllowsOpenCarry')
    const concealedCarryAllowed = mori.get(this.props.imdata, 'modalAllowsConcealedCarry')
    return (
      <div className='type-checkbox-container'>
        <div className='modal-checkbox-container'>
          <h3>Restriction Type:</h3>
          <p className='instructions'>**Checked means they allow it, unchecked means they do not allow it.**</p>
          <label className='checkbox-item-2'>
            <input type='checkbox' checked={openCarryAllowed} onClick={clickAllowsOpenCarry} />
            Allows Open Carry
          </label>
          <br />
          <label className='checkbox-item-2'>
            <input type='checkbox' checked={concealedCarryAllowed} onClick={clickAllowsConcealedCarry} />
            Allows Concealed Carry
          </label>
        </div>
      </div>
    )
  }
}

export default FormCheckboxes
