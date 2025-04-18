

import { Request, Response, NextFunction ,RequestHandler} from 'express';
import { safeParse } from 'valibot';
import { createProductSchema } from './schema/productSchema';

export const validateCreateProduct = (req: Request, res: Response, next: NextFunction) => {
  const result = safeParse(createProductSchema, req.body);



  console.log(result);

  if (!result.success) {
  res.status(400).json({ errors: result.issues });
  return;
  
  }

  req.body = result.output;

  next();
};
