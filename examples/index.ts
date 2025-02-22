import { dniValidation, validateRuc, validateRucByType } from '../src';
import { TypeIdentification } from '../src/interfaces';

console.log('<--------------- JK Index --------------->');
console.log('DNI');
const listDni = [
  '0105566046',
  '12345678A1',
  '0185566046',
  '0105566047',
  '0105566038',
];

listDni.forEach((dni) => {
  const isValid = dniValidation(dni);
  console.log(isValid);
});

console.log('<--------------- JK Index --------------->');
console.log('RUC');
const listRuc = [
  '0105566046001',
  '12345678A1001',
  '2505566046001',
  '01A5566046001',
  '0195566046001',
  '0105566047001',
  '0165566038000',
];

listRuc.forEach((ruc) => {
  const isValid = validateRuc(ruc);
  console.log(isValid);
});

console.log('<--------------- JK Index --------------->');
console.log('RUC SOCIETY PRIVATE');
listRuc.forEach((ruc) => {
  const isValid = validateRucByType(ruc, TypeIdentification.RUC_SOCIETY_PRIVATE);
  console.log(isValid);
});

console.log('RUC PERSON NATURAL');

listRuc.forEach((ruc) => {
  const isValid = validateRucByType(ruc, TypeIdentification.RUC_PERSON_NATURAL);
  console.log(isValid);
});

console.log('RUC PUBLIC SOCIETY');

listRuc.forEach((ruc) => {
  const isValid = validateRucByType(ruc, TypeIdentification.RUC_PUBLIC_SOCIETY);
  console.log(isValid);
});