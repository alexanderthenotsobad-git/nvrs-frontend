import { NextResponse } from 'next/server';

const UBUNTU_SERVER = 'https://alexanderthenotsobad.us/api';

export async function PUT(request, { params }) {
  const { id } = params;
  const body = await request.json();
  const response = await fetch(`${UBUNTU_SERVER}/menu-items/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body)
  });
  const data = await response.json();
  return NextResponse.json(data);
}

export async function DELETE(request, { params }) {
  const { id } = params;
  const response = await fetch(`${UBUNTU_SERVER}/menu-items/${id}`, {
    method: 'DELETE'
  });
  const data = await response.json();
  return NextResponse.json(data);
}