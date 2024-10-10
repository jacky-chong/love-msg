import { PrismaClient } from "@prisma/client";
import { procedure, router } from "../trpc";
import { z } from "zod";
import bcrypt from "bcrypt";
import { createSession, deleteSession } from "@/lib/session/session";

const prisma = new PrismaClient();

export const signOutRouter = router({
  signOutAccount: procedure.mutation(async (opts) => {
    try {
      //const { userId } = opts;

      const res = await deleteSession();
      return res;
    } catch (error: any) {
      throw new Error(error?.message);
    }
  }),
});
