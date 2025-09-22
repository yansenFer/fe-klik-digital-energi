'use client'
import { Provider } from 'react-redux'
import { useEffect } from 'react'
import { store } from '@/lib/store'

export default function StoreProvider({
  children,
}: {
  children: React.ReactNode
}) {
  useEffect(() => {
    const serializedState = localStorage.getItem('appState')
    if (serializedState) {
      const parsed = JSON.parse(serializedState)
      // Dispatch hydrasi manual ke slice lo
      if (parsed.menuGroup) {
        store.dispatch({ type: 'menuGroup/hydrate', payload: parsed.menuGroup })
      }
      if (parsed.menuItems) {
        store.dispatch({ type: 'menuItems/hydrate', payload: parsed.menuItems })
      }
    }

    const unsubscribe = store.subscribe(() => {
      const state = store.getState()
      localStorage.setItem(
        'appState',
        JSON.stringify({
          menuGroup: state.menuGroupReducer.menuGroup,
          menuItems: state.menuItemsReducer.menuItems,
        })
      )
    })

    return unsubscribe
  }, [])

  return <Provider store={store}>{children}</Provider>
}
