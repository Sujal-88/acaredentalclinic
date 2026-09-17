import { NextResponse } from 'next/server';

export async function GET() {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY;
  const placeId = process.env.NEXT_PUBLIC_GOOGLE_PLACE_ID;

  if (!apiKey || !placeId) {
    return NextResponse.json({ error: "Missing API credentials" }, { status: 500 });
  }

  try {
    // Fetch reviews, total rating, and total number of ratings
    const response = await fetch(
      `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=reviews,rating,user_ratings_total&key=${apiKey}`
    );
    
    const data = await response.json();

    if (data.status !== 'OK') {
      throw new Error(data.error_message || 'Failed to fetch from Google');
    }

    return NextResponse.json({
      reviews: data.result.reviews || [],
      rating: data.result.rating,
      totalRatings: data.result.user_ratings_total
    });
    
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch reviews" }, { status: 500 });
  }
}