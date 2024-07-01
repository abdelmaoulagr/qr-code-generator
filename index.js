const express = require('express');
const QRCode = require('qrcode');
const fs = require('fs');
const path = require('path');

const app = express();
const port = 3000;

app.use(express.json());

app.post('/generate-png', async (req, res) => {
    const { text } = req.body;
    if (!text) {
        return res.status(400).send('Text is required');
    }

    try {
        const filePath = path.join(__dirname, 'qr-codes', `${Date.now()}.png`);
        await QRCode.toFile(filePath, text);
        res.status(200).send({ message: 'QR code generated and saved', filePath });
    } catch (error) {
        res.status(500).send('Error generating QR code');
    }
});



app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
