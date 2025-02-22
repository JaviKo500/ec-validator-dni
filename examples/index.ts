import { dniValidation } from '../src';

const listDni = [
  '0105566046',
  '12345678A1',
  '2505566046',
  '01A5566046',
  '0185566046',
  '0105566047',
  '0105566038',
];

listDni.forEach((dni) => {
  const isValid = dniValidation(dni);
  console.log(isValid);
});