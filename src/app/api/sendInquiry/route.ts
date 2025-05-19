import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { userEmail, additionalInfo, formData, calculatedCost } = body;

        if (!userEmail) {
            return NextResponse.json({ message: "Email is required" }, { status: 400 });
        }

        const emailBody = `
      A new solar panel inquiry has been submitted:

      kWh Installed: ${formData.kwhInstalled || "Not specified"}
      Roof Type: ${formData.roofType === "sloped" ? "Sloped" : "Straight"}
      Roof Material: ${formData.roofMaterial || "Not specified"}
      Truck Access: ${formData.truckAccess === "yes" ? "Yes" : "No"}
      Lightning Rod: ${formData.lightningRod === "yes" ? "Yes" : "No"}
      Location: ${formData.location || "Not specified"}
      Estimated Cost: €${calculatedCost?.toLocaleString() || "Not calculated yet"}

      Additional Information: ${additionalInfo || "None provided"}

      User Email: ${userEmail}
    `;

        const response = await resend.emails.send({
            from: "Solar Inquiry <onboarding@resend.dev>",
            to: [process.env.EMAIL_TO!],
            subject: "New Solar Panel Installation Inquiry",
            text: emailBody,
        });

        return NextResponse.json({ message: "Inquiry sent successfully!" });
    } catch (error: any) {
        console.error("Resend email failed:", error);
        return NextResponse.json({ message: "Failed to send the inquiry." }, { status: 500 });
    }
}
