import { useEffect, useState } from "react"
import axios from "axios"

export function useFetchOptions<T>(url: string) {
  const [data, setData] = useState<T[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    axios.get<T[]>(url)
      .then((res) => setData(res.data))
      .catch(() => setError("Erro ao carregar dados"))
      .finally(() => setLoading(false))
  }, [url])

  return { data, loading, error }
}
