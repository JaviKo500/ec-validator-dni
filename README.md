# Ecuador Document Validator

A TypeScript library for validating Ecuadorian identification documents (ID card and RUC).

Algorithm based in this document [Blog](https://medium.com/@bryansuarez/c%C3%B3mo-validar-c%C3%A9dula-y-ruc-en-ecuador-b62c5666186f)

## Features

- Ecuadorian ID card (cédula) validation
- RUC validation for:
  - Natural persons
  - Private companies
  - Public entities
- Written in TypeScript
- Comprehensive testing with Vitest
- Zero external dependencies

## Installation

```bash
npm install ec-validator-dni
# or
yarn add ec-validator-dni
# or
pnpm add ec-validator-dni
```

## Usage

Once the package is installed, you can import the library using `import` or `require` approach:

```ts
import { dniValidation } from 'ec-validator-dni';
console.log(ecValidatorDni.dniValidation('010011111'));
```

If you use `require` for importing, **only default export is available**:

```js
const ecValidatorDni = require('ec-validator-dni');

console.log(ecValidatorDni.dniValidation('010011111'));
```



### ID Card Validation

```typescript
import { dniValidation } from 'ec-validator-dni';

const result = dniValidation('1234567890');
console.log(result); // { isValid: true or false, errorMessage?: string }
```

### RUC Validation

```typescript
import { validateRucByType, validateRuc, TypeIdentification } from 'ec-validator-dni';

const resultValidRuc = validateRuc('1234567890001'); 
console.log(resultValidRuc);// { isValid: true or false, errorMessage?: string }
// Validate RUC for natural person
const resultValidNatural = validateRucByType('1234567890001', TypeIdentification.RUC_PERSON_NATURAL); 
console.log(resultValidNatural);// { isValid: true or false, errorMessage?: string }

// Validate RUC for private company
const resultValidPrivate = validateRucByType('1234567890001', TypeIdentification.RUC_SOCIETY_PRIVATE); 
console.log(resultValidPrivate);// { isValid: true or false, errorMessage?: string }

// Validate RUC for public entity
const resultValidPublic = validateRucByType('1234567890001', TypeIdentification.RUC_PUBLIC_SOCIETY); 
console.log(resultValidPublic);// { isValid: true or false, errorMessage?: string }
```

## Development

### Prerequisites

- Node.js (>= 14.0.0)
- npm, yarn, or pnpm

### Development Setup

```bash
# Clone the repository
git clone https://github.com/JaviKo500/ec-validator-dni.git

# Install dependencies
npm install


# Run project
npm run dev
```

### Testing

The project uses Vitest for testing. To run the tests:

```bash
npm run test
```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Credits

This project is inspired in [validacion-cedula-ruc-ecuador](https://github.com/tavo1987/validacion-cedula-ruc-ecuador) by [@tavo1987](https://github.com/tavo1987)

## Author

[@javiko500](https://github.com/javiko500)