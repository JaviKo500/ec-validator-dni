import { TypeIdentification } from '../interfaces';

/**
 * Validates the third digit of an identification number based on the type of identification document.
 * 
 * For DNI and Natural Person RUC:
 * - Third digit must be between 0 and 9
 * 
 * For Private Society RUC:
 * - Third digit must be 9
 * 
 * For Public Society RUC:
 * - Third digit must be 6
 * 
 * @param {string} thirdDigit - The third digit of the identification number to validate
 * @param {TypeIdentification} typeIdentification - The type of identification document being validated
 * 
 * @throws {Error} If the third digit is not a valid number
 * @throws {Error} If the third digit doesn't match the rules for the specified identification type
 * @throws {Error} If an invalid identification type is provided
 * @returns {void}
 */

export const validateThirdDigit = (thirdDigit: string, typeIdentification: TypeIdentification) => {
  const code = parseInt(thirdDigit);
  if (isNaN(code)) {
    throw new Error('Invalid third digit must be a number');
  }
  switch (typeIdentification) {
    case TypeIdentification.DNI:
    case TypeIdentification.RUC_PERSON_NATURAL:
      if (code < 0 || code > 9) {
        throw new Error('Invalid third digit must be between 0 and 9');
      }
      break;
    case TypeIdentification.RUC_SOCIETY_PRIVATE:
      if ( code !== 9 ) {
        throw new Error('Invalid third digit must be 9');
      }
      break;
    case TypeIdentification.RUC_PUBLIC_SOCIETY:
      if ( code !== 6 ) {
        throw new Error('Invalid third digit must be 6');
      }
      break;
    default:
      throw new Error('Invalid identification type');
  }
}