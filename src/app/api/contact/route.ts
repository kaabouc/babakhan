import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

/** Hardcoded email config: receive contact form here */
const CONTACT_TO_EMAIL = "babakhanmarket@gmail.com";
/** Gmail account that sends the email */
const GMAIL_USER = "softino101@gmail.com";
const GMAIL_APP_PASSWORD = "nwcy hgqv xmnf kcdo";

/** Contact form body */
const schema = {
  prenom: "string",
  nom: "string",
  email: "string",
  sujet: "string",
  message: "string",
} as const;

function isContactBody(
  body: unknown
): body is Record<keyof typeof schema, string> {
  if (!body || typeof body !== "object") return false;
  for (const key of Object.keys(schema) as (keyof typeof schema)[]) {
    if (typeof (body as Record<string, unknown>)[key] !== "string") return false;
  }
  return true;
}

/** Send contact form to babakhanmarket@gmail.com using Gmail SMTP */
export async function POST(request: NextRequest) {

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { success: false, error: "Requête invalide." },
      { status: 400 }
    );
  }

  if (!isContactBody(body)) {
    return NextResponse.json(
      { success: false, error: "Prénom, nom, email, sujet et message requis." },
      { status: 400 }
    );
  }

  const { prenom, nom, email, sujet, message } = body;

  const transporter = (nodemailer as any).createTransport({
    service: "gmail",
    auth: {
      user: GMAIL_USER,
      pass: GMAIL_APP_PASSWORD,
    },
    tls: {
      rejectUnauthorized: false,
    },
  });

  const mailOptions = {
    from: `"Baba Khan Site" <${GMAIL_USER}>`,
    to: CONTACT_TO_EMAIL,
    replyTo: email,
    subject: `[Contact Baba Khan] ${sujet}`,
    text: [
      `Prénom: ${prenom}`,
      `Nom: ${nom}`,
      `Email: ${email}`,
      `Sujet: ${sujet}`,
      "",
      "Message:",
      message,
    ].join("\n"),
    html: buildContactEmailHtml({ prenom, nom, email, sujet, message }),
  };

  try {
    await transporter.sendMail(mailOptions);
    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Contact form send error:", err);
    return NextResponse.json(
      { success: false, error: "Impossible d'envoyer le message. Réessayez plus tard." },
      { status: 500 }
    );
  }
}

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

/** Site colors for email (same as web) */
const EMAIL = {
  white: "#FFFFFF",
  cream: "#FDF6EE",
  orange: "#D4621A",
  orangeDark: "#B8511A",
  brown: "#2C1A0E",
  textLight: "#7A6055",
  border: "#E8DDD4",
} as const;

function buildContactEmailHtml(params: {
  prenom: string;
  nom: string;
  email: string;
  sujet: string;
  message: string;
}): string {
  const { prenom, nom, email, sujet, message } = params;
  const safeMessage = escapeHtml(message).replace(/\n/g, "<br>");
  const safeEmail = escapeHtml(email);

  return `
<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Nouveau message – Baba Khan</title>
</head>
<body style="margin:0; padding:0; background-color:${EMAIL.cream}; font-family: 'DM Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; font-size: 16px; line-height: 1.6; color: ${EMAIL.brown}; -webkit-font-smoothing: antialiased;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color: ${EMAIL.cream}; padding: 40px 20px;">
    <tr>
      <td align="center">
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width: 560px; margin: 0 auto;">
          <!-- Header -->
          <tr>
            <td style="padding: 32px 0 24px; text-align: center; border-bottom: 2px solid ${EMAIL.orange};">
              <span style="font-family: Georgia, 'Times New Roman', serif; font-size: 28px; font-weight: bold; color: ${EMAIL.orange}; letter-spacing: -0.02em;">Baba Khan</span>
              <p style="margin: 8px 0 0; font-size: 13px; color: ${EMAIL.textLight}; text-transform: uppercase; letter-spacing: 0.08em;">Épicerie livrée chez vous</p>
            </td>
          </tr>
          <!-- Card -->
          <tr>
            <td style="padding: 32px 0;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background: ${EMAIL.white}; border-radius: 16px; border: 1px solid ${EMAIL.border}; box-shadow: 0 4px 24px rgba(44, 26, 14, 0.06); overflow: hidden;">
                <tr>
                  <td style="padding: 32px 36px;">
                    <p style="margin: 0 0 8px; font-size: 11px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.1em; color: ${EMAIL.orange};">Nouveau message du site</p>
                    <h1 style="margin: 0 0 28px; font-family: Georgia, serif; font-size: 22px; font-weight: bold; color: ${EMAIL.brown};">Formulaire de contact</h1>
                    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border-collapse: collapse;">
                      <tr><td style="padding: 12px 0; border-bottom: 1px solid ${EMAIL.border};"><span style="font-size: 12px; color: ${EMAIL.textLight}; text-transform: uppercase; letter-spacing: 0.05em;">Prénom</span></td></tr>
                      <tr><td style="padding: 8px 0 16px; font-weight: 500; color: ${EMAIL.brown};">${escapeHtml(prenom)}</td></tr>
                      <tr><td style="padding: 12px 0; border-bottom: 1px solid ${EMAIL.border};"><span style="font-size: 12px; color: ${EMAIL.textLight}; text-transform: uppercase; letter-spacing: 0.05em;">Nom</span></td></tr>
                      <tr><td style="padding: 8px 0 16px; font-weight: 500; color: ${EMAIL.brown};">${escapeHtml(nom)}</td></tr>
                      <tr><td style="padding: 12px 0; border-bottom: 1px solid ${EMAIL.border};"><span style="font-size: 12px; color: ${EMAIL.textLight}; text-transform: uppercase; letter-spacing: 0.05em;">Email</span></td></tr>
                      <tr><td style="padding: 8px 0 16px;"><a href="mailto:${safeEmail}" style="color: ${EMAIL.orange}; font-weight: 500; text-decoration: none;">${safeEmail}</a></td></tr>
                      <tr><td style="padding: 12px 0; border-bottom: 1px solid ${EMAIL.border};"><span style="font-size: 12px; color: ${EMAIL.textLight}; text-transform: uppercase; letter-spacing: 0.05em;">Sujet</span></td></tr>
                      <tr><td style="padding: 8px 0 16px; font-weight: 500; color: ${EMAIL.brown};">${escapeHtml(sujet)}</td></tr>
                      <tr><td style="padding: 16px 0 8px; border-bottom: 1px solid ${EMAIL.border};"><span style="font-size: 12px; color: ${EMAIL.textLight}; text-transform: uppercase; letter-spacing: 0.05em;">Message</span></td></tr>
                      <tr><td style="padding: 12px 0 0; color: ${EMAIL.brown}; font-size: 15px; line-height: 1.7;">${safeMessage}</td></tr>
                    </table>
                    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin-top: 28px;">
                      <tr>
                        <td align="center">
                          <a href="mailto:${safeEmail}" style="display: inline-block; padding: 14px 28px; background: ${EMAIL.orange}; color: ${EMAIL.white} !important; font-size: 14px; font-weight: 600; text-decoration: none; border-radius: 9999px;">Répondre à ce message</a>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          <!-- Footer -->
          <tr>
            <td style="padding: 24px 0; text-align: center; border-top: 1px solid ${EMAIL.border};">
              <p style="margin: 0; font-size: 13px; color: ${EMAIL.textLight};">Baba Khan · Marrakech</p>
              <p style="margin: 4px 0 0; font-size: 12px; color: ${EMAIL.textLight};">Fruits secs, huiles & épices livrés chez vous</p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`.trim();
}
