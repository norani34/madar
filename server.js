import express from 'express';
import path from 'path';

const app = express();
const port = process.env.PORT || 3000;
const __dirname = path.resolve();

// Serve static files from the dist directory
app.use(express.static(path.join(__dirname, 'dist')));

// Always return index.html for client-side routing
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
