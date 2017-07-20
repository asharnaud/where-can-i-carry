import './index.css'
import Forminputs from './form-inputs.js'
import FormCheckboxes from './form-checkboxes.js'
import mori from 'mori'
import MoriComponent from './mori-component'
import SecondMap from './second-map'

function morilog (cljThing) {
  console.log(mori.toJs(cljThing))
}

function clickHideModal () {
  window.NEXT_STATE = mori.assoc(window.CURRENT_STATE, 'isModalShowing', false)
}

class Modal extends MoriComponent {
  render () {
    morilog(this.props.imdata)
    return (
      <div className='modal-show'>
        <div className='modal-content'>
          <button className='close' onClick={clickHideModal}>Close</button>
          <div className='modal-header'>
            <h2>Add Location</h2>
          </div>
          <div className='modal-body'>
            <div>{Forminputs()}</div>
            <div>{FormCheckboxes()}</div>
            <p>Comments</p>
            <textarea rows='4' cols='50' />
          </div>
          <input className='submit-btn' type='submit' value='Submit' />
        </div>
        <div><SecondMap imdata={true} /></div>
      </div>
    )
  }
}

export default Modal
