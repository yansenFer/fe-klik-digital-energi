import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../store'

interface SidebarState {
  activeTab: string
  isMobileMenuOpen: boolean
}

const initialState: SidebarState = {
  activeTab: 'home',
  isMobileMenuOpen: false,
}

export const sidebarSlice = createSlice({
  name: 'sidebar',
  initialState,
  reducers: {
    setActiveTab: (state, action: PayloadAction<string>) => {
      state.activeTab = action.payload
    },
    setIsMobileMenuOpen: (state, action: PayloadAction<boolean>) => {
      state.isMobileMenuOpen = action.payload
    },
  },
})

export const { setActiveTab, setIsMobileMenuOpen } = sidebarSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.sidebarReducer.activeTab

export default sidebarSlice.reducer
