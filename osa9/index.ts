const express = require('express')
const app = express()

import * as bmiCalculator from './bmiCalculator'

app.get('/bmi', (req: { query: { height: number; weight: number } }, res: any) => {
  const height = req.query.height
  const weight = req.query.weight
  
  if (!isNaN(Number(height)) && !isNaN(Number(weight))) {
    res.json({
      weight,
      height,
      bmi: bmiCalculator.calculateBmi(height, weight)
    })
  } else {
    return res.json({ 
      error: "malformed parameters"
    });
  }
})

app.get('/hello', (_req: any, res: any) => {
  res.send('Hello Full Stack')
});

const PORT = 3003;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
