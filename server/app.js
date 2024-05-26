import cors from 'cors';
import express, { json } from 'express';
import 'dotenv/config';
import nodemailer from 'nodemailer';

const app = express();

app.use(cors({
    origin: [
        "https://portfolio.sparkmind.me",
        "https://gilles-de-peretti-portfolio.onrender.com"
    ]
}));
app.use(json());

const transporter = nodemailer.createTransport({
    host: "mail.gandi.net",
    port: 465,
    secure: true,
    auth: {
        user: process.env.MAIL_USERNAME,
        pass: process.env.MAIL_PASSWORD,
    },
});

app.post("/send-email", async (req, res) => {
    const { formData } = req.body;

    console.log('Received form data:', formData); // Log form data for debugging

    try {
        let mailOptions = {
            from: formData.email,
            to: "gilles@sparkmind.me",
            subject: `Portfolio: ${formData.subject}`,
            text: `Sender's Email: ${formData.email}\n\n${formData.message}`
        };

        console.log('Mail options:', mailOptions); // Log mail options for debugging

        transporter.sendMail(mailOptions, function (err, info) {
            if (err) {
                console.log('Error sending message:', err);
                return res.status(500).json({ message: "Internal server error!" });
            } else {
                console.log('Email sent:', info.response);
                return res.status(200).json({ message: "Message sent successfully." });
            }
        });

    } catch (error) {
        console.error('Error in try-catch block:', error);
        res.status(500).json({ message: "Internal server error!" });
    }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
