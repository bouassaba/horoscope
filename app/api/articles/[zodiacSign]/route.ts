import { NextRequest } from 'next/server'
import { GetByZodiacSignOptions, getByZodiacSign } from '@/services/article'

export async function GET(
  request: NextRequest,
  { params }: { params: GetByZodiacSignOptions },
) {
  const searchParams = request.nextUrl.searchParams
  const language = searchParams.get('language') as string | undefined
  const result = await getByZodiacSign({ ...params, language })
  return Response.json(result, { status: 200 })
}
