import nodemailer from "nodemailer";
import type { ContactPayload } from "@/src/types/Contact";

function getEnv(name: string) {
  const v = process.env[name];
  if (!v) throw new Error(`Missing env: ${name}`);
  return v;
}

// html 태그 필터
function escapeHtml(s: string) {
  return s
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

// 메일 보내기
export async function sendContactEmail(payload: ContactPayload) {
  const host = getEnv("SMTP_HOST");
  const port = Number(process.env.SMTP_PORT || 465);
  const secure = String(process.env.SMTP_SECURE || "true") === "true";
  const user = getEnv("SMTP_USER");
  const pass = getEnv("SMTP_PASS");
  const to = process.env.CONTACT_TO || user;

  const transporter = nodemailer.createTransport({
    host,
    port,
    secure,
    auth: { user, pass },
  });

  const subject = `[포트폴리오 문의] ${payload.name}`;

  await transporter.sendMail({
    from: `"Portfolio Contact" <${user}>`,
    to,
    replyTo: payload.email,
    subject,
    text: `이름: ${payload.name}\n이메일: ${payload.email}\n\n${payload.message}`,
    html: `
      <div style="font-family:ui-sans-serif,system-ui,-apple-system,Segoe UI,Roboto,Apple SD Gothic Neo,Noto Sans KR,sans-serif;">
        <h2 style="margin:0 0 12px;">포트폴리오 문의</h2>
        <p style="margin:0 0 6px;"><b>이름</b>: ${escapeHtml(payload.name)}</p>
        <p style="margin:0 0 12px;"><b>이메일</b>: ${escapeHtml(payload.email)}</p>
        <p style="margin:0 0 6px;"><b>메시지</b></p>
        <pre style="margin:0; white-space:pre-wrap; line-height:1.6; padding:12px; border:1px solid #e2e8f0; border-radius:12px; background:#f8fafc;">${escapeHtml(
          payload.message
        )}</pre>
        <p style="margin:12px 0 0; color:#64748b; font-size:12px;">
          Reply-To로 설정되어 있어 답장하면 작성자 이메일로 회신됩니다.
        </p>
      </div>
    `,
  });
}
