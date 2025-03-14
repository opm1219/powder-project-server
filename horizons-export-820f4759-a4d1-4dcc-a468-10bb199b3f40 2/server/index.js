const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
const rateLimit = require('express-rate-limit');

const app = express();
const port = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100 // limit each IP to 100 requests per windowMs
});

app.use(limiter);

// Email transporter
const transporter = nodemailer.createTransport({
  host: 'smtp.hostinger.com',
  port: 465,
  secure: true,
  auth: {
    user: 'hello@powderproject.org',
    pass: 'Powder2025'
  }
});

// Email template
const getEmailTemplate = (name, location) => `
<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
    .header { background: #1a1a2e; color: white; padding: 20px; text-align: center; }
    .content { padding: 20px; }
    .footer { text-align: center; padding: 20px; background: #f5f5f5; }
    .button { 
      display: inline-block; 
      padding: 10px 20px; 
      background: #1a1a2e; 
      color: white; 
      text-decoration: none; 
      border-radius: 5px; 
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>Welcome to The Powder Project!</h1>
    </div>
    <div class="content">
      <h2>Thank you for taking the Powder Promise, ${name}!</h2>
      <p>Your commitment to protecting winter sports in ${location} makes a real difference. Together, we can ensure future generations will enjoy the magic of winter sports.</p>
      <p>What's next?</p>
      <ul>
        <li>Share your commitment with friends and family</li>
        <li>Follow us on social media for updates</li>
        <li>Check out our sustainable resort partners</li>
        <li>Join local climate action initiatives</li>
      </ul>
      <p style="text-align: center; margin-top: 30px;">
        <a href="https://powderproject.org/community" class="button">Join Our Community</a>
      </p>
    </div>
    <div class="footer">
      <p>Follow us on social media:</p>
      <p>
        <a href="https://twitter.com/powderproject">Twitter</a> |
        <a href="https://instagram.com/powderproject">Instagram</a> |
        <a href="https://facebook.com/powderproject">Facebook</a>
      </p>
      <p>© ${new Date().getFullYear()} The Powder Project. All rights reserved.</p>
    </div>
  </div>
</body>
</html>
`;

// API Endpoints
app.post('/api/send-pledge-email', async (req, res) => {
  try {
    const { to, name, location } = req.body;

    await transporter.sendMail({
      from: '"The Powder Project" <hello@powderproject.org>',
      to: to,
      subject: 'Welcome to The Powder Project!',
      html: getEmailTemplate(name, location),
    });

    res.json({ success: true, message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ success: false, message: 'Error sending email' });
  }
});

// Start server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});