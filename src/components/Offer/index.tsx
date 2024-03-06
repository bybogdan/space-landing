import './styles.sass'

type OfferProps = {
  children: React.ReactNode
  image: string
}

export default function Offer({ children, image }: OfferProps) {
  return (
    <li className="offer-container">
      <img className="background" src={image} alt="bg" />
      {children}
    </li>
  )
}
