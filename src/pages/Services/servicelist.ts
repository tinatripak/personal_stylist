interface Service {
  id: string
  name: string
  description: string
  photoUrl: string
  fullDescription: string[]
  result: string
  price: string
  oldPrice: string
  offlinePrice: string
  onlinePrice: string
}

const services: Service[] = [
  {
    id: '1',
    name: 'Personal consultation',
    description:
      'An in-depth analysis of your style based on your personality and lifestyle.',
    photoUrl: '/images/consultation.jpg',
    fullDescription: [
      'We conduct a survey to better understand your needs and style preferences.',
      'During the consultation, we will talk about things that suit your figure, color combinations in your outfits, styles, secrets of budget shopping from famous fashion influencers, and much more.',
      'Expert advice on personal style.',
    ],
    result:
      'After the consultation, you will receive a file containing all the issues discussed, which you will keep forever.',
    price: '',
    oldPrice: '',
    offlinePrice: '90',
    onlinePrice: '120',
  },
  {
    id: '2',
    name: 'Wardrobe analysis',
    description:
      'For those who want to look at their wardrobe from a different, stylish and perspective.',
    photoUrl: '/images/analysis.jpg',
    fullDescription: [
      'We are conducting a survey.',
      'We analyze your wardrobe.',
      'We take into account your wishes for a new wardrobe.',
      'We pick up the things that are missing in your closet.',
      'We create stylish looks that will suit you and your figure and match your taste.',
    ],
    result:
      'On the date you choose, you will receive a file with a wardrobe analysis with up to 100 looks, wardrobe analysis and personal style tips.',
    price: '200',
    oldPrice: '400',
    offlinePrice: '',
    onlinePrice: '',
  },
  {
    id: '3',
    name: 'Wardrobe analysis OFFLINE',
    description:
      'The same option like a Wardrobe analysis, but Offline in Kyiv/Odesa',
    photoUrl: '/images/offline.jpeg',
    fullDescription: [
      'We are conducting a survey.',
      'We analyze your wardrobe in person with a visit.',
      'We take into account your wishes for a new wardrobe.',
      'We create a shopping list of things that are missing in your closet.',
      'We create stylish looks that will suit you and your figure and match your taste.',
    ],
    result:
      'On the selected date, you will receive a file with a wardrobe analysis that will contain from 40 to 100 looks, wardrobe analysis, a “Shopping List” and personal style tips.',
    price: '540',
    oldPrice: '',
    offlinePrice: '',
    onlinePrice: '',
  },
  {
    id: '4',
    name: 'Event styling',
    description:
      'I will help you to maky your event day unrivalled with customized styling of your special look.',
    photoUrl: '/images/photoshoot.jpg',
    fullDescription: [
      'We are conducting a survey.',
      'I take into account your wishes and body features.',
      'I select images for an important event for you (wedding/birthday/photo shoot, etc.).',
      'I select up to 10 outfit options (including shoes and accessories) and provide links to them.',
    ],
    result:
      'Entrust me with your image in important moments. You no longer need to guess what to wear to a conference/photo shoot/graduation or wedding, I will be happy to select up to 10 outfits for you.',
    price: '160',
    oldPrice: '320',
    offlinePrice: '',
    onlinePrice: '',
  },
  {
    id: '5',
    name: 'Capsule wardrobe',
    description:
      'For those who value wardrobe space and are looking for optimal functionality and time savings in everyday life for a cold or warm season.',
    photoUrl: '/images/capsule.jpg',
    fullDescription: [
      'We conduct a survey to better understand your needs and style preferences.',
      'We select items exclusively according to your taste, taking into account the characteristics of your figure and the chosen price segment (Ukrainian brands/market/mid-range/luxury).',
      'We select 10 to 15 items that create a complete wardrobe for the cold or warm season',
    ],
    result:
      'On the selected date, you will receive a file with a “Capsule Wardrobe” containing 50 looks and personal style tips.',
    price: '180',
    oldPrice: '360',
    offlinePrice: '',
    onlinePrice: '',
  },
  {
    id: '6',
    name: 'Mini capsule',
    description:
      'For those who value wardrobe space and want to have 15-20 incredibly amazing looks from 5-8 clothes.',
    photoUrl: '/images/mini-capsule.jpeg',
    fullDescription: [
      'We conduct a survey to better understand your needs and style preferences.',
      'We select items exclusively according to your taste, taking into account the characteristics of your figure and the chosen price segment (Ukrainian brands/market/mid-range/luxury).',
      'We select from 5 to 8 items that create an impressive 15-20 looks.',
    ],
    result:
      'On the selected date, you will receive a file with a “Mini Capsule” containing 15 to 20 looks and personal style tips.',
    price: '150',
    oldPrice: '',
    offlinePrice: '',
    onlinePrice: '',
  },
  {
    id: '7',
    name: 'Shopping together',
    description:
      'We are going to shop and buy clothes together, I will teach you how to choose clothes for your body type',
    photoUrl: '/images/shopping-together.jpeg',
    fullDescription: [
      'We are conducting a survey.',
      'We make a list of things we want to pick up.',
      'We go shopping together (Odesa/Kyiv).',
      'During the shopping, I will teach you how to choose things that fit your figure.',
      'I will reveal the secrets of economical shopping and advise on any stylistic issues.',
    ],
    result:
      'We pick up all the necessary things, if we dont find something, I pick it up online and send the list to you. The service is followed by a free online consultation for 30 days.',
    price: '500',
    oldPrice: '',
    offlinePrice: '',
    onlinePrice: '',
  },
]

const serviceList: Service[] = services.map((service) => ({
  id: service.id,
  name: service.name,
  description: service.description,
  photoUrl: service.photoUrl,
  fullDescription: service.fullDescription,
  result: service.result,
  price: service.price,
  oldPrice: service.oldPrice,
  offlinePrice: service.offlinePrice,
  onlinePrice: service.onlinePrice,
}))

export default serviceList
