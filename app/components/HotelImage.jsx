import Image from 'next/image';

export default function HotelImage({ image }) {
  return <Image className="w-full rounded-t-lg" src={image} alt="hotel image" width={300} height={500} />;
}
