import {z} from "zod"

export const KotlinPairSchema = <ASchema extends z.ZodTypeAny, BSchema extends z.ZodTypeAny> (aSchema: ASchema, bSchema: BSchema) => z.object({
    first: aSchema,
    second: bSchema
})
export type KotlinPair<A, B> = z.infer<ReturnType<typeof KotlinPairSchema<z.ZodType<A, any, any>, z.ZodType<B, any, any>>>>
