import mori from 'mori'
import MoriComponent from './mori-component'
import {booleanNot} from './util'

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
    const allowsOpenCarry = mori.get(this.props.imdata, 'allowsOpenCarry')
    const allowsConcealedCarry = mori.get(this.props.imdata, 'allowsConcealedCarry')

    return (
      <div className='side-bar'>
        <div className='header-container'>
          <i className='fa fa-map-marker' aria-hidden='true' />
          <p>Where Can I Carry?</p>
        </div>
        <div className='checkbox-container'>
          <input type='checkbox' checked={allowsOpenCarry} onClick={clickOpenCarry} />
          <label className='checkbox-item'> Open Carry </label><i className='fa fa-thumbs-o-up' aria-hidden='true' />
          <br />
          <input type='checkbox' checked={allowsConcealedCarry} onClick={clickConcealedCarry} />
          <label className='checkbox-item'> Concealed Carry </label><i className='fa fa-thumbs-o-up' aria-hidden='true' />
          {/* <br />
          <input type='checkbox' />
          <label className='checkbox-item'> Open Carry </label><i className='fa fa-ban' aria-hidden='true' />
          <br />
          <input type='checkbox' />
          <label className='checkbox-item'> Concealed Carry </label><i className='fa fa-ban' aria-hidden='true' /> */}
        </div>
        <button className='add-location-btn' onClick={clickShowModal}><span>Add Location</span></button>
      </div>
    )
  }
}

export default SideBar
