import { Database } from "./types";
import { PostgresDb } from "./postgres-db";
import { SqliteDb } from "./sqlite-db";
import { products } from "./seed";
import type { GeneratedClient } from "@/generated/nodejs/openfeature";

export type { Database };

const postgres = new PostgresDb({ products });
const sqlite = new SqliteDb({ products });

export async function getConnection(
  flagsClient: GeneratedClient
): Promise<Database> {
  const useDistributed = await flagsClient.useDistributedDb();

  return useDistributed ? postgres : sqlite;
}
