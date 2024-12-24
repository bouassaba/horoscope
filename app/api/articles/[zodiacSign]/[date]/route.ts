import { type NextRequest } from 'next/server'
import {
  GetByZodiacSignAndDateOptions,
  getByZodiacSignAndDate,
} from '@/services/article'

export async function GET(
  _: NextRequest,
  { params }: { params: GetByZodiacSignAndDateOptions },
) {
  return Response.json(await getByZodiacSignAndDate(params), { status: 200 })
}
