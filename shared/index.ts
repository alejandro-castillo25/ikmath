import { z } from "zod";


const id_trait = z.number().int().positive();


export const IntSchema = z.object({
  id: id_trait,
  int: z.string(),
  header: z.string().optional(),
  footer: z.string().optional(),
  // title: z.string().optional()
});

export const QueryParmsSchema = z.object({
  id: id_trait,
  from: id_trait,
  to: id_trait,
  search: z.string()
}).refine(({from, to}) => from <= to, {
  message: `'from' can't be greater than 'to', that doesn't make sense`
});

export const QueryParmsPartialSchema = QueryParmsSchema.partial();
// TODO: Use the QueryParams stuff
export type Int = z.infer<typeof IntSchema>;
export type QueryParms = z.infer<typeof QueryParmsSchema>;
export type QueryParmsPartial = z.infer<typeof QueryParmsPartialSchema>;


/*

const schema = z.object({
  min: z.number(),
  max: z.number(),
}).refine((data) => data.max > data.min, {
  message: 'Max must be greater than min',
  path: ['max'], // Highlights the error on the 'max' field
});

*/
