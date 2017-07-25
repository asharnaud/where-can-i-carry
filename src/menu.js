import './index.css'
import mori from 'mori'

function clickShowMenu () {
  window.NEXT_STATE = mori.assoc(window.CURRENT_STATE, 'isMenuShowing', true)
}

function showMenuLinks () {
  if (mori.get(window.CURRENT_STATE, 'isMenuShowing')) {
    return (
      <header>
        <ul className='menu'>
          <li><a href='#'>Link</a></li>
          <li><a href='#'>Link</a></li>
          <li><a href='#'>Link</a></li>
          <li><a href='#'>Link</a></li>
          <li><a href='#'>Link</a></li>
        </ul>
      </header>
    )
  }
}

function HamburgerMenu () {
  return (
    <div>
      <button className='menu-trigger' onClick={clickShowMenu}>Menu</button>
      {showMenuLinks()}
    </div>
  )
}

export default HamburgerMenu
