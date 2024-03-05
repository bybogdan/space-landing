import './styles.sass'

import headerIcon from '../../assets/headerIcon.svg'
import busketIcon from '../../assets/busket.svg'

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
          <li className="navbar-item">
            <a href="/">
              <img src={busketIcon} />
            </a>
          </li>
        </ul>
      </div>
    </header>
  )
}
