import { createContext, useContext, useState } from 'react'
import type { ReactNode } from 'react'
import type { FormData } from '../types'

type FormContextType = {
  dataList: FormData[]
  setDataList: React.Dispatch<React.SetStateAction<FormData[]>>
  addData: (data: FormData) => void
  updateData: (updated: FormData) => void
  editingItem: FormData | null
  setEditingItem: (item: FormData | null) => void
}


const FormContext = createContext<FormContextType | undefined>(undefined)

export const FormProvider = ({ children }: { children: ReactNode }) => {
  const [dataList, setDataList] = useState<FormData[]>([])
  const [editingItem, setEditingItem] = useState<FormData | null>(null)

  const addData = (data: FormData) => {
    setDataList(prev => [...prev, data])
  }

  const updateData = (updated: FormData) => {
    setDataList(prev =>
      prev.map(item =>
        item.id === updated.id ? updated : item
      )
    )
    setEditingItem(null)
  }

  return (
    <FormContext.Provider
      value={{
        dataList,
        setDataList,
        addData,
        updateData,
        editingItem,
        setEditingItem
      }}
    >
      {children}
    </FormContext.Provider>
  )
}

export const useFormContext = () => {
  const context = useContext(FormContext)
  if (!context) throw new Error('useFormContext must be used within FormProvider')
  return context
}
