import { createContext, useContext, useMemo, useState } from 'react'

const BatchContext = createContext(null)

export function BatchProvider({ children }) {
  const [selectedMode, setSelectedMode] = useState('Online')

  const value = useMemo(
    () => ({ selectedMode, setSelectedMode }),
    [selectedMode],
  )

  return <BatchContext.Provider value={value}>{children}</BatchContext.Provider>
}

export function useBatch() {
  const context = useContext(BatchContext)

  if (!context) {
    throw new Error('useBatch must be used inside BatchProvider')
  }

  return context
}
