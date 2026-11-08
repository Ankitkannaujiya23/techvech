// ALTERNATIVE contact-submission path. By default the site posts directly
// to Formspree from ContactForm.js (simplest, zero server code). If you'd
// rather send email yourself, point the form's fetch() at "/api/contact"
// instead of the Formspree URL, and set RESEND_API_KEY + CONTACT_TO_EMAIL
// in .env.local. Requires `npm install resend`.

export async function POST(request) {
  try {
    const data = await request.formData();
    const name = data.get("name");
    const email = data.get("email");
    const type = data.get("type");
    const budget = data.get("budget");
    const message = data.get("message");

    if (!name || !email) {
      return Response.json({ error: "Missing required fields." }, { status: 400 });
    }

    const apiKey = process.env.RESEND_API_KEY;
    const toEmail = process.env.CONTACT_TO_EMAIL;

    if (!apiKey || !toEmail) {
      return Response.json(
        { error: "Email sending isn't configured yet. Set RESEND_API_KEY and CONTACT_TO_EMAIL." },
        { status: 500 }
      );
    }

    const emailRes = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "TechVech Website <onboarding@resend.dev>",
        to: [toEmail],
        reply_to: email,
        subject: `New project inquiry — ${type || "General"}`,
        text: `Name: ${name}\nEmail: ${email}\nType: ${type}\nBudget: ${budget}\n\n${message}`,
      }),
    });

    if (!emailRes.ok) {
      return Response.json({ error: "Failed to send email." }, { status: 502 });
    }

    return Response.json({ success: true });
  } catch (err) {
    return Response.json({ error: "Unexpected server error." }, { status: 500 });
  }
}
