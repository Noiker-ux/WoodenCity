import HouseProjectList from "@/components/HouseProjectList/HouseProjectList";
import { HOUSE_PROJECTS } from "@/data/HouseProjects";

export default function ProjectsPage() {
  return (
    <>
      <h1 className="title my-20">Готовые проекты домов</h1>
      <HouseProjectList dataList={HOUSE_PROJECTS} />
    </>
  );
}
