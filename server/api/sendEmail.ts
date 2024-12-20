import { Resend } from 'resend'
import type { H3Event } from 'h3'
import type { ContactEmail } from '~/types/ContactEmail'

// const resend = new Resend(process.env.NUXT_PRIVATE_RESEND_API_KEY)
const resend = new Resend('re_EnAE4Pn6_44y1Dc28opfMk7fgwzNnwT7V')

export default defineEventHandler(async (event: H3Event) => {
  try {
    const body = (await readBody(event)) as ContactEmail
    const { email, subject, message, phone, fullName } = body
    return await resend.emails.send({
      from: 'HR Folio <aliarghyani@gmail.com>',
      to: ['aliarghyani@gmail.com'],
      subject: 'Test email from your porfolio website',
      html: `
      <p>Un nouveau message a été envoyé depuis le formulaire de contact de HR Folio.</p>
      <p>Voici les détails du message :</p>
      <ul>
        <li>Nom : ${fullName}</li>
        <li>Email : ${email}</li>
        <li>Téléphone : ${phone}</li>
        <li>Sujet : ${subject}</li>
        <li>Message : ${message}</li>
      </ul>
      `,
    })
  }
  catch (error) {
    return { error }
  }
})
