import ConstructionTechnologiesList from "@/components/ConstructionTechnologiesList/ConstructionTechnologiesList";
import { ConstructionTechnology } from "@/data/ConstructionTechnology";

export default function TechonogyPage() {
  return (
    <>
      <h1 className="title my-20">Технологии строительства</h1>
      <ConstructionTechnologiesList dataList={ConstructionTechnology} />
    </>
  );
}
