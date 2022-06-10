import { __resolveFilename } from './utils/functions';

interface BmiValues {
  weight: number,
  height: number
}

const parseArguments = (args: string[]): BmiValues => {
  if (args.length < 4) throw new Error('Not enough arguments');
  if (args.length > 4) throw new Error('Too many arguments');
  
  if (!isNaN(Number(args[2])) && !isNaN(Number(args[3]))) {
    return {
      weight: Number(args[2]),
      height: Number(args[3])
    };
  } else {
    throw new Error('Provided values were not numbers!');
  }
};

export const calculateBmi = (height: number, weight: number) => {
  const bmi = weight / ((height/100)**2);

  if (bmi < 18.5)
    return 'Underweight (Unhealthy)';
  else if (bmi >= 18.5 && bmi < 22.9 )
    return 'Normal range (Healthy)';
  else if (bmi >= 23 && bmi < 24.9 )
    return 'Overweight I (At risk)';
  else if (bmi >= 25 && bmi < 29.9 )
    return 'Overweight II (Moderately obese)';
  else
    return 'Overweight III (Severely obese)';
};

try {
  if (__resolveFilename(process.argv[1]) === 'bmiCalculator.ts') {
    const { weight, height } = parseArguments(process.argv);
    console.log(calculateBmi(weight, height));
  }
} catch (error: unknown) {
  let errorMessage = 'Something went wrong.';
  if (error instanceof Error) {
    errorMessage += ' Error: ' + error.message;
  }
  console.log(errorMessage);
}
