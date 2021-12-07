export const generateRandomNum = (precision: number) => {
  return Math.floor(Math.pow(10, precision - 1) + Math.random() * 900000);
};
