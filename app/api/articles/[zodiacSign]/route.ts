import { NextRequest } from 'next/server'
import { GetByZodiacSignOptions, getByZodiacSign } from '@/services/article'

export async function GET(
  _: NextRequest,
  { params }: { params: GetByZodiacSignOptions },
) {
  return Response.json(await getByZodiacSign(params), { status: 200 })
}
