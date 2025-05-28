import Image from "next/image";
import { TTeamsItemData } from "./TeamsItem.props";

export default function TeamsItem({ data }: TTeamsItemData) {
  const { imageUrl, name, role, location } = data;
  return (
    <li key={name}>
      <Image
        width={300}
        height={300}
        alt=""
        src={imageUrl}
        className="aspect-14/13 w-full aspect-square object-cover rounded-2xl"
      />
      <h3 className="mt-6 text-lg/8 font-semibold tracking-tight ">{name}</h3>
      <p className="text-base/7 ">{role}</p>
      <p className="text-sm/6 ">{location}</p>
    </li>
  );
}
