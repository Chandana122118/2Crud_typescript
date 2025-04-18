import { object, string, regex, pipe } from 'valibot';

export const getProductSchema = object({
    id:pipe(
        string(),
        (regex(/^[0-9a-fA-F]{24}$/, 'Invalid ObjectId'))),
  });