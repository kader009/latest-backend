import app from './app';
import config from './app/config';
import mongoose from 'mongoose';

async function Bootstrap() {
  try {
    await mongoose.connect(config.database_url as string);

    app.listen(config.port, () => {
      console.log(`Application listening on port ${config.port}`);
    });
  } catch (error) {
    console.log(error);
  }
}

Bootstrap();
