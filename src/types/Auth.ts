import { z } from "zod";

export const RegisterSchema = z
    .object({
        name: z
            .string()
            .min(1, { message: "Name is required" })
            .max(50, { message: "Name cannot exceed 50 characters" })
            .regex(/^[a-zA-Z\s]+$/, { message: "Only letters and spaces allowed" }),
        email: z.string().email({ message: "Invalid email format" }),
        sPassword: z.string().min(8, { message: "Password must be at least 8 characters" }),
        cPassword: z.string(),
    })
    .refine((data) => data.sPassword === data.cPassword, {
        message: "Passwords do not match",
        path: ["cPassword"],
    });


export const LoginSchema = z.object({
    email: z.string().email({ message: "Invalid email format" }),
    password: z.string().min(8, { message: "Password must be at least 8 characters" }),
});

export type Credentials = z.infer<typeof LoginSchema>;


export type IRegister = z.infer<typeof RegisterSchema>;

