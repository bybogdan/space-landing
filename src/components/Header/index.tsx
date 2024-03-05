import './styles.sass'

export default function Header() {
  return (
    <header className="header-container">
      <div className="layout header">
        <img src="src/assets/headerIcon.svg" alt="Header Icon" />
        <ul className="navbar">
          <li className="navbar-item">
            <a href="/">Home</a>
          </li>
          <li className="navbar-item">
            <a href="/">Products</a>
          </li>
          <li className="navbar-item">
            <a href="/">
              <img src="src/assets/busket.svg" />
            </a>
          </li>
        </ul>
      </div>
    </header>
  )
}
