import mori from 'mori'
import MoriComponent from './mori-component'
import Modal from './modal.js'
import SideBar from './sidebar.js'
// import HamburgerMenu from './menu.js'

function morilog (cljThing) {
  console.log(mori.toJs(cljThing))
}

class App extends MoriComponent {
  render () {
    let modalComponent = null
    if (mori.get(this.props.imdata, 'isModalShowing')) {
      modalComponent = <Modal imdata={this.props.imdata} />
    }

    return (
      <div>
        <SideBar imdata={this.props.imdata} />
        {modalComponent}
      </div>
    )
  }
}

export default App
