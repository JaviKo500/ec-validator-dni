import { algorithm10, initValidate, validateCodeProvince, validateThirdDigit } from '../helpers';
import { Result, TypeIdentification } from '../interfaces';


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