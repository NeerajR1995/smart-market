import { NextResponse } from "next/server";
import { db } from "../../db";

export async function GET(request: Request) {
  const res = request;
  const url = new URL(request.url);
  let dataset = decodeURIComponent(url.searchParams.get("dataset") ?? "");
  const { rows } = await db.query(
    `SELECT columnname from data_catalogue where database_name= '${dataset}'`
  );
  return NextResponse.json(rows);
}
