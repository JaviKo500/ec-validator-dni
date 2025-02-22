import { TypeIdentification } from '../interfaces';
export const validateThirdDigit = (thirdDigit: string, typeIdentification: TypeIdentification) => {
  const code = parseInt(thirdDigit);
  switch (typeIdentification) {
    case TypeIdentification.DNI:
      if (code < 0 || code > 5) {
        throw new Error('Invalid third digit must be between 0 and 5');
      }
      break;
  
    default:
      break;
  }
}