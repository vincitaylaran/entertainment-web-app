import { createSlice } from '@reduxjs/toolkit'
import data from '../../data.json'

const initialState = data

const catalogueSlice = createSlice({
  name: 'catalogue',
  initialState,
  reducers: {
    catalogueSearched(state, action) {
      return [...state].filter((item) => item.title === action.payload)
    },
  },
})

export const { catalogueSearched } = catalogueSlice.actions

export default catalogueSlice
