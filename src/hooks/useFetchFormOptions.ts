import axios from "axios"
import { useEffect, useState } from "react"
import type { Laboratorio, Propriedade } from "../types"

export function useFetchFormOptions() {
  const [propriedades, setPropriedades] = useState<Propriedade[]>([])
  const [laboratorios, setLaboratorios] = useState<Laboratorio[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<Error | null>(null)

  useEffect(() => {
    async function fetchData() {
      try {
        const [propRes, labRes] = await Promise.all([
          axios.get<Propriedade[]>('https://bitbucket.org/agrotis/teste-rh/raw/3bc797776e54586552d1c9666fd7c13366fc9548/teste-front-end-1/propriedades.json'),
          axios.get<Laboratorio[]>('https://bitbucket.org/agrotis/teste-rh/raw/3bc797776e54586552d1c9666fd7c13366fc9548/teste-front-end-1/laboratorios.json'),
        ])
        setPropriedades(propRes.data)
        setLaboratorios(labRes.data)
      } catch (err) {
        setError(err as Error)
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [])

  return { propriedades, laboratorios, loading, error }
}
