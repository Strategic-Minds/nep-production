import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';
import * as schema from './schema';
import dotenv from 'dotenv';

dotenv.config();

// NOTE: falls back to a placeholder connection string at build time so
// `next build` can statically analyze API routes even before a real
// Postgres/Supabase connection string is set in Vercel env vars. Auth,
// dashboard, and team features will not actually work until POSTGRES_URL
// is set to a real connection string (see Supabase project settings ->
// Database -> Connection string).
const connectionString =
  process.env.POSTGRES_URL ?? 'postgres://placeholder:placeholder@localhost:5432/placeholder';

export const client = postgres(connectionString);
export const db = drizzle(client, { schema });
