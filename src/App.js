import Component from 'inferno-component'
import './App.css'
import appState from './index.js'

class App extends Component {
  render () {
    return (
      <div>
        {Modal(appState)}
      </div>
    )
  }
}

function Modal (props) {
  function showModal () {
    props.classes = 'modal-show'
    console.log(props.classes)
  }
  function hideModal () {
    props.classes = 'modal-hide'
  }
  // var showClass = 'modal-show'
  // var hideClass = 'modal-hide'
  // function modalClasses () {
  //   if (props.classes === hideClass) {
  //     props.classes = showClass
  //   } else {
  //     props.classes = hideClass
  //   }
  // }
  return (
    <div>
      <button class='add-location-btn' onClick={showModal}><span>Add Location</span></button>
      <div id='myModal' className={props.classes}>
        <div className='modal-content'>
          <div className='modal-header'>
            <span className='close' onClick={hideModal}>X</span>
            <h2>Add Location Form</h2>
          </div>
          <div className='modal-body'>
            <form>
              <label>
              First Name:
              <input type='text' name='fname' />
              </label>
              <label>
              Last Name:
              <input type='text' name='lname' />
              </label>
              <label>
              Email:
              <input type='text' email='email' />
              </label>
              <input type='submit' value='Submit' />
            </form>
          </div>
          <div className='modal-footer'>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
