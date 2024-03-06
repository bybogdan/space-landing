import './styles.sass'

import Offers from '../Offers'
import About from '../About'

export default function MainBlock() {
  return (
    <div className="mainBlock layout">
      <Offers />
      <About />
    </div>
  )
}
