import { TypeIdentification } from '../interfaces/identification';

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

interface ValidationRule {
  pattern: RegExp;
  errorMessage: string;
}

const VALIDATION_RULES: Record<TypeIdentification, ValidationRule> = {
  [TypeIdentification.DNI]: {
    pattern: /^\d{10}$/,
    errorMessage: 'Identification not valid min 10 digits, max 10 digits and only numbers'
  },
  [TypeIdentification.RUC]: {
    pattern: /^\d{13}$/,
    errorMessage: 'Identification not valid min 13 digits, max 13 digits and only numbers'
  }
};