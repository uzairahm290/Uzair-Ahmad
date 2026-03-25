import { NextResponse } from "next/server";

type ContactPayload = {
  name?: string;
  email?: string;
  message?: string;
};

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(req: Request) {
  const body = (await req.json()) as ContactPayload;

  const name = (body.name ?? "").trim();
  const email = (body.email ?? "").trim();
  const message = (body.message ?? "").trim();

  if (name.length < 2) {
    return NextResponse.json(
      { message: "Please provide a valid name." },
      { status: 400 }
    );
  }

  if (!emailRegex.test(email)) {
    return NextResponse.json(
      { message: "Please provide a valid email address." },
      { status: 400 }
    );
  }

  if (message.length < 10) {
    return NextResponse.json(
      { message: "Message should be at least 10 characters." },
      { status: 400 }
    );
  }

  return NextResponse.json({ message: "Message sent successfully." }, { status: 200 });
}