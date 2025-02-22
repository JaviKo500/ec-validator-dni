import { TypeIdentification } from '../interfaces/identification';

const COEFFICIENTS_RUC: Record<string, number[]> = {
  [TypeIdentification.RUC_SOCIETY_PRIVATE]: [4, 3, 2, 7, 6, 5, 4, 3, 2],
  [TypeIdentification.RUC_PUBLIC_SOCIETY]: [3, 2, 7, 6, 5, 4, 3, 2],
}
export const algorithm11 = ( initialDigits: string, verificationDigitString: string, typeIdentification: TypeIdentification ) => {
  const coefficients = COEFFICIENTS_RUC[typeIdentification];
  if ( !coefficients ) {
    throw new Error('Invalid identification type');
  }
  const verifierNumber = Number(verificationDigitString);
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