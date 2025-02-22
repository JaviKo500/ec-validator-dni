import { algorithm10, initValidate, validateCodeEstablishment, validateCodeProvince, validateThirdDigit } from '../helpers';
import { Result, TypeIdentification } from '../interfaces';

export const rucValidation = ( ruc: string, typeIdentification: TypeIdentification ): Result => {
  try {
      initValidate( ruc, TypeIdentification.RUC );
      validateCodeProvince(ruc.substring(0, 2));
      switch (typeIdentification) {
        case TypeIdentification.RUC_PERSON_NATURAL:
          validateThirdDigit(ruc.substring(2, 3), typeIdentification);
          validateRucPersonNatural(ruc);
          break;
        default:
          break;
      }
    } catch (error: any) {
      return {
        isValid: false,
        errorMessage: error.message || 'Invalid RUC',
      }
    }
    return {
      isValid: true,
    };
}

const validateRucPersonNatural = (ruc: string) => {  
  validateCodeEstablishment(ruc.substring(10, 13));
  algorithm10(ruc.substring(0, 9), ruc.substring(9, 10));
}