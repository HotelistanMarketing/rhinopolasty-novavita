import { NextResponse } from 'next/server';

export async function GET() {
  const apiKey = process.env.IPGEOLOCATION_API_KEY;
  if (!apiKey) {
    return NextResponse.json({ error: 'API key for geolocation is not configured.' }, { status: 500 });
  }

  try {
    const response = await fetch(`https://api.ipgeolocation.io/ipgeo?apiKey=${apiKey}&fields=geo`);
    if (!response.ok) {
      throw new Error(`Geolocation API request failed with status ${response.status}`);
    }
    const data = await response.json();
    const countryCode = data?.country_code2?.toLowerCase() ?? 'us';
    return NextResponse.json({ countryCode });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ countryCode: 'us' });
  }
} 