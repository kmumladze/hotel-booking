'use client';
import HotelDetails from '@/app/components/HotelDetails';
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

  return <div>{hotel ? <HotelDetails hotel={hotel} /> : <div>Loading...</div>}</div>;
}
