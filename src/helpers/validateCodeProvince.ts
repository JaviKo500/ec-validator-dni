/**
 * Validates the province code (first two digits) of an Ecuadorian identification number.
 * Ecuador has 24 provinces, each identified by a code from 00 to 24.
 * 
 * @param {string} provinceCode - The two-digit province code to validate
 * 
 * @throws {Error} If the province code is not a valid number
 * @throws {Error} If the province code is not between 00 and 24
 * 
 * @returns {void}
 */

export const validateCodeProvince = (provinceCode: string) => {
  const code = parseInt(provinceCode);

  if( isNaN(code) ) {
    throw new Error('Invalid province code (first 2 digits) must be a number and between 00 - 24 and 30 for foreigners');
  }
  if ( code === 30 ) return;
  if (code < 0 || code > 24) {
    throw new Error('Invalid province code (first 2 digits) must be between 00 - 24 and 30 for foreigners');
  }
}