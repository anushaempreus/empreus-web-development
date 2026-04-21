import { NextResponse } from "next/server"

export async function POST(req: Request) {
  const apiKey = process.env.SENDGRID_API_KEY
  if (!apiKey) {
    return NextResponse.json({ error: "Email service not configured" }, { status: 500 })
  }

  try {
    const body = await req.json()
    const { source, ...fields } = body

    const subjectMap: Record<string, string> = {
      "it-support": "New IT Support Enquiry",
      "web-development": "New Web Development Enquiry",
      "software-development": "New Software Development Enquiry",
    }
    const subject = subjectMap[source] || "New Website Enquiry"

    const siteLabels: Record<string, string> = {
      "web-development": "Web Development",
      "software-development": "Software Development",
      "it-support": "IT Support",
    }
    const siteName = siteLabels[source] || "Website"

    const rows = Object.entries(fields)
      .filter(([, v]) => v && String(v).trim())
      .map(([k, v]) => `
        <tr>
          <td style="padding:10px 16px;background:#f9f9f9;font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:1px;color:#9ca3af;width:160px;vertical-align:top;border-bottom:1px solid #e8e3dd;">
            ${k.replace(/_/g, " ")}
          </td>
          <td style="padding:10px 16px;font-size:14px;color:#0f0d0b;font-weight:${k === "project_details" ? "400" : "600"};vertical-align:top;border-bottom:1px solid #e8e3dd;">
            ${v}
          </td>
        </tr>
      `).join("")

    const html = `
      <!DOCTYPE html>
      <html>
        <body style="margin:0;padding:40px 0;background:#f5f5f5;font-family:Arial,sans-serif;">
          <div style="max-width:600px;margin:0 auto;">
            <div style="background:#0a0908;border-radius:12px 12px 0 0;padding:32px 40px;">
              <div style="color:#f97316;font-size:22px;font-weight:900;letter-spacing:-0.5px;margin:0;">EMPREUS</div>
              <div style="color:#5a4535;font-size:11px;text-transform:uppercase;letter-spacing:2px;margin-top:4px;">${siteName}</div>
            </div>
            <div style="background:#f97316;height:4px;"></div>
            <div style="background:#ffffff;padding:40px;border-radius:0 0 12px 12px;">
              <h2 style="font-size:20px;font-weight:800;color:#0f0d0b;margin:0 0 8px;">New Enquiry — ${siteName}</h2>
              <p style="color:#6b7280;font-size:14px;margin:0 0 32px;">A new enquiry has been submitted through the ${siteName} website contact form.</p>
              <hr style="border:none;border-top:1px solid #e8e3dd;margin:0 0 24px;" />
              <table style="width:100%;border-collapse:collapse;">
                ${rows}
              </table>
              <hr style="border:none;border-top:1px solid #e8e3dd;margin:24px 0;" />
              <div style="text-align:center;">
                <a href="mailto:${fields.email || ""}"
                  style="background:#f97316;color:#ffffff;font-size:14px;font-weight:700;padding:12px 32px;border-radius:8px;text-decoration:none;display:inline-block;">
                  Reply to ${fields.first_name || "Enquirer"}
                </a>
              </div>
            </div>
            <div style="text-align:center;padding:24px 0;">
              <p style="color:#9ca3af;font-size:12px;margin:0;">This enquiry was submitted via empreusitsupport.com.au</p>
              <p style="color:#9ca3af;font-size:12px;margin:4px 0 0;">Empreus Support Pty Ltd · Fyshwick, ACT 2609</p>
            </div>
          </div>
        </body>
      </html>
    `

    const res = await fetch("https://api.sendgrid.com/v3/mail/send", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        personalizations: [{ to: [{ email: "darko@empreus.com.au" }] }],
        from: { email: "noreply@empreusmail.com.au", name: "Empreus Website" },
        reply_to: { email: fields.email || "noreply@empreusmail.com.au" },
        subject,
        content: [{ type: "text/html", value: html }],
      }),
    })

    if (!res.ok) {
      const error = await res.json()
      return NextResponse.json({ error }, { status: 400 })
    }

    return NextResponse.json({ success: true })
  } catch (err: any) {
    console.error("API error:", err)
    return NextResponse.json({ error: err?.message || "Server error" }, { status: 500 })
  }
}