import HotelCard from './HotelCard';

export default function HotelCards({ hotels }) {
  return (
    <div className="flex justify-center gap-5">
      {hotels.map((hotel) => {
        return <HotelCard key={hotel.id} hotel={hotel} />;
      })}
    </div>
  );
}
