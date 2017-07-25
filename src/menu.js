import './index.css'
import App from './app.js'
import About from './about.js'
import mori from 'mori'
import Inferno from 'inferno'
import { Router, Route, IndexRoute } from 'inferno-router'
import createBrowserHistory from 'history/createBrowserHistory'

const browserHistory = createBrowserHistory();

const routes = (
  <Router history={ browserHistory }>
    <Route component={ App }>
      <IndexRoute component={ App }/>
      <Route path="/about" component={ About }>
        <Route path="/about" />
      </Route>
    </Route>
  </Router>
);


console.log('app is ', App)
console.log('about is ', About)

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

function HamburgerMenu () {
  return (
    <div>
      <div id='mySidenav' className='sidenav'>
        <a href='javascript:void(0)' className='closebtn' onclick={closeNav}>&times;</a>
        <a href='about'>About</a>
        <a href='#'>FAQ</a>
        <a href='#'>Contact</a>
      </div>
      <div id='main'>
        <span style='font-size:30px;cursor:pointer;' onclick={openNav}><i className='fa fa-bars' aria-hidden='true'></i></span>
      </div>
    </div>
  )
}

export default HamburgerMenu
