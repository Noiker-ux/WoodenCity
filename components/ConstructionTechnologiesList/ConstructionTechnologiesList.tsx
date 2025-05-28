import ConstructionTechnologiesCard from "./ConstructionTechnologiesCard/ConstructionTechnologiesCard";
import { TConstructionTechnologiesCard } from "./ConstructionTechnologiesCard/ConstructionTechnologiesCard.props";

export default function ConstructionTechnologiesList({
  dataList,
}: {
  dataList: TConstructionTechnologiesCard[];
}) {
  return (
    <div className="flex flex-col gap-5">
      {dataList.map((t) => (
        <ConstructionTechnologiesCard data={t} key={t.tagName} />
      ))}
    </div>
  );
}
