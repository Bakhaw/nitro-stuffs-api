require('dotenv').config();
import express from 'express';
import mongoose from 'mongoose';

import mapsRoutes from './routes/maps';
import config from './config';

mongoose.connect(config.LOCAL_MONGO_URL, { useNewUrlParser: true }, () =>
  console.log(`DB connected at ${config.LOCAL_MONGO_URL} ...`)
);

const app = express();

app.use('/api', mapsRoutes);

app.listen(config.PORT, () =>
  console.log(`App running on port ${config.PORT} ...`)
);
