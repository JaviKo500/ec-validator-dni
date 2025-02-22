import { validateCodeProvince } from '../../src/helpers';

describe('ValidateCodeProvince.test', () => {
  const messageError = 'Invalid province code (first 2 digits) must be between 00 and 24';
  const messageErrorNaN = 'Invalid province code (first 2 digits) must be a number and between 00 and 24';
  test( 'should be trigger error when province code is empty', () => {
    expect( ()=> validateCodeProvince('') ).toThrowError(messageErrorNaN);
  });

  test( 'should be trigger error when province code not is a number', () => {
    expect( ()=> validateCodeProvince('AA') ).toThrowError(messageErrorNaN);
  });

  test( 'should be trigger error when province code is not between 00 and 24', () => {
    expect( ()=> validateCodeProvince('-1') ).toThrowError(messageError);
    expect( ()=> validateCodeProvince('50') ).toThrowError(messageError);
    expect( ()=> validateCodeProvince('25') ).toThrowError(messageError);
  });

  test( 'should not be trigger error when province code is between 00 and 24', () => {
    expect( ()=> validateCodeProvince('00') ).not.toThrowError();
    expect( ()=> validateCodeProvince('10') ).not.toThrowError();
    expect( ()=> validateCodeProvince('12') ).not.toThrowError();
    expect( ()=> validateCodeProvince('24') ).not.toThrowError();
  });

});