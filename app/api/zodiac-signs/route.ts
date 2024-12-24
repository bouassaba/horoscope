import { type NextRequest } from 'next/server'
import { getAll } from '@/services/zodiac-sign'
import { ZodiacSignDTO } from '@/types'

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams
  const locale = searchParams.get('locale') as string | undefined
  const zodiacSigns: ZodiacSignDTO[] = await getAll({ locale })
  return Response.json(zodiacSigns, { status: 200 })
}
