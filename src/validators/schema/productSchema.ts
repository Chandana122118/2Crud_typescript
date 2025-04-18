import { object, string ,email, minLength, pipe, parse, number, maxValue, minValue } from 'valibot';

export const createProductSchema= object({
    name: pipe(string(), minLength(7)),
    quantity: pipe(number(), maxValue(100, 'quantity should not be greater than 100')),
    price : pipe(number(), minValue(100, 'price should be minimum 100'))

});

 


