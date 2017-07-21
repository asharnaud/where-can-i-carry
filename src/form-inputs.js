import './index.css'

function Forminputs () {
  return (
    <form>
      <label>
      First Name
      <input type='text' value={window.NEXT_STATE.fname} name='fname' />
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
