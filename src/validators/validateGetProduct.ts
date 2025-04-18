
import { Request, Response, NextFunction ,RequestHandler} from 'express';
import { safeParse } from 'valibot';
import { getProductSchema } from './schema/getProductSchema';

export const validateGetProduct = (req: Request, res: Response ,next: NextFunction) => {
   const id= req.params;
  const result = safeParse(getProductSchema, id );
  if (!result.success) {
  res.status(400).json({ errors: result.issues });
  return;
  }
  req.params = result.output;

  next();
};

