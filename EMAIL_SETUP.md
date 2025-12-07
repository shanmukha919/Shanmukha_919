# Email Notification Setup for Contact Form

This guide will help you set up email notifications when someone submits the contact form on your portfolio website.

## Step 1: Create an EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

## Step 2: Set Up Email Service

1. In your EmailJS dashboard, go to **Email Services**
2. Click **Add New Service**
3. Choose your email provider (Gmail, Outlook, etc.)
4. Connect your email account and grant permissions
5. Note down your **Service ID** (it will look like `service_xxxxxxxxxx`)

## Step 3: Create Email Template

1. Go to **Email Templates** in your dashboard
2. Click **Create New Template**
3. Set up your template with these variables:
   - `{{from_name}}` - Sender's name
   - `{{from_email}}` - Sender's email
   - `{{subject}}` - Message subject
   - `{{message}}` - Message content
   - `{{reply_to}}` - Reply-to email

### Example Template:

**Subject:**
New Contact Form Message from {{from_name}}

**Body:**
Hi Shanmukha,

You have received a new message from your portfolio website contact form:

**From:** {{from_name}} ({{from_email}})
**Subject:** {{subject}}

**Message:**
{{message}}

**Reply to:** {{reply_to}}

Best regards,
Portfolio Contact Form

4. Save the template and note down your **Template ID** (it will look like `template_xxxxxxxxxx`)

## Step 4: Get Your Public Key

1. Go to **Account** in your dashboard
2. Find your **Public Key** (it will look like a long string of characters)
3. Copy this key

## Step 5: Configure Environment Variables

1. Open the `.env` file in your project root
2. Replace the placeholder values with your actual EmailJS credentials:

```
VITE_EMAILJS_SERVICE_ID=service_your_actual_service_id
VITE_EMAILJS_TEMPLATE_ID=template_your_actual_template_id
VITE_EMAILJS_PUBLIC_KEY=your_actual_public_key
```

## Step 6: Test the Contact Form

1. Start your development server: `npm run dev`
2. Go to the Contact section
3. Fill out and submit the form
4. Check your email for the notification

## Troubleshooting

- **Form not sending emails:** Check that all environment variables are set correctly
- **Emails going to spam:** This is common with form submissions. Check your spam folder
- **EmailJS quota exceeded:** Free plan allows 200 emails per month. Upgrade if needed

## Security Note

Never commit your `.env` file to version control. The `.env` file is already in `.gitignore` for security.

## Alternative Solutions

If you prefer not to use EmailJS, you can also set up:
- A backend server with Node.js/Express and Nodemailer
- Netlify Forms (if deploying to Netlify)
- Formspree (external service)

Let me know if you need help with any of these steps!
