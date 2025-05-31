import { createContext, useContext, useState } from 'react'

interface SnackbarMessage {
  open: boolean
  message: string
}

interface SnackbarContextType {
  snackbarMessage: SnackbarMessage
  setSnackbarMessage: (msg: SnackbarMessage) => void
  handleSnackbarClose: () => void
}

const SnackbarContext = createContext<SnackbarContextType | undefined>(undefined)

export const SnackbarProvider = ({ children }: { children: React.ReactNode }) => {
  const [snackbarMessage, setSnackbarMessage] = useState<SnackbarMessage>({
    open: false,
    message: '',
  })

  const handleSnackbarClose = () => {
    setSnackbarMessage(prev => ({ ...prev, open: false }))
  }

  return (
    <SnackbarContext.Provider value={{ snackbarMessage, setSnackbarMessage, handleSnackbarClose }}>
      {children}
    </SnackbarContext.Provider>
  )
}

export const useSnackbarContext = () => {
  const context = useContext(SnackbarContext)
  if (!context) {
    throw new Error('useSnackbarContext deve ser usado dentro de SnackbarProvider')
  }
  return context
}
