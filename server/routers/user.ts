import { PrismaClient } from "@prisma/client";
import { procedure, router } from "../trpc";
import { z } from "zod";

const prisma = new PrismaClient();

export const userRouter = router({
  getUsers: procedure.query(async () => {
    const result = await prisma.user.findMany();
    return result;
  }),
  addUser: procedure
    .input(z.object({ name: z.string(), race: z.string() }))
    .mutation(async (opts) => {
      const { input } = opts;
      await prisma.user.create({
        data: {
          email: input.name,
          password: input.race,
        },
      });
    }),
});
