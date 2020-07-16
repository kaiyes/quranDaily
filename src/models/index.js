// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Duas, Dua } = initSchema(schema);

export {
  Duas,
  Dua
};