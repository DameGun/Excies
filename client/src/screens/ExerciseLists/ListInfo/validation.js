import { object, string } from 'yup';

export const listInfoSchema = {
    errMessage: 'Provided name cannot be empty',
    chain: object({
        name: string().trim().nonNullable().required(),
        description: string().trim().nonNullable()
    })
}