const weeklyExerciseHours = [0.5, 0, 1, 1, 0, 0, 1]

interface Result { 
  periodLength: number,
  trainingDays: number,
  success: boolean,
  rating: number,
  ratingDescription: string,
  target: number,
  average: number 
}

function inRange(x: number, min: number, max: number) {
  return ((x - min) * (x - max) <= 0);
}

const calculateExercises = (weeklyExerciseHours: number[], target = 4) : Result => {
  const periodLength = weeklyExerciseHours.length
  const trainingDays = weeklyExerciseHours.filter(n => n > 0).length
  const trainingHours = weeklyExerciseHours.reduce((acc, val) => acc + val, 0)
  const averagePerDay = trainingHours / periodLength
  const success = trainingHours >= target
  const rating = trainingHours / target
  let ratingDescription

  if (success && rating > 1 && inRange(trainingDays, 4, 7)) {
    ratingDescription = 'Excellent, keep going!'
  }
  else if (inRange(rating, 0.8, 1) && inRange(trainingDays, 3, 7)) {
    ratingDescription = 'Not bad but could be better!'
  }
  else if (inRange(trainingDays, 2, 7)) {
    ratingDescription = 'Almost there, you can do better! Increase the length of the exercises.'
  }
  else {
    ratingDescription = 'You can do better!'
  }

  if (periodLength !== 7) throw new Error('Array length is not 7')

  return { periodLength, trainingDays, success, rating, ratingDescription, target, average: averagePerDay }
}

try {
  console.log(calculateExercises(weeklyExerciseHours, 2))
} catch (error: unknown) {
  let errorMessage = 'Something went wrong.'
  if (error instanceof Error) {
    errorMessage += ' Error: ' + error.message;
  }
  console.log(errorMessage);
}
