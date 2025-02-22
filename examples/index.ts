import { dniValidation, rucValidation } from '../src';

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
  // console.log(isValid);
});

const listRuc = [
  '0105566046001',
  '12345678A1001',
  '2505566046001',
  '01A5566046001',
  '0185566046001',
  '0105566047001',
  '0105566038000',
];

listRuc.forEach((ruc) => {
  const isValid = rucValidation(ruc);
  console.log(isValid);
});