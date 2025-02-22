import { algorithm10, algorithm11, initValidate, validateCodeEstablishment, validateCodeProvince, validateThirdDigit } from '../helpers';
import { Result, TypeIdentification } from '../interfaces';

export const validateRucByType = ( ruc: string, typeIdentification: TypeIdentification ): Result => {
  try {
      initValidate( ruc, TypeIdentification.RUC );
      validateCodeProvince(ruc.substring(0, 2));
      switch (typeIdentification) {
        case TypeIdentification.RUC_PERSON_NATURAL:
          validateThirdDigit(ruc.substring(2, 3), typeIdentification);
          validateCodeEstablishment(ruc.substring(10, 13));
          algorithm10(ruc.substring(0, 9), ruc.substring(9, 10));
          break;
        case TypeIdentification.RUC_SOCIETY_PRIVATE:
          validateThirdDigit(ruc.substring(2, 3), typeIdentification);
          validateCodeEstablishment(ruc.substring(10, 13));
          algorithm11(ruc.substring(0, 9), ruc.substring(9, 10), typeIdentification);
          break;
        case TypeIdentification.RUC_PUBLIC_SOCIETY:
          validateThirdDigit(ruc.substring(2, 3), typeIdentification);
          validateCodeEstablishment(ruc.substring(9, 13));
          algorithm11(ruc.substring(0, 8), ruc.substring(8, 9), typeIdentification);
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

export const validateRuc = ( ruc: string ): Result => {
  const validRucNatural = validateRucByType(ruc, TypeIdentification.RUC_PERSON_NATURAL);
  const validRucPrivate = validateRucByType(ruc, TypeIdentification.RUC_SOCIETY_PRIVATE);
  const validRucPublic = validateRucByType(ruc, TypeIdentification.RUC_PUBLIC_SOCIETY);
  if ( !validRucNatural.isValid && !validRucPrivate.isValid && !validRucPublic.isValid ) {
    return {
      isValid: false,
      errorMessage: validRucNatural.errorMessage || validRucPrivate.errorMessage || validRucPublic.errorMessage || 'Invalid RUC',
    }
  }
  return {
    isValid: true,
  }
}
