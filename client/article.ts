import { API_URL } from '@/config'
import { ArticleDTO } from '@/types'

export type FetchByZodiacSignOptions = {
  zodiacSign: string
}

export async function fetchByZodiacSign({
  zodiacSign,
}: FetchByZodiacSignOptions): Promise<ArticleDTO> {
  const url = `${API_URL}/api/articles/${zodiacSign}`
  const response = await fetch(url)
  if (!response.ok) {
    throw new Error(`GET ${url} failed with status: ${response.status}`)
  }
  return response.json()
}

export type FetchByZodiacSignAndDateOptions = {
  zodiacSign: string
  date: string
}

export async function fetchByZodiacSignAndDate({
  zodiacSign,
  date,
}: FetchByZodiacSignAndDateOptions): Promise<ArticleDTO> {
  const url = `${API_URL}/api/articles/${zodiacSign}/${date}`
  const response = await fetch(url)
  if (!response.ok) {
    throw new Error(`GET ${url} failed with status: ${response.status}`)
  }
  return response.json()
}
