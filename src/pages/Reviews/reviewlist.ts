interface Review {
  id: string
  name: string
  nameUkr: string
  reviewText: string
  reviewTextUkr: string
}

const reviews: Review[] = [
  {
    id: '1',
    name: 'Marina',
    nameUkr: 'Марина',
    reviewText:
      'Thank you very much for such incredible images and for the fact that I can save time and nerves from shopping.',
    reviewTextUkr:
      'Дуже дякую за такі неймовірні образи і за те, що я можу заощадити час і нерви від шопінгу.',
  },
  {
    id: '2',
    name: 'Polina',
    nameUkr: 'Поліна',
    reviewText:
      "I really like it, thank you, it's just divine. The images that we created with only my things are my images for the day, but they did not display the accessories that you added, as I asked, so now I will experiment and try to add new images. Thank you very much, I want to order a mini capsule from you for the summer, because there are also problems with the summer wardrobe.",
    reviewTextUkr:
      'Мені дуже подобається, дякую, це просто божественно. Образи, які ми створили тільки з моїми речами  - це мої образи на день, але в них раніше не були додані аксесуари, які ви додали, як я просила, тому тепер буду експериментувати і пробувати додавати нові образи. Дуже дякую, хочу замовити у вас міні-капсулу на літо, бо з літнім гардеробом теж є проблеми.',
  },
  {
    id: '3',
    name: 'Elena',
    nameUkr: 'Олена',
    reviewText:
      "I want to say thank you Liz, because now my life will be much easier and I don't have to worry about things for the whole working week.",
    reviewTextUkr:
      'Я хочу подякувати Лізі, тому що тепер моє життя стане набагато простішим, і мені не доведеться турбуватися про речі протягом усього робочого тижня.',
  },
  {
    id: '4',
    name: 'Victoria',
    nameUkr: 'Вікторія',
    reviewText:
      'Thank you, it is very beautiful and as I wanted - it is unusual and feminine.',
    reviewTextUkr:
      'Дякую, капсула така гарна і саме така, як я і хотіла - незвичайна і жіночна.',
  },
]

export default reviews
