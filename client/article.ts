import { API_URL } from '@/config'
import { ArticleDTO } from '@/types'

export type FetchByZodiacSignOptions = {
  zodiacSign: string
  language?: string
}

export async function fetchByZodiacSign({
  zodiacSign,
  language,
}: FetchByZodiacSignOptions): Promise<ArticleDTO | undefined> {
  const params = new URLSearchParams()
  if (language) {
    params.append('language', language)
  }
  const url = `${API_URL}/api/articles/${zodiacSign}?${params}`
  const response = await fetch(url)
  if (response.ok) {
    return response.json()
  }
}

export type FetchByZodiacSignAndDateOptions = {
  zodiacSign: string
  date: string
  language?: string
}

export async function fetchByZodiacSignAndDate({
  zodiacSign,
  date,
  language,
}: FetchByZodiacSignAndDateOptions): Promise<ArticleDTO | undefined> {
  const params = new URLSearchParams()
  if (language) {
    params.append('language', language)
  }
  const url = `${API_URL}/api/articles/${zodiacSign}/${date}?${params}`
  const response = await fetch(url)
  if (response.ok) {
    return response.json()
  }
}
