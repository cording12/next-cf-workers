import { NextResponse } from "next/server";
import { getDb } from "@/app/lib/db";

export async function GET() {
  const db = await getDb();

  try {
    const result = await db.user.findMany();

    return NextResponse.json({ result }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      {
        error: {
          message: error instanceof Error ? error.message : String(error),
          stack: error instanceof Error ? error.stack : undefined,
        },
      },
      { status: 500 }
    );
  }
}
