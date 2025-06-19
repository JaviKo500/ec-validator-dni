import { validateRuc, validateRucByType } from '../../src';
import { TypeIdentification } from '../../src/interfaces';
import { 
  INVALID_ANY_RUC,
  INVALID_RUC, 
  INVALID_RUC_PUBLIC_SOCIETY, 
  INVALID_RUC_SOCIETY_PRIVATE, 
  VALID_ANY_RUC, 
  VALID_RUC, 
  VALID_RUC_PUBLIC_SOCIETY, 
  VALID_RUC_SOCIETY_PRIVATE 
} from '../fake/identifications.fake';

describe('RucValidations.test', () => {
  test( 'should be true when ruc type is RUC_PERSON_NATURAL', () => {
    VALID_RUC.forEach(item => {
      const result = validateRucByType(item, TypeIdentification.RUC_PERSON_NATURAL);
      expect(result.isValid).toBe(true);
      expect(result).toMatchObject({  isValid: true });
    });
  });

  test( 'should be false and error message when ruc type is RUC_PERSON_NATURAL invalid', () => {
    INVALID_RUC.forEach(item => {
      const result = validateRucByType(item, TypeIdentification.RUC_PERSON_NATURAL);
      expect(result.isValid).toBe(false);
      expect(result).toMatchObject({  isValid: false, errorMessage: expect.any(String) });
    });
  });

  test( 'should be true when ruc type is RUC_SOCIETY_PRIVATE', () => {
    VALID_RUC_SOCIETY_PRIVATE.forEach(item => {
      const result = validateRucByType(item, TypeIdentification.RUC_SOCIETY_PRIVATE);
      expect(result.isValid).toBe(true);
      expect(result).toMatchObject({  isValid: true });
    });
  });

  test( 'should be false and error message when ruc type is RUC_SOCIETY_PRIVATE invalid', () => {
    INVALID_RUC_SOCIETY_PRIVATE.forEach(item => {
      const result = validateRucByType(item, TypeIdentification.RUC_SOCIETY_PRIVATE);
      expect(result.isValid).toBe(false);
      expect(result).toMatchObject({  isValid: false, errorMessage: expect.any(String) });
    });
  });

  test( 'should be true when ruc type is RUC_PUBLIC_SOCIETY', () => {
    VALID_RUC_PUBLIC_SOCIETY.forEach(item => {
      const result = validateRucByType(item, TypeIdentification.RUC_PUBLIC_SOCIETY);
      expect(result.isValid).toBe(true);
      expect(result).toMatchObject({  isValid: true });
    });
  });

  test( 'should be false and error message when ruc type is RUC_PUBLIC_SOCIETY invalid', () => {
    INVALID_RUC_PUBLIC_SOCIETY.forEach(item => {
      const result = validateRucByType(item, TypeIdentification.RUC_PUBLIC_SOCIETY);
      expect(result.isValid).toBe(false);
      expect(result).toMatchObject({  isValid: false, errorMessage: expect.any(String) });
    });
  });

  test( 'should be true when ruc is valid', () => {
    VALID_ANY_RUC.forEach(item => {
      const result = validateRuc(item);
      expect(result.isValid).toBe(true);
      expect(result).toMatchObject({  isValid: true });
    });
  });

  test( 'should be false and error message when ruc is invalid', () => {
    INVALID_ANY_RUC.forEach(item => {
      const result = validateRuc(item);
      expect(result.isValid).toBe(false);
      expect(result).toMatchObject({  isValid: false, errorMessage: expect.any(String) });
    });
  });

  test( 'should be true when ruc is possibly valid', () => {
    const result = validateRuc('0105566046001');
    expect(result.isValid).toBe(true);
    expect(result).toMatchObject({  isValid: true });
  });

  test( 'should be true when ruc is possibly invalid', () => {
    const result = validateRuc('3305566046001');
    expect(result.isValid).toBe(false);
    expect(result).toMatchObject({  isValid: false, errorMessage: expect.any(String) });
  });
});