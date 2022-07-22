import express = require('express');
const app = express();
app.use(express.json());

import { __isNumberArray } from './utils/functions';
import * as bmiCalculator from './bmiCalculator';
import { calculateExercises } from './exerciseCalculator';

app.get('/bmi', (
  req: { 
    query: { 
      height: number; 
      weight: number 
    } 
  }, 
  res: { 
    json: (arg0: { 
      weight?: number; 
      height?: number; 
      bmi?: string; 
      error?: string; 
    }) => void; 
  }) => {
  const height = req.query.height;
  const weight = req.query.weight;
  
  if (!isNaN(Number(height)) && !isNaN(Number(weight))) {
    res.json({
      weight,
      height,
      bmi: bmiCalculator.calculateBmi(height, weight)
    });
  } else {
    return res.json({ 
      error: "malformed parameters"
    });
  }
});

app.get('/hello', (_req, res: { send: (arg0: string) => void; }) => {
  res.send('Hello Full Stack');
});

app.post('/exercises', (req, res) => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const { daily_exercises, target } = req.body;

  // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
  if ((daily_exercises.length === 7 && __isNumberArray(daily_exercises))) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    const result = calculateExercises(daily_exercises, Number(target));
    res.json(result);
  } 
  else if (!daily_exercises) {
    res.json({
      error: "parameters missing"
    });
  } else {
    res.json({ 
      error: "malformed parameters"
    });
  }
  return res.end();
});

const PORT = 3003;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
