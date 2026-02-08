// proxy to resume in cf r2
import { NextResponse } from "next/server";

export async function GET() {
  const fileUrl = `https://assets.mraditya.my.id/cv.pdf`;

  const response = await fetch(fileUrl);

  if (!response.ok) {
    return NextResponse.json(
      { error: "Something wrong, this resume should be here" },
      { status: 404 },
    );
  }

  const blob = await response.blob();
  const headers = new Headers();
  headers.set("Content-Type", blob.type);

  return new NextResponse(blob.stream(), { headers });
}
