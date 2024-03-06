import { OFFERS_LIST } from '../../constants'
import Announce from '../Announce'

import './styles.sass'

export default function Offers() {
  return (
    <div className="offers">
      <h2 className="title">Offers</h2>
      <ul className="list">
        {OFFERS_LIST.map(({ title, text, image, width, buttonText }) => (
          <Announce key={title} image={image} width={width}>
            <div className="announce-content">
              <h1 className="title">{title}</h1>
              <p className="text">{text}</p>
              <button className="button button-secondary">{buttonText}</button>
            </div>
          </Announce>
        ))}
      </ul>
    </div>
  )
}
