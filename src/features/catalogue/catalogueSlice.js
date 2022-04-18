import { createSlice } from '@reduxjs/toolkit'
import data from '../../data.json'

const initialState = data

const catalogueSlice = createSlice({
  name: 'catalogue',
  initialState,
  reducers: {
    catalogueSearched(state, action) {
      const { payload } = action
      const keywords = payload.split(' ')

      return state.filter((item) => {
        const { title } = item
        return keywords.some((keyword) =>
          title.toLowerCase().includes(keyword.toLowerCase())
        )
      })
    },
  },
})

export const { catalogueSearched } = catalogueSlice.actions

export default catalogueSlice.reducer
