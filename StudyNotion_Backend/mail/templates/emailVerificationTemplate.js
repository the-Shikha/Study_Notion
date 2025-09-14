const otpTemplate = (otp) => {
  return `<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>OTP Verification</title>
    <style>
      body {
        background-color: #f9fafb;
        font-family: 'Segoe UI', Roboto, Arial, sans-serif;
        margin: 0;
        padding: 0;
        color: #111827;
      }
      .container {
        max-width: 600px;
        margin: 40px auto;
        background: #ffffff;
        border-radius: 12px;
        overflow: hidden;
        box-shadow: 0 6px 20px rgba(0,0,0,0.08);
      }
      .header {
        background: #1d4ed8;
        color: #ffffff;
        text-align: center;
        padding: 16px 20px;
        font-size: 20px;
        font-weight: 600;
      }
      .content {
        padding: 30px 40px;
        font-size: 16px;
        line-height: 1.6;
      }
      .otp-box {
        font-size: 32px;
        font-weight: 700;
        letter-spacing: 6px;
        color: #1d4ed8;
        background: #f0f4ff;
        padding: 14px 24px;
        border-radius: 8px;
        display: inline-block;
        margin: 24px 0;
      }
      .content p {
        margin: 12px 0;
      }
      .footer {
        text-align: center;
        font-size: 14px;
        color: #6b7280;
        padding: 20px;
        background: #f9fafb;
        border-top: 1px solid #e5e7eb;
      }
      a {
        color: #1d4ed8;
        text-decoration: none;
      }
      a:hover {
        text-decoration: underline;
      }
    </style>
  </head>
  <body>
    <div class="container">
      <div class="header">StudyNotion</div>
      <div class="content">
        <p>Hi there,</p>
        <p>Thank you for registering with <strong>StudyNotion</strong>. Please use the OTP below to verify your account:</p>
        <div class="otp-box">${otp}</div>
        <p>This OTP is valid for <strong>5 minutes</strong>. If you didn’t request this, you can safely ignore this email.</p>
        <p>Once verified, you’ll get full access to our platform and features.</p>
      </div>
      <div class="footer">
        Need help? Contact us at 
        <a href="mailto:info@studynotion.com">info@studynotion.com</a>
      </div>
    </div>
  </body>
  </html>`;
};
module.exports = otpTemplate;
