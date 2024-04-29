import Image from "next/image";

export default function HotelDetails({ hotel }) {
  console.log(hotel);
  return (
    <div>
      {/* {hotel.map((room) => {
        
      })} */}
      <Image
        width={300}
        height={300}
        src={hotel.featuredImage}
        alt="hotel Image"
      />
      <h3>{hotel.name}</h3>
      <p>Address:{hotel.address}</p>
      <button>See more</button>
    </div>
  );
}
