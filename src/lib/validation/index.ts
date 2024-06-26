import * as z from "zod";

export const SignupValidation = z.object({
    name: z.string().min(2, {
        message: "Name must be atleast 2 character",
    }),
    username: z.string().min(2, {
        message: "Username must be atleast 2 character",
    }),
    email: z.string().email(),
    password: z.string().min(8, {
        message: "Password must be atleast 8 character",
    }),
})

export const SigninValidation = z.object({
    email: z.string().email(),
    password: z.string().min(8, {
        message: "Password must be atleast 8 character",
    }),
})