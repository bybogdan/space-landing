import './styles.sass'

import rocketIcon from '../../assets/rocket.svg'

export default function Footer() {
  return (
    <div className="footer-container">
      <div className="layout footer">
        <img src={rocketIcon} alt="rocket icon" />
        <p className="text">Exciting space adventure!</p>
      </div>
    </div>
  )
}
