interface Value {
  id: string
  valueText: string
}

const values: Value[] = [
  {
    id: '01',
    valueText:
      'I recognize your uniqueness and individuality and avoid copying my own style.',
  },
  {
    id: '02',
    valueText:
      'I build your confidence not only in your choice of clothes, but also in your own personality.',
  },
  {
    id: '03',
    valueText:
      'I create the atmosphere that encourages positive change, inspiring you to improve',
  },
]

const valuelist: Value[] = values.map((value) => ({
  id: value.id,
  valueText: value.valueText,
}))

export default valuelist
