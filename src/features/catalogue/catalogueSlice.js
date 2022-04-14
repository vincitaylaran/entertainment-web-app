export default function catalogueReducer(state = [], action) {
  switch (action.type) {
    case 'catalogue/catalogueSearched': {
      // Sample search query: "Beyond Earth"
      // Only searched by title
      // Will work on full search capabilities later
      return [...state].filter((item) => item.title === action.payload)
    }
    default:
      return state
  }
}
