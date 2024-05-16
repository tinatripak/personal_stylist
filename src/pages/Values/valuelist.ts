interface Value {
  id: string
  valueText: string
}

const values: Value[] = [
  {
    id: '01',
    valueText:
      'I acknowledge and celebrate your distinctiveness, steering clear of imitating someone elseʼs style.',
  },
  {
    id: '02',
    valueText:
      'I bolster your confidence in both your wardrobe selections and your innate personality.',
  },
  {
    id: '03',
    valueText:
      'I foster an environment that motivates positive transformation, inspiring you to strive for improvement.',
  },
]

const valuelist: Value[] = values.map((value) => ({
  id: value.id,
  valueText: value.valueText,
}))

export default valuelist
