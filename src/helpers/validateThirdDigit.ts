import { TypeIdentification } from '../interfaces';
export const validateThirdDigit = (thirdDigit: string, typeIdentification: TypeIdentification) => {
  const code = parseInt(thirdDigit);
  switch (typeIdentification) {
    case TypeIdentification.DNI:
    case TypeIdentification.RUC_PERSON_NATURAL:
      if (code < 0 || code > 5) {
        throw new Error('Invalid third digit must be between 0 and 5');
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