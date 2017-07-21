import './index.css'
import mori from 'mori'

function morilog (cljThing) {
  console.log(mori.toJs(cljThing))
}

function updateFnameInput (event) {
  window.NEXT_STATE = mori.assoc(window.CURRENT_STATE, 'fname', event.target.value)
  console.log(event.target.value)
  morilog(window.NEXT_STATE)
}

function Forminputs (inputMap) {
  return (
    <form>
      <label>
      First Name
      <input id='fname-input' type='text' value={inputMap.fname} onInput={updateFnameInput} name='fname' />
      </label>
      <label>
      Last Name
      <input type='text' name='lname' />
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

export default Forminputs
