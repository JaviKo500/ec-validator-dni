/**
 * Validates the establishment code in an Ecuadorian RUC number.
 * The establishment code represents a business location or branch and must be a positive number.
 * 
 * @param {string} code - The establishment code to validate
 * 
 * @throws {Error} If the establishment code is not a valid number
 * @throws {Error} If the establishment code is not greater than 0
 * 
 * @returns {void}
 */
export const validateCodeEstablishment = (code: string) => {
  const codeInt = parseInt(code);
  if (isNaN(codeInt)) {
    throw new Error('Invalid code establishment must be a number');
  }
  if (codeInt <= 0) {
    throw new Error('Invalid code establishment must be greater than 0');
  }
}