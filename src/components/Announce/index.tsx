import earthIcon from '../../assets/earth.svg'
import image1 from '../../assets/1.png'

import './styles.sass'

export default function Announce() {
  return (
    <div className="announce-container">
      <img className="background" src={image1} alt="bg" />
      <div className="container layout">
        <div className="announce-content">
          <h1 className="title">
            Discover the vast expanses of <b>space</b>
          </h1>
          <p className="text">
            Where the possibilities are <b>endless!</b>
          </p>
          <button className="button button-primary">Learn more</button>
        </div>

        <img src={earthIcon} className="earth" alt="earth" />
      </div>
    </div>
  )
}
