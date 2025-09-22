import { configureStore } from '@reduxjs/toolkit'
import sidebarReducer from './features/sidebarSlice'
import menuGroupReducer from './features/menuGroupSlice'
import menuItemsReducer from './features/menuItemsSlice'

export const store = configureStore({
  reducer: { sidebarReducer, menuGroupReducer, menuItemsReducer },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
