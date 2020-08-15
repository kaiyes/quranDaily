// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Duas, FardSalah, Quran, SunnaSalah, tahajjud, sadaqat, MorningDua, Dua } = initSchema(schema);

export {
  Duas,
  FardSalah,
  Quran,
  SunnaSalah,
  tahajjud,
  sadaqat,
  MorningDua,
  Dua
};