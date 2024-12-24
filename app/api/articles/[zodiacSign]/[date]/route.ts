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
  const result = await getByZodiacSignAndDate({ ...params, language })
  return Response.json(result, { status: 200 })
}
