import { useState } from 'react'

export function useModalObservacoesPropriedades() {
  const [openObservacoes, setOpenObservacoes] = useState(false)
  const [observacoes, setObservacoes] = useState('')

  const [openPropriedades, setOpenPropriedades] = useState(false)
  const [propriedades, setPropriedades] = useState<{ nome: string }[]>([])

  const handleAbrirObservacoes = (texto: string) => {
    setObservacoes(texto)
    setOpenObservacoes(true)
  }

  const handleAbrirPropriedades = (lista: { nome: string }[]) => {
    setPropriedades(lista)
    setOpenPropriedades(true)
  }

  return {
    openObservacoes,
    observacoes,
    setOpenObservacoes,
    handleAbrirObservacoes,
    openPropriedades,
    propriedades,
    setOpenPropriedades,
    handleAbrirPropriedades,
  }
}
