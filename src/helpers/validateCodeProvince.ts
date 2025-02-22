export const validateCodeProvince = (provinceCode: string) => {
  const code = parseInt(provinceCode);
  if (code < 0 || code > 24) {
    throw new Error('Invalid province code (first 2 digits) must be between 00 and 24');
  }
}