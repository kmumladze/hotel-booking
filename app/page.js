'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import Link from 'next/link';

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

  return (
    <div>
      {hotels.map((hotel) => {
        return (
          <div className="hotelCards" key={hotel.id}>
            <Image src={hotel.featuredImage} alt="hotel image" width={300} height={300} />
            <div className="hotelDetails">
              <h1>{hotel.name}</h1>
              <h3>
                <strong>Address:</strong> {hotel.address}
              </h3>
              <Link href="/fullinfo">
                <button className="btnDetails">View Details</button>
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
}
