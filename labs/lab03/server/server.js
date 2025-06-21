const express = require('express');
const multer = require('multer');
const cors = require('cors');
const fs = require('fs');
const path = require('path');
const _ = require('lodash');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());
app.use('/uploads', express.static('uploads'));

// Create uploads folder if not exist
if (!fs.existsSync('./uploads')) {
    fs.mkdirSync('./uploads');
}

// Multer storage config
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './uploads/');
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + '-' + file.originalname);
    }
});
const upload = multer({ storage: storage });

// Route: Upload multiple images
app.post('/upload', upload.array('images', 10), (req, res) => {
    res.json({ message: 'Files uploaded successfully', files: req.files });
});

// Route: Get up to 3 random images
app.get('/random-images', (req, res) => {
    fs.readdir('./uploads', (err, files) => {
        if (err) return res.status(500).send('Error reading files');
        const selected = _.sampleSize(files, 3);
        const imageUrls = selected.map(file => `http://localhost:${PORT}/uploads/${file}`);
        res.json(imageUrls);
    });
});

// Route: Upload single dog image
app.post('/upload-dog', upload.single('dogImage'), (req, res) => {
    res.json({ message: 'Dog image uploaded', file: req.file });
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
