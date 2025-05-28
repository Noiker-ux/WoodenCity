import Image from "next/image";
import Link from "next/link";
import { TContactCartData } from "./ContactCart.props";

export default function ContactCart({ data }: TContactCartData) {
  const { imageUrl, name, role, tel } = data;

  return (
    <div className="flex flex-col md:flex-row items-center gap-5">
      <Image
        src={`/Contacts/${imageUrl}`}
        alt="Фотография"
        width={400}
        height={300}
        className="rounded-xl w-72 aspect-square object-cover"
      />
      <div className="flex flex-col gap-2">
        <p className="text-xl">{role}</p>
        <p className="text-2xl font-semibold">{name}</p>
        <Link href={`tel:${tel}`} className="text-2xl">
          {tel}
        </Link>
      </div>
    </div>
  );
}
