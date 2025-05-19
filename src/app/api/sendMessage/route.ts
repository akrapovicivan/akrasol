import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
    try {
        const { formData } = await req.json();

        if (!formData?.email || !formData?.name || !formData?.message) {
            return NextResponse.json({ message: "Missing required fields" }, { status: 400 });
        }

        const response = await resend.emails.send({
            from: "Solar Inquiry <onboarding@resend.dev>",
            to: [process.env.EMAIL_TO!],
            subject: "New Solar Panel Message",
            text: `
        A new message has been submitted:

        Name: ${formData.name}
        Email: ${formData.email}
        Message: ${formData.message}
      `,
        });

        return NextResponse.json({ message: "Inquiry sent successfully!" });
    } catch (error: any) {
        console.error("Resend email failed:", error);
        return NextResponse.json({ message: "Failed to send the inquiry." }, { status: 500 });
    }
}
