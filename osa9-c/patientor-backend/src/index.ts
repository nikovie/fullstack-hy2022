import express = require('express');
import cors from 'cors';
import diagnoseRouter from './routes/diagnoses';
import patientRouter from './routes/patients';

const app = express();

const allowedOrigins = ['http://localhost:3000'];

const options: cors.CorsOptions = {
  origin: allowedOrigins,
};

// eslint-disable-next-line @typescript-eslint/no-unsafe-call
app.use(cors(options));
app.use(express.json());

const PORT = 3001;

app.get('/api/ping', (_req, res) => {
  console.log('ping');
  res.send('pong');
});

app.use('/api/diagnoses', diagnoseRouter);

app.use('/api/patients', patientRouter);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
