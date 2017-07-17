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

function Modal (appstate) {
  var modalClasses = appState.classes
  console.log(modalClasses)
  return (
    <div>
      <button id='myBtn' onClick={toggleClass}>Add Location</button>
      <div id='myModal' className={modalClasses}>
        <div className='modal-content'>
          <div className='modal-header'>
            <span className='close'>&times;</span>
            <h2>Modal Header</h2>
          </div>
          <div className='modal-body'>
            <p>Some text in the Modal Body</p>
            <p>Some other text...</p>
          </div>
          <div className='modal-footer'>
            <h3>Modal Footer</h3>
          </div>
        </div>
      </div>
    </div>
  )
}

function toggleClass () {
  console.log(appState.classes)
  if (appState.classes === 'modal-hide') {
    appState.classes = 'modal-show'
  } else {
    appState.classes = 'modal-hide'
  }
}

export default App
