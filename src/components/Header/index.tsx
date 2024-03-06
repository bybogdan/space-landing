import './styles.sass'

import headerIcon from '../../assets/headerIcon.svg'
import busketIcon from '../../assets/busket.svg'
import busketGradientIcon from '../../assets/busketGradient.svg'
import menuIcon from '../../assets/menu.svg'
import closeIcon from '../../assets/close.svg'

export default function Header() {
  return (
    <header className="header-container">
      <div className="layout header">
        <img src={headerIcon} alt="Header Icon" />

        <ul className="navbar">
          <li className="navbar-item">
            <a href="/">Home</a>
          </li>
          <li className="navbar-item">
            <a href="/">Products</a>
          </li>
          <li className="navbar-item  navbar-item-busket">
            <a href="/">
              <img className="busket-icon" src={busketIcon} />
              <img className="busket-gradient-icon" src={busketGradientIcon} />
            </a>
          </li>
        </ul>

        <input type="checkbox" id="menuToggle" className="menu-toggle" hidden />
        <label htmlFor="menuToggle" className="navbar-trigger-mobile">
          <img src={menuIcon} />
        </label>
        <div className="navbar-overlay">
          <label htmlFor="menuToggle" className="navbar-overlay-close">
            <img src={closeIcon} />
          </label>
          <ul className="navbar-mobile">
            <li className="navbar-item">
              <a href="/">Home</a>
            </li>
            <li className="navbar-item">
              <a href="/">Products</a>
            </li>
            <li className="navbar-item navbar-item-busket">
              <a href="/">
                <img className="busket-icon" src={busketIcon} />
                <img
                  className="busket-gradient-icon"
                  src={busketGradientIcon}
                />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  )
}
