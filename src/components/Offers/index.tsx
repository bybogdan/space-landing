import { OFFERS_LIST } from '../../constants'
import Offer from '../Offer'

import './styles.sass'

export default function Offers() {
  return (
    <div className="offers">
      <h2 className="offers-title">Offers</h2>
      <ul className="list">
        {OFFERS_LIST.map(({ title, text, image, buttonText }) => (
          <Offer key={title} image={image}>
            <div className="offer-content">
              <h1 className="title">{title}</h1>
              <p className="text">{text}</p>
              <button className="button">{buttonText}</button>
            </div>
          </Offer>
        ))}
      </ul>
    </div>
  )
}
