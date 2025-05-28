import HouseProjectCard from "./HouseProjectCard/HouseProjectCard";
import { THouseProjectCard } from "./HouseProjectCard/HouseProjectCard.props";

export default function HouseProjectList({
  dataList,
}: {
  dataList: THouseProjectCard[];
}) {
  return (
    <div className="grid xl:grid-cols-3 md:grid-cols-2 gap-10 grid-cols-1">
      {dataList.map((h) => (
        <HouseProjectCard data={h} key={h.nameHouse} />
      ))}
    </div>
  );
}
