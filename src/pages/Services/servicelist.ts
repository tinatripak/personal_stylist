interface Service {
  id: string
  name: string
  nameUkr: string
  description: string
  descriptionUkr: string
  photoUrl: string
  fullDescription: string[]
  fullDescriptionUkr: string[]
  result: string
  resultUkr: string
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
      'I provide promotional codes for discounts to save money while shopping.',
    ],
    result:
      'After the consultation, you will receive a file containing all the issues discussed, which you will keep forever.',
    price: '',
    oldPrice: '',
    offlinePrice: '90',
    onlinePrice: '120',
    nameUkr: 'Консультація зі стилю',
    descriptionUkr:
      'Глибокий аналіз вашого стилю, який заснований на вашій особистості та способі життя.',
    fullDescriptionUkr: [
      'Проводимо анкетування для кращого розуміння ваших потреба та стилітсичних побажань.',
      'Під час консультації ми поговоримо про речі, котрі пасують у вашій фігурі, кольорові поєднання у образах, стилі, секрети бюджетного шопінгу відомих fashion інфлюєнсерів і багато іншого.',
      'Експертні поради щодо особистого стилю.',
      'Надаю промокоди на знижки для заощадження коштів під час шопінгу.',
    ],
    resultUkr:
      'Після консультації ви отримаєте файл із записом усіх обговорених питань, який залишиться у вас назавжди.',
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
      'I provide promotional codes for discounts to save money while shopping.',
    ],
    result:
      'On the date you choose, you will receive a file with a wardrobe analysis with up to 100 looks, wardrobe analysis and personal style tips.',
    price: '200',
    oldPrice: '400',
    offlinePrice: '',
    onlinePrice: '',
    nameUkr: 'Розбір гардеробу',
    descriptionUkr:
      'Для тих, хто хоче поглянути на свій гардероб під іншим, стильним і перспективним кутом.',
    fullDescriptionUkr: [
      'Проводимо анкетування.',
      'Аналізуємо ваш гардероб.',
      'Враховуємо ваші побажання щодо нового гардеробу',
      'Підбираємо речі, яких не вистачає у вашій шафі.',
      'Створюємо стильні образи, котрі пасуватимуть саме вам і вашій фігурі й відповідатимуть вашому смаку.',
      'Надаю промокоди на знижки для заощадження коштів під час шопінгу.',
    ],
    resultUkr:
      'В обрану вами дату ви отримаєте файл з розбіром гардеробу, у якому буде до 100 образів, аналіз гардеробу і поради щодо особистого стилю.',
  },
  {
    id: '3',
    name: 'Wardrobe analysis OFFLINE',
    description: 'Off-site wardrobe analysis, available in Kyiv/Odesa.',
    photoUrl: '/images/offline.jpg',
    fullDescription: [
      'We are conducting a survey.',
      'We analyze your wardrobe in person with a visit.',
      'We take into account your wishes for a new wardrobe.',
      'We create a shopping list of things that are missing in your closet.',
      'We create stylish looks that will suit you and your figure and match your taste.',
      'I provide promotional codes for discounts to save money while shopping.',
    ],
    result:
      'On the selected date, you will receive a file with a wardrobe analysis that will contain from 40 to 100 looks, wardrobe analysis, a “Shopping List” and personal style tips.',
    price: '540',
    oldPrice: '',
    offlinePrice: '',
    onlinePrice: '',
    nameUkr: 'Розбір гардеробу OFFLINE Одеса/Київ',
    descriptionUkr: 'Виїзний аналіз гардеробу, доступний у Києві/Одесі.',
    fullDescriptionUkr: [
      'Проводимо анкетування.',
      'Аналізуємо ваш гардероб особисто з виїздом.',
      'Враховуємо ваші побажання щодо нового гардеробу',
      'Створюємо шопінг лист речей, яких не вистачає у вашій шафі.',
      'Створюємо стильні образи, котрі пасуватимуть саме вам і вашій фігурі й відповідатимуть вашому смаку.',
      'Надаю промокоди на знижки для заощадження коштів під час шопінгу.',
    ],
    resultUkr:
      'В обрану дату ви отримаєте файл з розбіром гардеробу, у якому буде від 40 до 100 образів, аналіз гардеробу, «Шопінг лист» і поради щодо особистого стилю.',
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
      'I provide promotional codes for discounts to save money while shopping.',
    ],
    result:
      'Entrust me with your image in important moments. You no longer need to guess what to wear to a conference/photo shoot/graduation or wedding, I will be happy to select up to 10 outfits for you.',
    price: '160',
    oldPrice: '320',
    offlinePrice: '',
    onlinePrice: '',
    nameUkr: 'Підбір образу на подію',
    descriptionUkr:
      'Я допоможу вам зробити день вашої події неперевершеним завдяки особливому образу, який буде індивідуально підібраний для вас.',
    fullDescriptionUkr: [
      'Проводимо анкетування.',
      'Враховую ваші побажання та особливості фігури.',
      'Підбираю образи на важливу для вас подію(весілля/день народження/фотосесія і тп).',
      'Підбираю до 10 варіантів образів(включно зі взуттям та аксесуарами) і надаю посилання на них.',
      'Надаю промокоди на знижки для заощадження коштів під час шопінгу.',
    ],
    resultUkr:
      'Довірте ваш образ у важливі моменти мені. Вам більше не потрібно гадати що одягнути на конференцію/фотосесію/випускний чи весілля, я з радістю підберу до 10 варіантів образів для вас.',
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
      'I provide promotional codes for discounts to save money while shopping.',
    ],
    result:
      'On the selected date, you will receive a file with a “Capsule Wardrobe” containing 50 looks and personal style tips.',
    price: '180',
    oldPrice: '360',
    offlinePrice: '',
    onlinePrice: '',
    nameUkr: 'Капсульний гардероб',
    descriptionUkr:
      'Для тих, хто цінує простір в гардеробі та шукає оптимальну функціональність і економію часу в повсякденному житті для холодної або теплої пори року.',
    fullDescriptionUkr: [
      'Проводимо анкетування для кращого розуміння ваших потреба та стилітсичних побажань.',
      'Підбираємо речі виключно за вашим смаком з урахуванням особливостей вашої фігури та обраного цінового сегменту (українські бренди/масмаркет/мідл/люкс).',
      'Підбираємо від 10 до 15 речей, що створюють повноцінний гардероб на холодний або теплий сезон.',
      'Надаю промокоди на знижки для заощадження коштів під час шопінгу.',
    ],
    resultUkr:
      'В обрану дату ви отримаєте файл з "Капсульним гардеробом", у якому буде 50 образів і порад щодо особистого стилю.',
  },
  {
    id: '6',
    name: 'Mini capsule',
    description:
      'For those who value wardrobe space and want to have 15-20 incredibly amazing looks from 5-8 clothes.',
    photoUrl: '/images/mini-capsule.jpg',
    fullDescription: [
      'We conduct a survey to better understand your needs and style preferences.',
      'We select items exclusively according to your taste, taking into account the characteristics of your figure and the chosen price segment (Ukrainian brands/market/mid-range/luxury).',
      'We select from 5 to 8 items that create an impressive 15-20 looks.',
      'I provide promotional codes for discounts to save money while shopping.',
    ],
    result:
      'On the selected date, you will receive a file with a “Mini Capsule” containing 15 to 20 looks and personal style tips.',
    price: '150',
    oldPrice: '',
    offlinePrice: '',
    onlinePrice: '',
    nameUkr: 'Міні капсула',
    descriptionUkr:
      'Для тих, хто цінує простір в гардеробі і хоче мати 15-20 неймовірно приголомшливих образів з всього-на-всього 5-8 речей.',
    fullDescriptionUkr: [
      'Проводимо анкетування для кращого розуміння ваших потреба та стилітсичних побажань.',
      'Підбираємо речі виключно за вашим смаком з урахуванням особливостей вашої фігури та обраного цінового сегменту (українські бренди/масмаркет/мідл/люкс).',
      'Підбираємо від 5 до 8 речей, що створюють вражаючі 15-20 образів.',
      'Надаю промокоди на знижки для заощадження коштів під час шопінгу.',
    ],
    resultUkr:
      'В обрану дату ви отримаєте файл з "Міні капсулою", у якому буде від 15 до 20 образів і порад щодо особистого стилю.',
  },
  {
    id: '7',
    name: 'Shopping together',
    description:
      'We are going to shop and buy clothes together, I will teach you how to choose clothes for your body type.',
    photoUrl: '/images/shopping-together.jpg',
    fullDescription: [
      'We are conducting a survey.',
      'We make a list of things we want to pick up.',
      'We go shopping together (Odesa/Kyiv).',
      'During the shopping, I will teach you how to choose things that fit your figure.',
      'I will reveal the secrets of economical shopping and advise on any stylistic issues.',
      'I provide promotional codes for discounts to save money while shopping.',
    ],
    result:
      'We pick up all the necessary things, if we dont find something, I pick it up online and send the list to you. The service is followed by a free online consultation for 30 days.',
    price: '500',
    oldPrice: '',
    offlinePrice: '',
    onlinePrice: '',
    nameUkr: 'Шопінг супровід',
    descriptionUkr:
      'Ми будемо разом ходити по магазинах і купувати одяг, я навчу тебе підбирати одяг саме під твій тип фігури.',
    fullDescriptionUkr: [
      'Проводимо анкетування.',
      'Складаємо список з речей котрі хочемо підібрати.',
      'Вирушаємо разом на шопінг(Одеса/Київ).',
      'Під час шопінгу я навчу підбирати речі саме під вашу фігуру.',
      'Розкрию секрети економного шопінгу та проконсультую з приводу будь-яких стилістичних питань.',
      'Надаю промокоди на знижки для заощадження коштів під час шопінгу.',
    ],
    resultUkr:
      'Підбираємо усі необхідні речі, якщо чогось не знайдемо - я підбираю цю річ онлайн і відправляю список на замовлення. Після послуги діє безкоштовне онлайн консультування протягом 30 днів.',
  },
]

export default services
