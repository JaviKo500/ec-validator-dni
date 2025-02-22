import { algorithm10 } from "../../src/helpers";
import { INVALID_DNI, INVALID_RUC, VALID_DNI, VALID_RUC } from "../fake/identifications.fake";

describe('Algorithm10.test', () => {
  test( 'should be trigger error when first digits is empty', () => {
    expect( ()=> algorithm10('', '5') ).toThrowError('Invalid verification digit');
  });

  test( 'should be trigger error when first digits is not a number', () => {
    expect( ()=> algorithm10('A', '5') ).toThrowError('Invalid verification digit');
  });

  test( 'should be trigger error when verification digit is not a number', () => {
    expect( ()=> algorithm10('1', 'A') ).toThrowError('Invalid verification digit');
  });

  test( 'should be true when identification is valid', () => {
    VALID_DNI.forEach(item => {
      expect( algorithm10(item.substring(0,9), item[item.length-1]) ).toBe(true);
    });
    VALID_RUC.forEach(item => {
      expect( algorithm10(item.substring(0,9), item.substring(9,10)) ).toBe(true);
    });
  });
  
  test( 'should be trigger error when identification is not valid', () => {
    INVALID_DNI.forEach(item => {
      expect( ()=> algorithm10(item.substring(0,9), item[item.length-1]) ).toThrowError('Invalid verification digit');
    });
    expect( ()=> algorithm10('094236285', '5') ).toThrowError('Invalid verification digit');
    INVALID_RUC.forEach(item => {
      expect( ()=> algorithm10(item.substring(0,9), item.substring(9,10)) ).toThrowError('Invalid verification digit');
    });
  });
});