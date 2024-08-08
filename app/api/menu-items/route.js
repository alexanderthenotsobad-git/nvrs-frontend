import { NextResponse } from 'next/server';

const UBUNTU_SERVER = 'https://alexanderthenotsobad.us/api';

export async function GET() {
  const response = await fetch(`${UBUNTU_SERVER}/menu-items`);
  const data = await response.json();
  return NextResponse.json(data);
}

export async function POST(request) {
  const body = await request.json();
  const response = await fetch(`${UBUNTU_SERVER}/menu-items`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body)
  });
  const data = await response.json();
  return NextResponse.json(data);
}