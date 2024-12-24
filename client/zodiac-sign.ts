import { API_URL } from '@/config'
import { ZodiacSignDTO } from '@/types'

export type FetchAllOptions = {
  language?: string
}

export async function fetchAll({
  language,
}: FetchAllOptions): Promise<ZodiacSignDTO[]> {
  const params = new URLSearchParams()
  if (language) {
    params.append('language', language)
  }
  const url = `${API_URL}/api/zodiac-signs?${params}`
  const response = await fetch(url)
  if (!response.ok) {
    throw new Error(`GET ${url} failed with status: ${response.status}`)
  }
  return response.json()
}
