import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { firstName, lastName, email, message } = req.body;

  // Validate required fields
  if (!email || !message) {
    return res.status(400).json({ message: 'Email and message are required' });
  }

  try {
    // Create transporter - configure with your email service
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Email to you (Bhargavi)
    await transporter.sendMail({
      from: email,
      to: 'grooves.bhargavi@gmail.com',
      subject: `New contact form submission from ${firstName || 'Guest'}`,
      html: `
        <p><strong>Name:</strong> ${firstName || 'Not provided'} ${lastName || 'Not provided'}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
      replyTo: email,
    });

    // Confirmation email to the sender
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'We received your message',
      html: `
        <p>Hi ${firstName || 'there'},</p>
        <p>Thank you for reaching out! I've received your message and will get back to you soon.</p>
        <p>Best regards,<br>Bhargavi Sardesai</p>
      `,
    });

    res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Email error:', error);
    res.status(500).json({ message: 'Failed to send email', error: error.message });
  }
}
