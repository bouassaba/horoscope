import { API_URL } from '@/config'
import { ZodiacSignDTO } from '@/types'

export async function fetchAll(): Promise<ZodiacSignDTO[]> {
  const url = `${API_URL}/api/zodiac-signs`
  const response = await fetch(url)
  if (!response.ok) {
    throw new Error(`GET ${url} failed with status: ${response.status}`)
  }
  return response.json()
}
