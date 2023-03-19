'use client'

import { configureStore } from '@reduxjs/toolkit'
import counterSlice from './counterSlice'
import userReduce from './userSlice'

export const store = configureStore({
	reducer: {
		user: userReduce,
		counter: counterSlice,
	},
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
