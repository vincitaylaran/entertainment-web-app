import reducer, { catalogueSearched } from './catalogueSlice'
import data from '../../data.json'

test('should be using mock data for initial state', () => {
  expect(reducer(undefined, {})).toEqual(data)
})

test('should return the correct results when searching by catalogue item title', () => {
  const sampleQuery = 'Earth'
  const output = reducer(data, catalogueSearched(sampleQuery))

  output.forEach((item) => {
    const { title } = item
    expect(title.toLowerCase()).toContain(sampleQuery.toLowerCase())
  })
})

test('should return the correct results if query string has bad casing', () => {
  const sampleQueryWithBadCasing = 'eArTh'
  const output = reducer(data, catalogueSearched(sampleQueryWithBadCasing))

  output.forEach((item) => {
    const { title } = item
    expect(title.toLowerCase()).toContain(
      sampleQueryWithBadCasing.toLowerCase()
    )
  })
})
