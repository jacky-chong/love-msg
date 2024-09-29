import { createSession } from "@/lib/session/session";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
import { z } from "zod";
import { procedure, router } from "../trpc";

const prisma = new PrismaClient();

export const signUpRouter = router({
  signUpAccount: procedure
    .input(z.object({ email: z.string(), password: z.string() }))
    .mutation(async (opts) => {
      try {
        const { email, password } = opts.input;
        //Create User
        const hashedPassword = await bcrypt.hash(password, 10);

        const data = await prisma.user.create({
          data: {
            email,
            password: hashedPassword,
          },
        });

        if (!data) {
          throw new Error("Sign Up Error");
        }

        const session = await createSession(data.id);
        return session;
      } catch (error: any) {
        throw new Error(error?.message);
      }
    }),
});
