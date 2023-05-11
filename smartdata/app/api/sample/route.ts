import { NextResponse } from "next/server";
import { db } from "../../db";

export async function GET(request: Request) {
  const { rows } = await db.query("SELECT * from sample_poi");

  return NextResponse.json(rows);
}
