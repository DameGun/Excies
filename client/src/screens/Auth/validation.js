import { object, string } from 'yup';

const loginSchema = {
    errMessage: 'Provided username or password incorrect',
    chain: object({
        username: string().required(),
        password: string().required()
    })
}

const registerSchema = {
    errMessage: 'Provided credentials are incorrect',
    chain: object({
        username: string().required(),
        password: string().required(),
        email: string().email().optional()
    })
}

export {
    loginSchema,
    registerSchema
}