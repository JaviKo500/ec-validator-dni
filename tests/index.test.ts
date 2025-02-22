import * as index from './../src';
describe('Index.test', () => {
  test( 'should be export all validations', () => {
    const expectedExports = [
      'dniValidation',
      'validateRucByType',
      'validateRuc',
    ];
    expect(Object.keys(index)).toEqual(expectedExports);
  });
});