import cors from 'cors';
import express, { json } from 'express';
import 'dotenv/config';
import nodemailer from 'nodemailer';
import path from 'path';

const app = express();

app.use(cors());
app.use(json());

// Servir les fichiers statiques de l'application front-end
const __dirname = path.resolve();
app.use(express.static(path.join(__dirname, 'dist')));

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

    console.log('Received form data:', formData);

    try {
        let mailOptions = {
            from: formData.email,
            to: "gilles@sparkmind.me",
            subject: `Portfolio: ${formData.subject}`,
            text: `Sender's Email: ${formData.email}\n\n${formData.message}`
        };

        console.log('Mail options:', mailOptions);

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

// Toutes les autres requêtes renvoient le fichier index.html
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
});

const PORT = process.env.PORT || 10000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
