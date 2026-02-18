import { NextRequest, NextResponse } from "next/server";

// Eclipse API proxy — placeholder for future live data connection
// Currently the dashboard uses mock data, but this route is ready
// to proxy requests to Eclipse when OhmCo goes live.

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const apiUrl = process.env.ECLIPSE_API_URL;
    const apiKey = process.env.ECLIPSE_API_KEY;

    if (!apiUrl || !apiKey) {
      return NextResponse.json(
        { error: "Eclipse API not configured. Using mock data." },
        { status: 503 }
      );
    }

    const response = await fetch(`${apiUrl}/api/request`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${apiKey}`,
      },
      body: JSON.stringify(body),
    });

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error("Eclipse API proxy error:", error);
    return NextResponse.json(
      {
        error: "Failed to proxy request to Eclipse",
        details: error instanceof Error ? error.message : String(error),
      },
      { status: 500 }
    );
  }
}
