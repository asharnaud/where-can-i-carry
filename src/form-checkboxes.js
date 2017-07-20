import './index.css'

function FormCheckboxes () {
  return (
    <div>
      <input type='checkbox' />
      <label class='checkbox-item-2'> Open Carry</label> <i class='fa fa-thumbs-o-up' aria-hidden='true' />
      <br />
      <input type='checkbox' />
      <label class='checkbox-item-2'> Concealed Carry</label> <i class='fa fa-thumbs-o-up' aria-hidden='true' />
      <br />
      <input type='checkbox' />
      <label class='checkbox-item-2'> Open Carry (30.07)</label> <i class='fa fa-ban' aria-hidden='true' />
      <br />
      <input type='checkbox' />
      <label class='checkbox-item-2'> Concealed Carry (30.06)</label> <i class='fa fa-ban' aria-hidden='true' />
      <p>Is the sign valid?</p>
      <input type='checkbox' />
      <label>Yes</label>
      <input type='checkbox' />
      <label>No</label>
    </div>
  )
}

export default FormCheckboxes
