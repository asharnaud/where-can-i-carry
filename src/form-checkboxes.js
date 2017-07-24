import './index.css'

function FormCheckboxes () {
  return (
    <div>
      <div className='modal-checkbox-container'>
        <p>Restriction Type:</p>
        <input type='checkbox' />
        <label className='checkbox-item-2'> Open Carry</label> <i className='fa fa-thumbs-o-up' aria-hidden='true' />
        <br />
        <input type='checkbox' />
        <label className='checkbox-item-2'> Concealed Carry</label> <i className='fa fa-thumbs-o-up' aria-hidden='true' />
        <br />
        <input type='checkbox' />
        <label className='checkbox-item-2'> Open Carry (30.07)</label> <i className='fa fa-ban' aria-hidden='true' />
        <br />
        <input type='checkbox' />
        <label className='checkbox-item-2'> Concealed Carry (30.06)</label> <i className='fa fa-ban' aria-hidden='true' />
      </div>
      <div className='valid-container'>
        <p>Is the sign valid?</p>
        <input type='checkbox' />
        <label>Yes</label>
        <input type='checkbox' />
        <label>No</label>
        <input type='checkbox' />
        <label>Not Sure</label>
      </div>
    </div>
  )
}

export default FormCheckboxes
