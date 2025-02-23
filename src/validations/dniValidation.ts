import { algorithm10, initValidate, validateCodeProvince, validateThirdDigit } from '../helpers';
import { Result, TypeIdentification } from '../interfaces';

/**
 * Validates an Ecuadorian DNI (Cédula de Identidad) number.
 * @param {string} dni - The DNI number to validate
 * 
 * @returns {Result} An object containing:
 *   - isValid: boolean indicating if the DNI is valid
 *   - errorMessage?: string with error details if validation fails
 */

export const dniValidation = (dni: string): Result => {
  try {
    initValidate( dni, TypeIdentification.DNI );
    validateCodeProvince(dni.substring(0, 2));
    validateThirdDigit(dni.substring(2, 3), TypeIdentification.DNI);
    algorithm10(dni.substring(0, 9), dni.substring(9, 10));
  } catch (error: any) {
    return {
      isValid: false,
      errorMessage: error.message,
    }
  }
  return {
    isValid: true,
  };
}