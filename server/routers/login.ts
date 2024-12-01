import { PrismaClient } from "@prisma/client";
import { procedure, router } from "../trpc";
import { z } from "zod";
import bcrypt from "bcrypt";
import { createSession } from "@/lib/session/session";

const prisma = new PrismaClient();

export const loginRouter = router({
  loginAccount: procedure
    .input(z.object({ email: z.string(), password: z.string() }))
    .mutation(async (opts) => {
      try {
        const { email, password } = opts.input;

        //Create User
        const res = await prisma.user.findFirst({
          where: {
            email,
          },
        });

        if (!res) {
          throw new Error("Invalid email or password1");
        }

        const isPasswordValid = await bcrypt.compare(password, res.password);

        if (!isPasswordValid) {
          throw new Error("Invalid email or password2");
        }

        const session = await createSession(res.id);
        return session;
      } catch (error: any) {
        throw new Error(error?.message);
      }
    }),
});
