import { type NextRequest } from 'next/server'
import { getBySlug, GetBySlugOptions } from '@/services/zodiac-sign'

export async function GET(
  request: NextRequest,
  { params }: { params: GetBySlugOptions },
) {
  const searchParams = request.nextUrl.searchParams
  const language = searchParams.get('language') as string | undefined
  const article = await getBySlug({ ...params, language })
  if (article) {
    return Response.json(article, { status: 200 })
  } else {
    return new Response(null, { status: 404 })
  }
}
