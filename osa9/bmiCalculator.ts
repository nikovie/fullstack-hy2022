const height = 180
const weight = 74

const calculateBmi = (height: number, weight: number) => {
  const bmi = weight / ((height/100)**2)

  if (bmi < 18.5)
    return 'Underweight (Unhealthy)	'
  else if (bmi >= 18.5 && bmi < 22.9 )
    return 'Normal range (Healthy)'
  else if (bmi >= 23 && bmi < 24.9 )
    return 'Overweight I (At risk)'
  else if (bmi >= 25 && bmi < 29.9 )
    return 'Overweight II (Moderately obese)'
  else
    return 'Overweight III (Severely obese)	'
}

console.log(calculateBmi(height, weight))
