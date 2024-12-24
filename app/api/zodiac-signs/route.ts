import { getAll } from '@/services/zodiac-sign'

export async function GET() {
  return Response.json(await getAll(), { status: 200 })
}
