import { NextResponse } from "next/server";

// GET request
export async function GET() {
  const users = [
    { id: 1, name: "John Doe", email: "john@example.com", role: "admin" },
    { id: 2, name: "Jane Doe", email: "jane@example.com", role: "user" },
  ];
  return NextResponse.json(users);
}

// POST request
export async function POST(req: Request) {
  const data = await req.json();
  return NextResponse.json({ message: "User created", data });
}
