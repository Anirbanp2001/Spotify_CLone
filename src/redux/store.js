import { configureStore } from '@reduxjs/toolkit'

import playerReducer from './musicPlayerSlice'

export const store = configureStore(
    {
        reducer:{
            player2:playerReducer
} })