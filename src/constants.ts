import image2 from './assets/2.webp'
import image3 from './assets/3.webp'
import image4 from './assets/4.webp'
import image5 from './assets/5.webp'

export const OFFERS_LIST = [
  {
    title: 'Move the borders of reality!',
    text: "Go on a space adventure - it's possible with us!",
    image: image2,
    width: 'full',
    buttonText: 'Learn more',
  },
  {
    title: 'Space is not just stars and planets',
    text: 'Go on a space adventure',
    image: image3,
    width: 'half',
    buttonText: 'Learn more',
  },
  {
    title: 'For those who dream of stars',
    text: 'Our offer: make your dream come true',
    image: image4,
    width: 'half',
    buttonText: 'Learn more',
  },
  {
    title: 'Fulfill your fantastic dreams!',
    text: 'Space has never been so close',
    image: image5,
    width: 'full',
    buttonText: 'Learn more',
  },
] as const
