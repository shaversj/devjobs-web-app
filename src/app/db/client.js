import { getOptionalRequestContext } from "@cloudflare/next-on-pages";
import { drizzle } from "drizzle-orm/d1";
const { env } = getOptionalRequestContext() ?? { env: {} };

export const db = drizzle(env.DB);
