import mori from 'mori'
import MoriComponent from './mori-component'
import {booleanNot} from './util'
import logo from './logo.png'

function clickShowModal () {
  window.NEXT_STATE = mori.assoc(window.CURRENT_STATE, 'isModalShowing', true)
}

function clickOpenCarry () {
  window.NEXT_STATE = mori.updateIn(window.CURRENT_STATE, ['mapFilters', 'allowsOpenCarry'], booleanNot)
  window.CARRY.filterMarkers(mori.toJs(mori.get(window.NEXT_STATE, 'mapFilters')))
}

function clickConcealedCarry () {
  window.NEXT_STATE = mori.updateIn(window.CURRENT_STATE, ['mapFilters', 'allowsConcealedCarry'], booleanNot)
  window.CARRY.filterMarkers(mori.toJs(mori.get(window.NEXT_STATE, 'mapFilters')))
}

class SideBar extends MoriComponent {
  render () {
    // window.CARRY.filterMarkers(mori.toJs(mori.get(window.CURRENT_STATE, 'mapFilters')))

    const allowsOpenCarry = mori.get(this.props.imdata, 'allowsOpenCarry')
    const allowsConcealedCarry = mori.get(this.props.imdata, 'allowsConcealedCarry')

    return (
      <div className='side-bar'>
        <div className='header-container'>
          <img className='logo-sidebar' src={logo} />
        </div>
        <div className='checkbox-container'>
          <label className='checkbox-item'>
            <input type='checkbox' checked={allowsOpenCarry} onClick={clickOpenCarry} />
            Allows Open Carry
          </label>
          <br />
          <label className='checkbox-item'>
            <input type='checkbox' checked={allowsConcealedCarry} onClick={clickConcealedCarry} />
           Allows Concealed Carry
          </label>
          <br />
        </div>
        <button className='add-location-btn' onClick={clickShowModal}><span>Add Location</span></button>
      </div>
    )
  }
}

export default SideBar
