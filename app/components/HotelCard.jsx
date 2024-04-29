import Link from 'next/link';
import HotelImage from './HotelImage';
import HotelCardMeta from './HotelCardMeta';

export default function HotelCard({ hotel }) {
  return (
    <div className="flex flex-col justify-center mt-[50px] gap-[30px] border border-[#2b2b2b38] hover:shadow-zinc-500 shadow-lg rounded-lg transition-all hover:scale-105">
      <HotelImage image={hotel.featuredImage} />
      <div className="hotelDetails">
        <HotelCardMeta name={hotel.name} address={hotel.adrress} />
        <Link className="flex justify-center px-5 py-4" href={`/hotels/${hotel.id}`}>
          <button className="flex justify-center border border-black w-40 px-5 py-4 rounded-lg">View Details</button>
        </Link>
      </div>
    </div>
  );
}
