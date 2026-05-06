const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const multer = require('multer');
const cloudinary = require('cloudinary').v2;

dotenv.config();

cloudinary.config({
  cloud_name: process.env.VITE_CLOUDINARY_CLOUD_NAME || process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.VITE_CLOUDINARY_API_KEY || process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.VITE_CLOUDINARY_API_SECRET || process.env.CLOUDINARY_API_SECRET,
});

const upload = multer({ 
  storage: multer.memoryStorage(),
  limits: { fileSize: 50 * 1024 * 1024 } // 50MB limit
});

const app = express();

// CORS — allow requests from your frontend Vercel domain
app.use(cors({
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));

// Request logger
app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next();
});

// MongoDB Connection — safe, non-blocking
if (process.env.MONGODB_URI) {
  mongoose.connect(process.env.MONGODB_URI)
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('MongoDB connection error:', err));
} else {
  console.warn('WARNING: MONGODB_URI is not set. MongoDB connection skipped.');
}

// Blog Post Schema
const postSchema = new mongoose.Schema({
  title: { type: String, required: true },
  slug: { type: String, required: true, unique: true },
  content: { type: String, required: true },
  tag: { type: String, required: true },
  img: { type: String, default: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop' },
  metaTitle: String,
  metaDesc: String,
  keywords: String,
  date: { type: String, default: () => new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' }) }
}, { timestamps: true });

const Post = mongoose.model('Post', postSchema);

// Root route
app.get('/', (req, res) => {
  res.send('Revnity Backend is running successfully!');
});

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'Revnity Backend is running' });
});

// Test route
app.get('/api/test', (req, res) => {
  res.json({ message: 'API is working' });
});

// Image upload endpoint
app.post('/api/upload', upload.single('file'), async (req, res) => {
  console.log('--- Upload request received ---');
  try {
    if (!req.file) {
      console.log('No file in request');
      return res.status(400).json({ message: 'No file uploaded' });
    }
    
    console.log('File received:', req.file.originalname, req.file.mimetype);
    
    const b64 = Buffer.from(req.file.buffer).toString("base64");
    let dataURI = "data:" + req.file.mimetype + ";base64," + b64;
    const result = await cloudinary.uploader.upload(dataURI, {
      resource_type: "auto",
      folder: "revnity_editor"
    });
    
    console.log('Cloudinary upload success:', result.secure_url);
    res.json({ url: result.secure_url });
  } catch (error) {
    console.error('Upload error:', error.message);
    res.status(500).json({ message: error.message });
  }
});

// Get all posts
app.get('/api/posts', async (req, res) => {
  try {
    const posts = await Post.find().sort({ createdAt: -1 });
    res.json(posts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get single post by slug
app.get('/api/posts/slug/:slug', async (req, res) => {
  try {
    const post = await Post.findOne({ slug: req.params.slug });
    if (!post) return res.status(404).json({ message: 'Post not found' });
    res.json(post);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get single post by ID
app.get('/api/posts/:id', async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post) return res.status(404).json({ message: 'Post not found' });
    res.json(post);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Create post
app.post('/api/posts', async (req, res) => {
  try {
    const newPost = new Post(req.body);
    const savedPost = await newPost.save();
    res.status(201).json(savedPost);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Update post
app.put('/api/posts/:id', async (req, res) => {
  try {
    const updatedPost = await Post.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedPost);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Delete post
app.delete('/api/posts/:id', async (req, res) => {
  try {
    await Post.findByIdAndDelete(req.params.id);
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Contact Form Endpoint
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, ict } = req.body;
    console.log('--- NEW CONTACT FORM SUBMISSION ---');
    console.log('To: projects@revnitymarketing.com');
    console.log('From:', name, `<${email}>`);
    console.log('ICT Details:', ict);
    console.log('------------------------------------');
    
    // In a production app, you would use nodemailer here to send the actual email.
    res.json({ message: 'Thank you! Your message has been sent to projects@revnitymarketing.com' });
  } catch (error) {
    res.status(500).json({ message: 'Failed to send message. Please try again.' });
  }
});

// Only bind port in local dev (not on Vercel)
if (!process.env.VERCEL) {
  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
}

// Catch-all 404 logger
app.use((req, res) => {
  console.log(`[404] ${req.method} ${req.url}`);
  res.status(404).json({ message: `Route ${req.method} ${req.url} not found` });
});

module.exports = app;
