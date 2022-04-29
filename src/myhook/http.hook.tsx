import { useState } from 'react'
import { useCallback } from 'react'

export const useHttp = () => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const request = useCallback(
    async (url: string, method: string = 'GET', body?: object | string, headers?: HeadersInit) => {
      headers = new Headers()
      setLoading(true)
      try {
        if (body) {
          body = JSON.stringify(body)
          headers.set('Content-Type', 'application/json')
        }
        const response = await fetch(url, { method, body, headers })
        const data = await response.json()

        if (!response.ok) {
          throw new Error(data.message || 'Something went wrong')
        }
        setLoading(false)
      } catch (e: any) {
        setLoading(false)
        setError(e.message)
      }
    },
    [],
  )

  const clearError = () => setError(null)

  return { loading, request, error, clearError }
}
