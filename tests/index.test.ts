import * as index from './../src';
describe('Index.test', () => {
  test( 'should be export all validations', () => {
    const expectedExports = [
      'dniValidation',
      'isPossiblyValidRuc',
      'validateRucByType',
      'validateRuc',
      'TypeIdentification',
    ];
    expect(Object.keys(index)).toEqual(expectedExports);
  });
});