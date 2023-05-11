import { Pool } from "pg";

export let db = new Pool({
  connectionString: "postgresql://postgres:Neer@j95@localhost:2395/postgres",
});
