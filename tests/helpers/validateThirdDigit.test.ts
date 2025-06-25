import { validateThirdDigit } from '../../src/helpers';
import { TypeIdentification } from '../../src/interfaces';

describe('ValidateThirdDigit.test', () => {
  test( 'should be trigger error when third digit is empty', () => {
    expect( ()=> validateThirdDigit('', TypeIdentification.DNI) ).toThrowError('Invalid third digit must be a number');
  });
  test( 'should be trigger error when third digit is not a number', () => {
    expect( ()=> validateThirdDigit('A10', TypeIdentification.DNI) ).toThrowError('Invalid third digit must be a number');
  });

  test( 'should be trigger error when type identification is not valid', () => {
    expect( ()=> validateThirdDigit('1', 'PASSPORT' as any ) ).toThrowError('Invalid identification type');
    expect( ()=> validateThirdDigit('1', '' as any ) ).toThrowError('Invalid identification type');
  });

  test( 'should be trigger error when third digit is not between 0 and 5', () => {
    expect( ()=> validateThirdDigit('-1', TypeIdentification.DNI) ).toThrowError('Invalid third digit must be between 0 and 9');
    expect( ()=> validateThirdDigit('10', TypeIdentification.DNI) ).toThrowError('Invalid third digit must be between 0 and 9');
  });

  test( 'should be not trigger error when third digit is valid and type identification is DNI or RUC_PERSON_NATURAL', () => {
    expect( ()=> validateThirdDigit('0', TypeIdentification.DNI) ).not.toThrowError();
    expect( ()=> validateThirdDigit('3', TypeIdentification.DNI) ).not.toThrowError();
    expect( ()=> validateThirdDigit('5', TypeIdentification.DNI) ).not.toThrowError();
    expect( ()=> validateThirdDigit('0', TypeIdentification.RUC_PERSON_NATURAL) ).not.toThrowError();
    expect( ()=> validateThirdDigit('1', TypeIdentification.RUC_PERSON_NATURAL) ).not.toThrowError();
    expect( ()=> validateThirdDigit('5', TypeIdentification.RUC_PERSON_NATURAL) ).not.toThrowError();
  });

  test( 'should be trigger error when third digit is not 9 and type identification is RUC_SOCIETY_PRIVATE', () => {
    expect( ()=> validateThirdDigit('1', TypeIdentification.RUC_SOCIETY_PRIVATE) ).toThrowError();
    expect( ()=> validateThirdDigit('8', TypeIdentification.RUC_SOCIETY_PRIVATE) ).toThrowError();
    expect( ()=> validateThirdDigit('10', TypeIdentification.RUC_SOCIETY_PRIVATE) ).toThrowError();
  });

  test( 'should be not trigger error when third digit is 9 and type identification is RUC_SOCIETY_PRIVATE', () => {
    expect( ()=> validateThirdDigit('9', TypeIdentification.RUC_SOCIETY_PRIVATE) ).not.toThrowError();
  });

  test( 'should be trigger error when third digit is not 6 and type identification is RUC_PUBLIC_SOCIETY', () => {
    expect( ()=> validateThirdDigit('1', TypeIdentification.RUC_PUBLIC_SOCIETY) ).toThrowError();
    expect( ()=> validateThirdDigit('8', TypeIdentification.RUC_PUBLIC_SOCIETY) ).toThrowError();
    expect( ()=> validateThirdDigit('10', TypeIdentification.RUC_PUBLIC_SOCIETY) ).toThrowError();
  });
  test( 'should be not trigger error when third digit is 6 and type identification is RUC_PUBLIC_SOCIETY', () => {
    expect( ()=> validateThirdDigit('6', TypeIdentification.RUC_PUBLIC_SOCIETY) ).not.toThrowError();
  });
});