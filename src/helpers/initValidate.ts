import { TypeIdentification } from '../interfaces/identification';

/**
 * Performs initial validation of an Ecuadorian identification number based on its type.
 * This function checks:
 * 1. If the identification is not empty
 * 2. If the identification type is valid
 * 3. If the identification matches the pattern for its type
 * 
 * @param {string} identification - The identification number to validate
 * @param {TypeIdentification} typeIdentification - The type of identification document
 * 
 * @throws {Error} If the identification is empty or contains only whitespace
 * @throws {Error} If the identification type is not valid
 * @throws {Error} If the identification doesn't match the pattern for its type
 * 
 * @returns {void}
 */
export const initValidate = (identification: string, typeIdentification: TypeIdentification) => {
  if ( !identification || !identification.trim().length ) {
    throw new Error('Identification not cant be empty');
  }

  const rule = VALIDATION_RULES[typeIdentification];

  if (!rule) {
    throw new Error('Identification type not valid');
  }

  if (!rule.pattern.test(identification)) {
    throw new Error(rule.errorMessage);
  }
}

/**
 * Interface defining the validation rules for each identification type.
 * Each rule consists of a RegExp pattern and an error message.
 */
interface ValidationRule {
  pattern: RegExp;
  errorMessage: string;
}

/**
 * Validation rules for different types of Ecuadorian identification documents.
 * - DNI (Cédula): 10 digits
 * - RUC (General): 13 digits
 * - RUC Natural Person: 13 digits
 * - RUC Private Society: 13 digits
 * - RUC Public Society: 13 digits
 */
const VALIDATION_RULES: Record<TypeIdentification, ValidationRule> = {
  [TypeIdentification.DNI]: {
    pattern: /^\d{10}$/,
    errorMessage: 'Identification not valid min 10 digits, max 10 digits and only numbers'
  },
  [TypeIdentification.RUC]: {
    pattern: /^\d{13}$/,
    errorMessage: 'Identification not valid min 13 digits, max 13 digits and only numbers'
  },
  [TypeIdentification.RUC_PERSON_NATURAL]: {
    pattern: /^\d{13}$/,
    errorMessage: 'Identification not valid min 13 digits, max 13 digits and only numbers'
  },
  [TypeIdentification.RUC_SOCIETY_PRIVATE]: {
    pattern: /^\d{13}$/,
    errorMessage: 'Identification not valid min 13 digits, max 13 digits and only numbers'
  },
  [TypeIdentification.RUC_PUBLIC_SOCIETY]: {
    pattern: /^\d{13}$/,
    errorMessage: 'Identification not valid min 13 digits, max 13 digits and only numbers',
  },
};