import './index.css'
import mori from 'mori'
import MoriComponent from './mori-component'

function morilog (cljThing) {
  console.log(mori.toJs(cljThing))
}

function clickShowModal () {
  window.NEXT_STATE = mori.assoc(window.CURRENT_STATE, 'isModalShowing', true)
}

class SideBar extends MoriComponent {
  render () {
    return (
      <div className='side-bar'>
        <div className='header-container'>
          <i className='fa fa-map-marker' aria-hidden='true' />
          <p>Where Can I Carry?</p>
        </div>
        <div className='checkbox-container'>
          <input type='checkbox' />
          <label className='checkbox-item'> Open Carry </label><i className='fa fa-thumbs-o-up' aria-hidden='true' />
          <br />
          <input type='checkbox' />
          <label className='checkbox-item'> Concealed Carry </label><i className='fa fa-thumbs-o-up' aria-hidden='true' />
          <br />
          <input type='checkbox' />
          <label className='checkbox-item'> Open Carry </label><i className='fa fa-ban' aria-hidden='true' />
          <br />
          <input type='checkbox' />
          <label className='checkbox-item'> Concealed Carry </label><i className='fa fa-ban' aria-hidden='true' />
        </div>
        <button className='add-location-btn' onClick={clickShowModal}><span>Add Location</span></button>
      </div>
    )
  }
}

export default SideBar
