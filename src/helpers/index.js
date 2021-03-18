// Generate a random number
export const getRandomNumber = (max = 15, min = 1) => {
  return Math.floor(Math.random() * (max - min) + min);
};
