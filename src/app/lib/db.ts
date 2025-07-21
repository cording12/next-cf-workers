import { cache } from "react";
import { PrismaClient } from "@prisma/client";
import { PrismaNeon } from "@prisma/adapter-neon";

export const getDb = cache(() => {
  const adapter = new PrismaNeon({
    connectionString:
      "postgresql://neondb_owner:npg_rCwJIRt7jO9P@ep-silent-bread-abntyidg-pooler.eu-west-2.aws.neon.tech/neondb?sslmode=require&channel_binding=require",
  });
  return new PrismaClient({ adapter });
});
