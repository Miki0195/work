import { NextRequest, NextResponse } from 'next/server'

// In-memory storage for demo purposes
// TODO: Replace with actual database integration (e.g., PostgreSQL, MongoDB, Supabase)
const leads: any[] = []

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    // Validate required fields
    const { name, email, company, budget, message } = body
    
    if (!name || !email || !company || !budget || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Create lead object
    const lead = {
      id: Date.now().toString(),
      name,
      email,
      company,
      budget,
      message,
      createdAt: new Date().toISOString(),
      status: 'new',
    }

    // Store in memory (for demo)
    leads.push(lead)

    // Log to console for development
    console.log('📧 New lead received:', lead)

    // TODO: Integrate with your CRM or email service
    // Examples:
    // - Send email notification to sales team
    // - Add to HubSpot, Salesforce, etc.
    // - Send confirmation email to lead
    // - Trigger Slack notification
    // - Store in database

    // Example: Send email with Resend or SendGrid
    // await sendEmail({
    //   to: 'sales@yourcompany.com',
    //   subject: `New lead from ${name} at ${company}`,
    //   body: `
    //     Name: ${name}
    //     Email: ${email}
    //     Company: ${company}
    //     Budget: ${budget}
    //     Message: ${message}
    //   `
    // })

    return NextResponse.json(
      { success: true, lead },
      { status: 200 }
    )
  } catch (error) {
    console.error('Error processing lead:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

// Optional: GET endpoint to view leads (for development only)
// Remove in production or add authentication
export async function GET() {
  return NextResponse.json({ leads, count: leads.length })
}
