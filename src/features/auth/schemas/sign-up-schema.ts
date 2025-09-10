import { z } from "zod";

export const SignUpSchema = z
  .object({
    email: z.email({ message: "Invalid email." }),
    password: z
      .string({ message: "Invalid password." })
      .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,16}$/, {
        message:
          "Password must be 8-16 characters long and contain at least one upper case letter, one lower case letter and one number.",
      }),
    confirmPassword: z.string({ message: "Invalid password." }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match.",
  });

export type SignUpData = z.infer<typeof SignUpSchema>;
