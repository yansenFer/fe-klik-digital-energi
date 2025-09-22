import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../store'
import { IMenuItems } from '@/interfaces/IMenuItems'

interface SidebarState {
  menuItems: IMenuItems[]
  isEdit: boolean
  name: string
  nameGroup: string
}

const initialState: SidebarState = {
  menuItems: [],
  isEdit: false,
  name: '',
  nameGroup: '',
}

export const menuItemsSlice = createSlice({
  name: 'menuItems',
  initialState,
  reducers: {
    setMenuItems: (state, action: PayloadAction<IMenuItems>) => {
      state.menuItems.push(action.payload)
    },
    setIsEdit: (state, action: PayloadAction<boolean>) => {
      state.isEdit = action.payload
    },
    setIdName: (state, action: PayloadAction<string>) => {
      state.name = action.payload
    },
    setIdNameGroup: (state, action: PayloadAction<string>) => {
      state.nameGroup = action.payload
    },
    onDeleteMenuItems: (state, action: PayloadAction<IMenuItems>) => {
      state.menuItems = state.menuItems.filter(
        (item) =>
          !(
            item.name === action.payload.name &&
            item.nameGroup === action.payload.nameGroup
          )
      )
    },
    editMenuItems: (
      state,
      action: PayloadAction<{
        name: string
        nameGroup: string
        data: IMenuItems
      }>
    ) => {
      const { name, nameGroup, data } = action.payload
      const group = state.menuItems.find(
        (find) => find.name === name && find.nameGroup === nameGroup
      )

      if (group && name === data.name && nameGroup === data.nameGroup) {
        group.name = data.name
        group.description = data.description
        group.nameGroup = data.nameGroup

        state.name = ''
        state.isEdit = false
      } else {
        const isDuplicate = state.menuItems.find(
          (find) => find.name === data.name && find.nameGroup === data.nameGroup
        )
        if (group && !isDuplicate) {
          group.name = data.name
          group.nameGroup = data.nameGroup
          group.description = data.description
          state.name = ''
          state.isEdit = false
        } else {
          alert('Nama menu sudah pernah di input')
        }
      }
    },
    hydrate: (state, action: PayloadAction<IMenuItems[]>) => {
      state.menuItems = action.payload
    },
  },
})

export const {
  setMenuItems,
  editMenuItems,
  setIsEdit,
  onDeleteMenuItems,
  setIdNameGroup,
  setIdName,
} = menuItemsSlice.actions

export const selectCount = (state: RootState) =>
  state.menuItemsReducer.menuItems

export default menuItemsSlice.reducer
