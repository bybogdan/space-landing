import Announce from '../Announce'

import './styles.sass'

export default function TopAnnounce() {
  return (
    <Announce width="viewport" image="src/assets/1.webp">
      <div className="container layout">
        <div className="announce-content announce-top">
          <h1 className="title">
            Discover the vast expanses of <b>space</b>
          </h1>
          <p className="text">
            Where the possibilities are <b>endless!</b>
          </p>
          <button className="button button-primary">Learn more</button>
        </div>

        <img src="src/assets/earth.svg" alt="earth" />
      </div>
    </Announce>
  )
}
