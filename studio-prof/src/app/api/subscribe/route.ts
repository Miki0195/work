import { NextResponse } from 'next/server';
import { subscribeFormSchema } from '@/lib/schemas';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    // Validate the request body
    const validatedData = subscribeFormSchema.parse(body);
    const { variant } = body;

    // Mock API delay to simulate real request
    await new Promise(resolve => setTimeout(resolve, 1000));

    // TODO: Integrate with your email service provider
    // Examples: SendGrid, Mailchimp, ConvertKit, ActiveCampaign
    // 
    // await sendgrid.send({
    //   to: validatedData.email,
    //   from: 'hello@studioprof.hu',
    //   templateId: 'welcome-email-template-id',
    //   dynamicTemplateData: {
    //     name: validatedData.name || 'Kedves Ügyfél',
    //     variant: variant,
    //   },
    // });

    // TODO: Store subscriber in your database
    // 
    // await prisma.subscriber.create({
    //   data: {
    //     email: validatedData.email,
    //     name: validatedData.name,
    //     companySize: validatedData.companySize,
    //     variant: variant,
    //     subscribedAt: new Date(),
    //   },
    // });

    // TODO: Add to CRM or marketing automation
    // 
    // await hubspot.contacts.create({
    //   properties: {
    //     email: validatedData.email,
    //     firstname: validatedData.name?.split(' ')[0],
    //     company_size: validatedData.companySize,
    //     ab_test_variant: variant,
    //   },
    // });

    // Log to console for demo purposes
    console.log('📧 New Subscription:', {
      email: validatedData.email,
      name: validatedData.name,
      companySize: validatedData.companySize,
      variant: variant,
      timestamp: new Date().toISOString(),
    });

    return NextResponse.json(
      {
        success: true,
        message: 'Subscription successful',
        data: {
          email: validatedData.email,
        },
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Subscription error:', error);

    // Handle validation errors
    if (error instanceof Error && error.name === 'ZodError') {
      return NextResponse.json(
        {
          success: false,
          message: 'Invalid form data',
          errors: error,
        },
        { status: 400 }
      );
    }

    // Handle other errors
    return NextResponse.json(
      {
        success: false,
        message: 'Internal server error',
      },
      { status: 500 }
    );
  }
}

// Handle OPTIONS request for CORS
export async function OPTIONS() {
  return NextResponse.json(
    {},
    {
      status: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type',
      },
    }
  );
}
