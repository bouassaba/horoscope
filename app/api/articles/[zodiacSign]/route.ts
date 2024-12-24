import { NextRequest } from 'next/server'
import { GetByZodiacSignOptions, getByZodiacSign } from '@/services/article'

export async function GET(
  request: NextRequest,
  { params }: { params: GetByZodiacSignOptions },
) {
  const searchParams = request.nextUrl.searchParams
  const locale = searchParams.get('locale') as string | undefined
  const article = await getByZodiacSign({ ...params, locale })
  return Response.json(article, { status: 200 })
}
