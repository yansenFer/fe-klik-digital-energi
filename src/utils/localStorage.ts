/* eslint-disable @typescript-eslint/no-explicit-any */
// localStorage.ts
export const loadState = () => {
  try {
    const serializedState = localStorage.getItem('appState')
    if (serializedState === null) return undefined
    return JSON.parse(serializedState)
  } catch (err) {
    console.log(err, 'error load log')
    return undefined
  }
}

export const saveState = (state: any) => {
  try {
    const serializedState = JSON.stringify(state)
    localStorage.setItem('appState', serializedState)
  } catch (err) {
    console.error('Error saving state:', err)
  }
}
