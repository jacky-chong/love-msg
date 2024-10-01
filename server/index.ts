import { loginRouter } from "./routers/login";
import { signOutRouter } from "./routers/sign-out";
import { signUpRouter } from "./routers/sign-up";
import { userRouter } from "./routers/user";
import { router } from "./trpc";

export const appRouter = router({
  user: userRouter,
  signUp: signUpRouter,
  login: loginRouter,
  signOut: signOutRouter,
});

export type AppRouter = typeof appRouter;
