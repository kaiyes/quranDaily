// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Duas, Fard, Quran, Sunna, Tahajjud, Sadaqa, Morn, Dua } = initSchema(schema);

export {
  Duas,
  Fard,
  Quran,
  Sunna,
  Tahajjud,
  Sadaqa,
  Morn,
  Dua
};