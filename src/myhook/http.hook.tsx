import { useState } from 'react'
import { useCallback } from 'react'

export const useHttp = () => {
  const [loading, setLoading] = useState(false)

  const request = useCallback(
    async (url: string, method: string = 'GET', body?: object | string, headers?: HeadersInit) => {
      if (method === 'GET' && body) {
        return
      }

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
      }
    },
    [],
  )

  return { loading, request }
}
