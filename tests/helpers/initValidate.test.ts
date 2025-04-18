import { initValidate } from "../../src/helpers";
import { TypeIdentification } from "../../src/interfaces";
import { INVALID_DNI, INVALID_RUC, VALID_DNI, VALID_RUC } from "../fake/identifications.fake";

describe('InitValidate.test', () => {
  test( 'should be trigger error when identification is empty', () => {
    const messageError = 'Identification not cant be empty';
    expect( ()=> initValidate('', TypeIdentification.DNI) ).toThrowError(messageError);
  });
  
  test( 'should be trigger error when identification have whitespaces', () => {
    const messageErrorEmpty = 'Identification not cant be empty';
    const messageError = 'Identification not valid min 10 digits, max 10 digits and only numbers';
    expect( ()=> initValidate('  ', TypeIdentification.DNI) ).toThrowError(messageErrorEmpty);
    expect( ()=> initValidate('010556604 ', TypeIdentification.DNI) ).toThrowError(messageError);
  });
  
  test( 'should be trigger when rule is not valid', () => {
    expect( ()=> initValidate('0105566046', 'RUC_DNI' as any) ).toThrowError('Identification type not valid');
  });

  test( 'should be trigger error when identification is not valid type DNI', () => {
    const messageError = 'Identification not valid min 10 digits, max 10 digits and only numbers';
    INVALID_DNI.forEach(item => {
      expect( ()=> initValidate(item, TypeIdentification.DNI) ).toThrowError(messageError);
    });
  });
  
  test( 'should not be trigger error when identification is valid type DNI', () => {
    VALID_DNI.forEach(item => {
      expect( ()=> initValidate(item, TypeIdentification.DNI) ).not.toThrowError();
    });
  });

  test( 'should be trigger error when identification is not valid type RUC', () => {
    const messageError = 'Identification not valid min 13 digits, max 13 digits and only numbers';
    INVALID_RUC.forEach(item => {
      expect( ()=> initValidate(item, TypeIdentification.RUC) ).toThrowError(messageError);
      expect( ()=> initValidate(item, TypeIdentification.RUC_PERSON_NATURAL) ).toThrowError(messageError);
      expect( ()=> initValidate(item, TypeIdentification.RUC_SOCIETY_PRIVATE) ).toThrowError(messageError);
      expect( ()=> initValidate(item, TypeIdentification.RUC_PUBLIC_SOCIETY) ).toThrowError(messageError);
    });
  });

   test( 'should not be trigger error when identification is valid type RUC', () => {
    VALID_RUC.forEach(item => {
      expect( ()=> initValidate(item, TypeIdentification.RUC) ).not.toThrowError();
      expect( ()=> initValidate(item, TypeIdentification.RUC_PERSON_NATURAL) ).not.toThrowError();
      expect( ()=> initValidate(item, TypeIdentification.RUC_SOCIETY_PRIVATE) ).not.toThrowError();
      expect( ()=> initValidate(item, TypeIdentification.RUC_PUBLIC_SOCIETY) ).not.toThrowError();
    });
  });
});