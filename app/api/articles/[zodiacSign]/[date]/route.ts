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
  const locale = searchParams.get('locale') as string | undefined
  const article = await getByZodiacSignAndDate({ ...params, locale })
  return Response.json(article, { status: 200 })
}
