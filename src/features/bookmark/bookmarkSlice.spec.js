import reducer, { bookmarkAdded, bookmarkRemoved } from './bookmarkSlice'

test('should return the initial state', () => {
  expect(reducer(undefined, {})).toEqual([])
})

test('should add a bookmark to an empty list', () => {
  const previousState = []
  expect(
    reducer(previousState, bookmarkAdded({ title: 'Sample title' }))
  ).toEqual([{ title: 'Sample title' }])
})

test('should add a bookmark to an existing list', () => {
  const previousState = [{ title: 'Sample title 1' }]

  expect(
    reducer(previousState, bookmarkAdded({ title: 'Sample title 2' }))
  ).toEqual([{ title: 'Sample title 1' }, { title: 'Sample title 2' }])
})

test('should remove a bookmark by title', () => {
  const previousState = [
    { title: 'Sample title 1' },
    { title: 'Sample title 2' },
  ]

  expect(reducer(previousState, bookmarkRemoved('Sample title 1'))).toEqual([
    { title: 'Sample title 2' },
  ])
})
