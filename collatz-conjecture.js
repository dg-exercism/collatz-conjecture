//
// This is only a SKELETON file for the 'Collatz Conjecture' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const steps = (number, count = 0) => {
  if (number < 1) {
    throw 'Only positive numbers are allowed'
  } 
  if (number === 1) {
    return count
  } 
  if (number % 2 === 0) {
    count++;
    return steps(number/2, count)
  } else {
    count++;
    return steps((number * 3 + 1), count)
  }
};
