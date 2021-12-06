export const generateRandomNum = (precision: number) => {
  return Math.floor(Math.pow(10, precision) + Math.random() * 900000);
};
