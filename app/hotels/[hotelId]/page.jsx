'use client';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function HotelPage({ params }) {
  const { hotelId } = params;
  const [hotel, setHotel] = useState();

  useEffect(() => {
    async function fetchHotels() {
      const response = await fetch(`https://hotelbooking.stepprojects.ge/api/Hotels/GetHotel/${hotelId}`);
      const hotel = await response.json();

      setHotel(hotel);
    }

    fetchHotels();
  }, [hotelId]);

  return (
    <div>
      <Image src={hotel?.featuredImage} alt="Hotel image" width={300} height={300} />
    </div>
  );
}
