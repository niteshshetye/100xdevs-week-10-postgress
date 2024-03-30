import { Client } from "pg";
import { DEFAULT_URL } from "./config";

export async function getClient() {
  const client = new Client(DEFAULT_URL);
  await client.connect();
  return client;
}
