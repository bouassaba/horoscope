import { type NextRequest } from 'next/server'
import {
  GetByZodiacSignAndDate,
  getByZodiacSignAndDate,
} from '@/services/article'

export async function GET(
  _: NextRequest,
  { params }: { params: GetByZodiacSignAndDate },
) {
  return Response.json(await getByZodiacSignAndDate(params), { status: 200 })
}
