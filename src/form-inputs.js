import './index.css'
import mori from 'mori'
import MoriComponent from './mori-component'
import {morilog} from './util.js'

function updateNameInput (evt) {
  const newName = evt.target.value
  window.NEXT_STATE = mori.assocIn(window.CURRENT_STATE, ['newLocationForm', 'name'], newName)
}

function updateEmailInput (evt) {
  const newEmail = evt.target.value
  window.NEXT_STATE = mori.assocIn(window.CURRENT_STATE, ['newLocationForm', 'email'], newEmail)
}

class Forminputs extends MoriComponent {
  render () {
    const name = mori.get(this.props.imdata, 'name')
    const email = mori.get(this.props.imdata, 'email')

    return (
      <form>
        <div className='input-row'>
          <label>Your Name</label>
          <input type='text' value={name} onInput={updateNameInput} />
        </div>
        <div className='input-row'>
          <label>Email </label>
          <input type='text' value={email} onInput={updateEmailInput} />
        </div>
      </form>
    )
  }
}

export default Forminputs
