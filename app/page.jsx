'use client';

import { useEffect, useState } from 'react';
import HotelCards from './components/HotelCards';

export default function Home() {
  const [hotels, setHotels] = useState([]);

  useEffect(() => {
    async function fetchHotels() {
      const response = await fetch('https://hotelbooking.stepprojects.ge/api/Hotels/GetAll');
      const hotels = await response.json();
      setHotels(hotels);
    }

    fetchHotels();
  }, []);

  return <HotelCards hotels={hotels} />;
}
