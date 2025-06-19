import { dniValidation } from "../../src";
import { INVALID_DNI, VALID_DNI } from "../fake/identifications.fake";

describe('DniValidation.test', () => {
  test( 'should be true when identification is valid', () => {
    VALID_DNI.forEach(item => {
      const result = dniValidation(item);
      expect(result.isValid).toBe(true);
      expect(result).toMatchObject({  isValid: true });
    });
  });

  test( 'should be true when identification foreign is valid', () => {
    const result = dniValidation('3050724842');
    expect(result.isValid).toBe(true);
    expect(result).toMatchObject({  isValid: true });
  });

  test( 'should be true when identification foreign is invalid', () => {
    const result = dniValidation('3350724842');
    expect(result.isValid).toBe(false);
    expect(result).toMatchObject({  isValid: false });
  });

  test( 'should be false when identification is invalid', () => {

    INVALID_DNI.forEach(item => {
      const result = dniValidation(item);
      expect(result.isValid).toBe(false);
      expect(result).toMatchObject({  isValid: false, errorMessage: expect.any(String) });
    });
  });
});