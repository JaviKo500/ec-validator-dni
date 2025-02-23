import { TypeIdentification } from '../interfaces/identification';

/**
 * Validates the verification digit of a RUC number using the modulus 11 algorithm.
 * The algorithm steps are:
 * 1. Multiply each digit by its corresponding coefficient
 * 2. Sum all products
 * 3. Calculate remainder of sum divided by 11
 * 4. If remainder is 0, verification digit should be 0
 * 5. Otherwise, verification digit should be 11 minus remainder
 * 
 * @param {string} initialDigits - The initial digits of the RUC to validate
 * @param {string} verificationDigitString - The verification digit to check
 * @param {TypeIdentification} typeIdentification - The type of RUC (public or private society)
 * 
 * @throws {Error} If the identification type is not valid for this algorithm
 * @throws {Error} If the number of digits doesn't match the required coefficients
 * @throws {Error} If the verification digit is invalid
 * 
 * @returns {boolean} Returns true if validation passes (throws error otherwise)
 * 
 *
 */

export const algorithm11 = ( initialDigits: string, verificationDigitString: string, typeIdentification: TypeIdentification ) => {
  const coefficients = COEFFICIENTS_RUC[typeIdentification];
  if ( !coefficients ) {
    throw new Error('Invalid identification type');
  }
  const verifierNumber = parseInt(verificationDigitString);
  const digits = initialDigits.split('').map(Number);
  
  if (digits.length !== coefficients.length) {
    throw new Error('Digits length must be equal to coefficients length');
  }
  
  const total = digits.reduce((sum, digit, index) => {
    return sum + (digit * coefficients[index]);
  }, 0);
  
  const remainder = total % 11;
  const result = remainder === 0 ? 0 : 11 - remainder;
  if (result !== verifierNumber) {
    throw new Error('Invalid verification digit');
  }
  
  return true;
}

const COEFFICIENTS_RUC: Record<string, number[]> = {
  [TypeIdentification.RUC_SOCIETY_PRIVATE]: [4, 3, 2, 7, 6, 5, 4, 3, 2],
  [TypeIdentification.RUC_PUBLIC_SOCIETY]: [3, 2, 7, 6, 5, 4, 3, 2],
}