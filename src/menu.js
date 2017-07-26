import './index.css'
import App from './app.js'
import mori from 'mori'

function openNav () {
  if (!mori.get(window.CURRENT_STATE, 'isMenuShowing')) {
    window.NEXT_STATE = mori.assoc(window.CURRENT_STATE, 'isMenuShowing', true)
    document.getElementById('mySidenav').style.width = '250px'
    document.getElementById('main').style.marginLeft = '250px'
  } else {
    closeNav()
  }
}

function closeNav () {
  if (mori.get(window.CURRENT_STATE, 'isMenuShowing')) {
    window.NEXT_STATE = mori.assoc(window.CURRENT_STATE, 'isMenuShowing', false)
    document.getElementById('mySidenav').style.width = '0'
    document.getElementById('main').style.marginLeft = '0'
  }
}

function changePage () {
  window.location.hash = '/about'
}

function HamburgerMenu () {
  return (
    <div>
      <div id='mySidenav' className='sidenav'>
        <a href=''>Home</a>
        <a id='about' href='#/about'>About</a>
        <a href='mailto:ashleigh.arnaud@gmail.com'>Contact</a>
      </div>
      <div id='main'>
        <span style='font-size:30px;cursor:pointer;' onclick={openNav}><i className='fa fa-bars' aria-hidden='true'></i></span>
      </div>
    </div>
  )
}

export default HamburgerMenu
