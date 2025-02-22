import { algorithm11 } from '../../src/helpers';
import { TypeIdentification } from '../../src/interfaces';
import { INVALID_RUC_PUBLIC_SOCIETY, INVALID_RUC_SOCIETY_PRIVATE, VALID_RUC_PUBLIC_SOCIETY, VALID_RUC_SOCIETY_PRIVATE } from '../fake/identifications.fake';

describe('Algorithm11.test', () => {
  test( 'should be trigger error when type identification is not valid', () => {
    expect( ()=> algorithm11('', '', TypeIdentification.DNI) ).toThrowError('Invalid identification type');
    expect( ()=> algorithm11('', '', TypeIdentification.RUC) ).toThrowError('Invalid identification type');
    expect( ()=> algorithm11('', '', TypeIdentification.RUC_PERSON_NATURAL) ).toThrowError('Invalid identification type');
  });

  test( 'should be trigger error when initial digits is empty', () => {
    expect( ()=> algorithm11('', '5', TypeIdentification.RUC_SOCIETY_PRIVATE) ).toThrowError('Digits length must be equal to coefficients length');
    expect( ()=> algorithm11('', '5', TypeIdentification.RUC_PUBLIC_SOCIETY) ).toThrowError('Digits length must be equal to coefficients length');
  });

  test( 'should be trigger error when verification digit is empty and type identification is RUC_SOCIETY_PRIVATE', () => {
    expect( ()=> algorithm11('010556604', '', TypeIdentification.RUC_SOCIETY_PRIVATE) ).toThrowError('Invalid verification digit');
  });

  test( 'should be trigger error when verification digit is empty and type identification is RUC_PUBLIC_SOCIETY', () => {
    expect( ()=> algorithm11('01055660', '', TypeIdentification.RUC_PUBLIC_SOCIETY) ).toThrowError('Invalid verification digit');
  });

  test( 'should be trigger error when initial digits is not a number', () => {
    expect( ()=> algorithm11('0105566A', '1', TypeIdentification.RUC_PUBLIC_SOCIETY) ).toThrowError('Invalid verification digit');
  });

  test( 'should be trigger error when verification digit is not a number', () => {
    expect( ()=> algorithm11('010556604', 'A', TypeIdentification.RUC_SOCIETY_PRIVATE) ).toThrowError('Invalid verification digit');
    expect( ()=> algorithm11('01055660', 'A', TypeIdentification.RUC_PUBLIC_SOCIETY) ).toThrowError('Invalid verification digit');
  });

  test( 'should be true when identification is valid and type identification is RUC_SOCIETY_PRIVATE', () => {
    VALID_RUC_SOCIETY_PRIVATE.forEach(item => {
      expect( algorithm11(item.substring(0,9), item.substring(9,10), TypeIdentification.RUC_SOCIETY_PRIVATE) ).toBe(true);
    });
  });

  test( 'should be trigger error when identification is not valid and type identification is RUC_SOCIETY_PRIVATE', () => {
    INVALID_RUC_SOCIETY_PRIVATE.forEach(item => {
      expect( () => algorithm11(item.substring(0,9), item.substring(9,10), TypeIdentification.RUC_SOCIETY_PRIVATE) ).toThrowError('Invalid verification digit');
    });
  });

  test( 'should be true when identification is valid and type identification is RUC_PUBLIC_SOCIETY', () => {
    VALID_RUC_PUBLIC_SOCIETY.forEach(item => {
      expect( algorithm11(item.substring(0,8), item.substring(8,9), TypeIdentification.RUC_PUBLIC_SOCIETY) ).toBe(true);
    });
  });

  test( 'should be trigger error when identification is not valid and type identification is RUC_PUBLIC_SOCIETY', () => {
    INVALID_RUC_PUBLIC_SOCIETY.forEach(item => {
      expect( () => algorithm11(item.substring(0,8), item.substring(8,9), TypeIdentification.RUC_PUBLIC_SOCIETY) ).toThrowError('Invalid verification digit');
    });
  });
});