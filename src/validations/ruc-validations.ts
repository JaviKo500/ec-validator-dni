import { initValidate, validateCodeProvince } from '../helpers';
import { Result, TypeIdentification } from '../interfaces';

export const rucValidation = ( ruc: string ): Result => {
  try {
      initValidate( ruc, TypeIdentification.RUC );
      validateCodeProvince(ruc.substring(0, 2));
      const lastDigit = parseInt(ruc.substring(12, 13));
      if ( lastDigit <= 0 ) {
        return {
          isValid: false,
          errorMessage: 'Invalid last digit must be greater than 0',
        }
      }

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