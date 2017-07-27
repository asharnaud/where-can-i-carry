import mori from 'mori'
import {booleanNot} from './util'

function clickHamburgerMenu () {
  window.NEXT_STATE = mori.updateIn(window.CURRENT_STATE, ['isMenuShowing'], booleanNot)
}

function closeSidebar () {
  setTimeout(function () {
    window.NEXT_STATE = mori.assoc(window.CURRENT_STATE, 'isMenuShowing', false)
  }, 50)
}

function HamburgerMenu (isMenuShowing) {
  let classVal = ''
  if (isMenuShowing) classVal = 'open'

  return (
    <div className={classVal}>
      <div className='sidenav'>
        <a href='#/map' onClick={closeSidebar}>Home</a>
        <a href='#/about' onClick={closeSidebar}>About</a>
        <a href='mailto:ashleigh.arnaud@gmail.com'>Contact</a>
      </div>
      <div className='hamburger'>
        <span style='font-size:30px;cursor:pointer;' onclick={clickHamburgerMenu}><i className='fa fa-bars' aria-hidden='true' /></span>
      </div>
    </div>
  )
}

export default HamburgerMenu
