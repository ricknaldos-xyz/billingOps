import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'

const demoRequestSchema = z.object({
  fullName: z.string().min(1),
  workEmail: z.string().email(),
  companyName: z.string().min(1),
  companySize: z.string().min(1),
  country: z.string().min(1),
  message: z.string().optional(),
})

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const validated = demoRequestSchema.parse(body)

    // TODO: Store in database or external service (Airtable, Notion, etc.)
    // TODO: Send confirmation email via Resend
    // TODO: Send notification to sales team (email + Slack)

    console.log('Demo request received:', validated)

    return NextResponse.json(
      { success: true, message: 'Demo request received' },
      { status: 201 }
    )
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: 'Validation error', details: error.errors },
        { status: 400 }
      )
    }
    console.error('Error processing demo request:', error)
    return NextResponse.json(
      { error: 'Failed to process request' },
      { status: 500 }
    )
  }
}
