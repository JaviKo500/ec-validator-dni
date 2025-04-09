/**
 * Validates the verification digit of an Ecuadorian DNI using the modulus 10 algorithm.
 * The algorithm steps are:
 * 1. Multiply each digit by alternating coefficients (2,1,2,1,2,1,2,1,2)
 * 2. If the product is >= 10, subtract 9
 * 3. Sum all results
 * 4. Calculate verification digit: 10 - (sum mod 10)
 * 5. Compare calculated digit with provided verification digit
 * 
 * @param {string} firstDigits - The first 9 digits of the DNI
 * @param {string} verificationDigitString - The verification digit to validate (10th digit)
 * 
 * @throws {Error} If the verification digit is invalid
 * @returns {boolean} Returns true if validation passes (throws error otherwise)
 * 
 */
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
  let verificationDigitResult = 0;
  if ( residue !== 0 ) {
    verificationDigitResult = 10 - residue;
  }
  if (verificationDigitResult !== verificationDigit) {
    throw new Error('Invalid verification digit');
  }
  return true;
}