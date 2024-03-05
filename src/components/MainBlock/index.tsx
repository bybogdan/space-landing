import './styles.sass'
import Announce from '../Announce'

import image2 from '../../assets/2.webp'
import image3 from '../../assets/3.webp'
import image4 from '../../assets/4.webp'
import image5 from '../../assets/5.webp'

export default function MainBlock() {
  return (
    <div className="mainBlock layout">
      <div className="offers">
        <h2 className="title">Offers</h2>
        <ul className="list">
          <Announce image={image2} width="full">
            <div className="announce-content">
              <h1 className="title">Move the borders of reality!</h1>
              <p className="text">
                Go on a space adventure - it's possible with us!
              </p>
              <button className="button button-secondary">Learn more</button>
            </div>
          </Announce>

          <Announce image={image3} width="half">
            <div className="announce-content">
              <h1 className="title">Space is not just stars and planets</h1>
              <p className="text">Go on a space adventure</p>
              <button className="button button-secondary">Learn more</button>
            </div>
          </Announce>

          <Announce image={image4} width="half">
            <div className="announce-content">
              <h1 className="title">For those who dream of stars </h1>
              <p className="text">Our offer: make your dream come true</p>
              <button className="button button-secondary">Learn more</button>
            </div>
          </Announce>

          <Announce image={image5} width="full">
            <div className="announce-content">
              <h1 className="title">Fulfill your fantastic dreams!</h1>
              <p className="text">Space has never been so close</p>
              <button className="button button-secondary">Learn more</button>
            </div>
          </Announce>
        </ul>
      </div>

      <div className="about">
        <h2 className="title">Embark on a space journey</h2>
        <p className="text">
          Travelling into space is one of the most exciting and unforgettable
          adventures that can change your life forever. And if you have ever
          dreamed of exploring stars, planets and galaxies, then our company is
          ready to help you realize this dream. We offer a unique experience
          that will allow you to go on a space journey and see all the secrets
          of the universe. We guarantee that every moment in space will be
          filled with incredible impressions, excitement and new discoveries.
          Our team of professionals takes care of your safety and comfort so
          that you can fully enjoy your adventure in space. We offer various
          options for space excursions.
        </p>
      </div>
    </div>
  )
}
