interface Service {
  id: string
  name: string
  description: string
  photoUrl: string
}

const services: Service[] = [
  {
    id: '1',
    name: 'Personal consultation',
    description:
      'An in-depth analysis of your style based on your personality and lifestyle.',
    photoUrl: '/consultation.jpg',
  },
  {
    id: '2',
    name: 'Wardrobe analysis',
    description:
      'For those who want to look at their wardrobe from a different, stylish and perspective.',
    photoUrl: '/analysis.jpg',
  },
  {
    id: '3',
    name: 'Photoshoot styling',
    description:
      'I will help you to maky your photoshoot day unrivalled with customized styling of your special look.',
    photoUrl: '/photoshoot.jpg',
  },
  {
    id: '4',
    name: 'Capsule wardrobe',
    description:
      'For those who value wardrobe space and are looking for optimal functionality and time savings in everyday life.',
    photoUrl: '/capsule.jpg',
  },
]

const serviceList: Service[] = services.map((service) => ({
  id: service.id,
  name: service.name,
  description: service.description,
  photoUrl: service.photoUrl,
}))

export default serviceList
