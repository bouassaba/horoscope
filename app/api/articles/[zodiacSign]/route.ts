import { NextRequest } from 'next/server'
import { GetByZodiacSign, getByZodiacSign } from '@/services/article'

export async function GET(
  _: NextRequest,
  { params }: { params: GetByZodiacSign },
) {
  return Response.json(await getByZodiacSign(params), { status: 200 })
}
