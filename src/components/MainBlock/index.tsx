import './styles.sass'
import Announce from '../Announce'

export default function MainBlock() {
  return (
    <div className="mainBlock layout">
      <div className="offers">
        <h2 className="title">Offers</h2>
        <ul className="list">
          <Announce image="src/assets/2.webp" width="full">
            <div className="announce-content">
              <h1 className="title">Move the borders of reality!</h1>
              <p className="text">
                Go on a space adventure - it's possible with us!
              </p>
              <button className="button button-secondary">Learn more</button>
            </div>
          </Announce>

          <Announce image="src/assets/3.webp" width="half">
            <div className="announce-content">
              <h1 className="title">Space is not just stars and planets</h1>
              <p className="text">Go on a space adventure</p>
              <button className="button button-secondary">Learn more</button>
            </div>
          </Announce>

          <Announce image="src/assets/4.webp" width="half">
            <div className="announce-content">
              <h1 className="title">For those who dream of stars </h1>
              <p className="text">Our offer: make your dream come true</p>
              <button className="button button-secondary">Learn more</button>
            </div>
          </Announce>

          <Announce image="src/assets/5.webp" width="full">
            <div className="announce-content">
              <h1 className="title">Fulfill your fantastic dreams!</h1>
              <p className="text">Space has never been so close</p>
              <button className="button button-secondary">Learn more</button>
            </div>
          </Announce>
        </ul>
      </div>
    </div>
  )
}
