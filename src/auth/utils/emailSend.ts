import { Resend } from 'resend';

export async function sendEmail(email: string, url: string) {
  const resend = new Resend(process.env.RESENT_API_KEY);
  try {
    await resend.emails.send({
      from: 'Info <info@twofacedev.tech>',
      to: [email],
      subject: 'Activar Cuenta Chiri',
      html: `
      <div>
<strong>Activa tu cuenta : </strong>
<a href="https://www.chiri.online/activate/?token=${url}">https://www.chiri.online/activate/?token=${url}</a>
</div>
`,
    });
  } catch (error) {
    console.log(
      '🚀 ~ file: sendEmail.ts:16 ~ enviarCorreoPersonalizado ~ error:',
      error,
    );
  }
}
