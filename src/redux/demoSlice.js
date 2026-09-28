import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  bookings: [],
}

const demoSlice = createSlice({
  name: 'demo',
  initialState,
  reducers: {
    addBooking: (state, action) => {
      state.bookings.push(action.payload)
    },
    removeBooking: (state, action) => {
      state.bookings = state.bookings.filter(
        (booking) => booking.id !== action.payload,
      )
    },
  },
})

export const { addBooking, removeBooking } = demoSlice.actions
export default demoSlice.reducer
