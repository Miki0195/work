import { NextResponse } from "next/server";
import { contactSchema } from "@/lib/validations/contact";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    // Validate the request body
    const result = contactSchema.safeParse(body);
    
    if (!result.success) {
      return NextResponse.json(
        { error: "Érvénytelen adatok", details: result.error.errors },
        { status: 400 }
      );
    }

    // In a real application, you would:
    // 1. Send an email notification
    // 2. Save to database
    // 3. Add to CRM
    // 4. Send to Slack/Discord webhook
    
    // Mock success response
    console.log("Contact form submission:", result.data);

    return NextResponse.json(
      { message: "Sikeres küldés! Hamarosan felvesszük veled a kapcsolatot." },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Szerver hiba. Kérlek próbáld újra később." },
      { status: 500 }
    );
  }
}
