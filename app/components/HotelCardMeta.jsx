export default function HotelCardMeta({ name, address }) {
  return (
    <>
      <h1 className="text-center text-xl">{name}</h1>
      <h3 className="flex flex-col text-center">
        <strong>Address:</strong> {address}
      </h3>
    </>
  );
}
