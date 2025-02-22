export const validateCodeEstablishment = (code: string) => {
  const codeInt = parseInt(code);
  if (isNaN(codeInt)) {
    throw new Error('Invalid code establishment must be a number');
  }
  if (codeInt <= 0) {
    throw new Error('Invalid code establishment must be greater than 0');
  }
}