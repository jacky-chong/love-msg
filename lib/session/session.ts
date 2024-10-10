import "server-only";
import { JWTPayload, jwtVerify, SignJWT } from "jose";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const key = new TextEncoder().encode(process.env.SESSION_SECRET);

const cookie = {
  name: "session",
  options: { httpOnly: true, secure: true, sameSite: "lax", path: "/" },
  duration: 24 * 60 * 60 * 1000,
};

export const encrypt = async (payload?: JWTPayload) => {
  return new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("1day")
    .sign(key);
};

export const decrypt = async (session: string | Uint8Array) => {
  try {
    const { payload } = await jwtVerify(session, key, {
      algorithms: ["HS256"],
    });

    return payload;
  } catch (error) {
    return null;
  }
};

export const createSession = async (userId: string) => {
  const expires = new Date(Date.now() + cookie.duration);
  const session = await encrypt({ userId, expires });

  cookies().set(cookie.name, session, {
    ...cookie.options,
    expires,
    sameSite: "lax",
  });

  return { userId, expires };
};

export const verifySession = async () => {
  const getCookie = cookies().get(cookie.name)?.value;

  const session = getCookie && ((await decrypt(getCookie)) as any);

  if (!session && !session?.userId) {
    redirect("/login");
  }

  return { userId: session.userId };
};

export const deleteSession = async () => {
  cookies().delete(cookie.name);
  return { success: true, redirect: "/login" };
};
