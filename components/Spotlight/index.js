import Image from "next/image";
export default function Spotlight({ image, artist }) {
  return (
    <div>
      <Image src={image} width={600} height={600} alt="Spotlight image" />
      <p>{artist}</p>
    </div>
  );
}
