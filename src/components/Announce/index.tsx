import './styles.sass'

type AnnounceProps = {
  children: React.ReactNode
  width: 'viewport' | 'full' | 'half'
  image: string
}

export default function Announce({ children, image, width }: AnnounceProps) {
  return (
    <div className={`announce-container ${width}`}>
      <img className="background" src={image} alt="bg" />
      {children}
    </div>
  )
}
