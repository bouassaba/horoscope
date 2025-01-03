import { API_URL } from '@/config'
import { ZodiacSignDTO } from '@/types'

export type FetchAllOptions = {
  language?: string
}

export async function fetchAll({
  language,
}: FetchAllOptions): Promise<ZodiacSignDTO[] | undefined> {
  const params = new URLSearchParams()
  if (language) {
    params.append('language', language)
  }
  const url = `${API_URL}/api/zodiac-signs?${params}`
  const response = await fetch(url)
  if (response.ok) {
    return response.json()
  }
}

export type FetchBySlugOptions = {
  slug: string
  language?: string
}

export async function fetchBySlug({
  slug,
  language,
}: FetchBySlugOptions): Promise<ZodiacSignDTO | undefined> {
  const params = new URLSearchParams()
  if (language) {
    params.append('language', language)
  }
  const url = `${API_URL}/api/zodiac-signs/${slug}?${params}`
  const response = await fetch(url)
  if (response.ok) {
    return response.json()
  }
}
