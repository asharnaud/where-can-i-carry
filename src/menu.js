import './index.css'

function clickShowMenu () {
  if (!window.appState.isMenuShowing) {
    window.appState.isMenuShowing = true
  } else {
    window.appState.isMenuShowing = false
  }
}

function HamburgerMenu () {
  return (
    <div>
      <button className='menu-btn-show' onClick={clickShowMenu}>Menu</button>
    </div>
  )
}

export default HamburgerMenu
