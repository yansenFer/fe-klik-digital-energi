import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../store'
import { IMenuGroup } from '@/interfaces/IMenuGroup'

interface SidebarState {
  menuGroup: IMenuGroup[]
  isEdit: boolean
  name: string
}

const initialState: SidebarState = {
  menuGroup: [],
  isEdit: false,
  name: '',
}

export const menuGroupSlice = createSlice({
  name: 'menuGroup',
  initialState,
  reducers: {
    setMenuGroup: (state, action: PayloadAction<IMenuGroup>) => {
      state.menuGroup.push(action.payload)
    },
    setIsEdit: (state, action: PayloadAction<boolean>) => {
      state.isEdit = action.payload
    },
    setIdName: (state, action: PayloadAction<string>) => {
      state.name = action.payload
    },
    onDeleteMenuGroup: (state, action: PayloadAction<IMenuGroup>) => {
      const filter = state.menuGroup.filter(
        (find) => find.name !== action.payload.name
      )
      state.menuGroup = filter
    },
    editMenuGroup: (
      state,
      action: PayloadAction<{
        name: string
        data: IMenuGroup
      }>
    ) => {
      const { name, data } = action.payload
      const group = state.menuGroup.find((find) => find.name === name)

      if (group && name === data.name) {
        group.name = data.name
        group.description = data.description

        state.name = ''
        state.isEdit = false
      } else {
        const isDuplicate = state.menuGroup.find(
          (find) => find.name === data.name
        )
        if (group && !isDuplicate) {
          group.name = data.name
          group.description = data.description
          state.name = ''
          state.isEdit = false
        } else {
          alert('Nama menu sudah pernah di input')
        }
      }
    },
    hydrate: (state, action: PayloadAction<IMenuGroup[]>) => {
      state.menuGroup = action.payload
    },
  },
})

export const {
  setMenuGroup,
  editMenuGroup,
  setIsEdit,
  onDeleteMenuGroup,
  setIdName,
} = menuGroupSlice.actions

export const selectCount = (state: RootState) =>
  state.menuGroupReducer.menuGroup

export default menuGroupSlice.reducer
