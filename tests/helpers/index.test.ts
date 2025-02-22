import * as validators from './../../src/helpers';

describe('Index.test', () => {
  test( 'should be export all helpers', () => {
    const expectedExports = [
      'initValidate',
      'validateCodeProvince',
      'validateThirdDigit',
      'validateCodeEstablishment',
      'algorithm10',
      'algorithm11'
    ];

    expect(Object.keys(validators)).toEqual(expectedExports);
  });
});