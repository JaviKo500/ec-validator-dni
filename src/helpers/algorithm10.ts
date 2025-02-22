export const algorithm10 = (firstDigits: string, verificationDigitString: string) => {
  const verificationDigit = parseInt(verificationDigitString);
  let total = 0;
  const listCoefficients = [2, 1, 2, 1, 2, 1, 2, 1, 2];
  for (let i = 0; i < listCoefficients.length; i++) {
    const coefficient = listCoefficients[i];
    const digit = parseInt(firstDigits[i]);
    let result = digit * coefficient;
    if (result >= 10) {
      result -= 9;
    }
    total += result;
  }
  const residue = total % 10;
  const verificationDigitResult = 10 - residue;

  if (verificationDigitResult !== verificationDigit) {
    throw new Error('Invalid verification digit');
  }
  return true;
}