import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  const { text } = await request.json();
  
  if (!text || text.length > 1000) {
    return NextResponse.json({ error: 'Texte invalide' }, { status: 400 });
  }

  // API Web Speech côté client pour l’instant. Gratuit et sans clé
  return NextResponse.json({ success: true, text });
}
