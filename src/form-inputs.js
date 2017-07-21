import './index.css'
import mori from 'mori'

function morilog (cljThing) {
  console.log(mori.toJs(cljThing))
}

function handleChange (event) {
  let value = event.target.value
  value = window.NEXT_STATE.fname
  console.log(event.target.value)
  morilog(window.NEXT_STATE.fname)
}

function Forminputs () {
  return (
    <form>
      <label>
      First Name
      <input id='fname-input' type='text' value={window.NEXT_STATE.fname} onInput={handleChange} name='fname' />
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
