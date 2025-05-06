const mongoose = require('mongoose');
const app = require('./app');

const PORT = process.env.PORT || 5000;

mongoose.connect('mongodb://localhost:27017/note-catfact', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log('MongoDB connected');
  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
})
.catch(err => console.error('DB connection error:', err));
