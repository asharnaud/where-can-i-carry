import './index.css'
import mori from 'mori'
import MoriComponent from './mori-component'
import {morilog} from './util.js'

function updateFnameInput (evt) {
  const newFName = evt.target.value
  window.NEXT_STATE = mori.assocIn(window.CURRENT_STATE, ['newLocationForm', 'fname'], newFName)

  morilog(window.NEXT_STATE)
}

class Forminputs extends MoriComponent {
  render () {
    const fname = mori.get(this.props.imdata, 'fname')
    const lname = mori.get(this.props.imdata, 'lname')

    return (
      <form>
        <div className='input-row'>
          <label>First Name</label>
          <input type='text' value={fname} onInput={updateFnameInput} />
        </div>
        <label>
        Last Name
        <input type='text' value={lname} />
        </label>
        <br />
        <label>
        Email
        <input type='text' email='email' />
        </label>
        <br />
      </form>
    )
  }
}

export default Forminputs
