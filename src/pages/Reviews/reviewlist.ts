interface Review {
  id: string
  name: string
  reviewText: string
}

const reviews: Review[] = [
  {
    id: '1',
    name: 'Marina',
    reviewText:
      'Thank you very much for such incredible images and for the fact that I can save time and nerves from shopping.',
  },
  {
    id: '2',
    name: 'Polina',
    reviewText:
      "I really like it, thank you, it's just divine. The images that we created with only my things in the onsovno are my images for the day, but they did not display the accessories that you added, as I asked, so now I will experiment and try to add new images. Thank you very much, I want to order a mini capsule from you for the summer, because there are also problems with the summer wardrobe.",
  },
  {
    id: '3',
    name: 'Elena',
    reviewText:
      "I want to say thank you Liz, because now my life will be much easier and I don't have to worry about things for the whole working week.",
  },
  {
    id: '4',
    name: 'Victoria',
    reviewText:
      'Thank you, it is very beautiful and as I wanted - it is unusual and feminine.',
  },
]

const reviewlist: Review[] = reviews.map((review) => ({
  id: review.id,
  name: review.name,
  reviewText: review.reviewText,
}))

export default reviewlist
