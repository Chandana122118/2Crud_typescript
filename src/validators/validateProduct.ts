import { safeParse } from 'valibot';
import { createProductSchema } from '../schema/productSchema';

export const validateCreateProduct = (body: unknown) => {
  const result = safeParse(createProductSchema, body);

  if (!result.success) {
    
    throw result.issues;
  }

  return result.output;
};