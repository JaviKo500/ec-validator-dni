import { validateCodeEstablishment } from "../../src/helpers";

describe('ValidateCodeEstablishment.test', () => {
  const messageErrorNaN = 'Invalid code establishment must be a number';
  const messageError = 'Invalid code establishment must be greater than 0';
  test( 'should be trigger error when code establishment is empty', () => {
    expect( ()=> validateCodeEstablishment('') ).toThrowError(messageErrorNaN);
  });

  test( 'should be trigger error when code establishment is not a number', () => {
    expect( ()=> validateCodeEstablishment('AA') ).toThrowError(messageErrorNaN);
  });

  test( 'should be trigger error when code establishment is negative', () => {
    expect( ()=> validateCodeEstablishment('-1') ).toThrowError(messageError);
  });

  test( 'should be not trigger error when code establishment is valid', () => {
    expect( ()=> validateCodeEstablishment('1') ).not.toThrowError();
    expect( ()=> validateCodeEstablishment('2') ).not.toThrowError();
    expect( ()=> validateCodeEstablishment('5') ).not.toThrowError();
  });
});