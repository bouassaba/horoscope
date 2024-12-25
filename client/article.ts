import { API_URL } from '@/config'
import { ArticleDTO } from '@/types'

export type FetchByZodiacSignOptions = {
  slug: string
  language?: string
}

export async function fetchByZodiacSign({
  slug,
  language,
}: FetchByZodiacSignOptions): Promise<ArticleDTO | undefined> {
  const params = new URLSearchParams()
  if (language) {
    params.append('language', language)
  }
  const url = `${API_URL}/api/articles/${slug}?${params}`
  const response = await fetch(url)
  if (response.ok) {
    return response.json()
  }
}

export type FetchByZodiacSignAndDateOptions = {
  slug: string
  date: string
  language?: string
}

export async function fetchByZodiacSignAndDate({
  slug,
  date,
  language,
}: FetchByZodiacSignAndDateOptions): Promise<ArticleDTO | undefined> {
  const params = new URLSearchParams()
  if (language) {
    params.append('language', language)
  }
  const url = `${API_URL}/api/articles/${slug}/${date}?${params}`
  const response = await fetch(url)
  if (response.ok) {
    return response.json()
  }
}
