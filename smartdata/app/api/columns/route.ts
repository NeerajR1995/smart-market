import { NextResponse } from "next/server";
import { db } from "../../db";

export async function GET(request: Request) {
  const { rows } = await db.query("SELECT database_name from index_file");

  return NextResponse.json(rows);
}
