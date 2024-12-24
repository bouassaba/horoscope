import { type NextRequest } from 'next/server'
import {
  GetByZodiacSignAndDateOptions,
  getByZodiacSignAndDate,
} from '@/services/article'

export async function GET(
  request: NextRequest,
  { params }: { params: GetByZodiacSignAndDateOptions },
) {
  const searchParams = request.nextUrl.searchParams
  const language = searchParams.get('language') as string | undefined
  const article = await getByZodiacSignAndDate({ ...params, language })
  if (article) {
    return Response.json(article, { status: 200 })
  } else {
    return new Response(null, { status: 404 })
  }
}
