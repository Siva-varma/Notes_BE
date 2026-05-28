import app from './src/app.js';
import connectDB from './src/config/db.js';

await connectDB();


const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});