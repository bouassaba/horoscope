import { type NextRequest } from 'next/server'
import { getAll } from '@/services/zodiac-sign'

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams
  const language = searchParams.get('language') as string | undefined
  const result = await getAll({ language })
  return Response.json(result, { status: 200 })
}
