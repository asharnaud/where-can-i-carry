import './index.css'
import Forminputs from './form-inputs.js'
import FormCheckboxes from './form-checkboxes.js'
import mori from 'mori'
import MoriComponent from './mori-component'
import SecondMap from './second-map'
import { $, val } from './zepto-1.2.0.js'

function morilog (cljThing) {
  console.log(mori.toJs(cljThing))
}

function clickHideModal () {
  window.NEXT_STATE = mori.assoc(window.CURRENT_STATE, 'isModalShowing', false)
}

function clickSubmitBtn () {
  morilog(window.NEXT_STATE)
}

class Modal extends MoriComponent {
  render () {
    let fname = mori.get(this.props.imdata, 'fname')
    let lname = mori.get(this.props.imdata, 'lname')
    let email = mori.get(this.props.imdata, 'email')
    let inputMap = mori.hashMap('fname', fname, 'lname', lname, 'email', email)
    return (
      <div className='modal-show'>
        <div className='modal-content'>
          <button className='close' onClick={clickHideModal}><i class='fa fa-times' aria-hidden='true'></i></button>
          <div className='modal-header'>
            <h2>Add Location</h2>
          </div>
          <div className='modal-body'>
            <div>{Forminputs(window.NEXT_STATE)}</div>
            <div>{FormCheckboxes()}</div>
            <p>Comments</p>
            <textarea rows='4' cols='50' />
          </div>
          <input className='submit-btn' type='submit' value='Submit' onClick={clickSubmitBtn} />
          <div><SecondMap imdata={true} /></div>
        </div>
      </div>
    )
  }
}

export default Modal
