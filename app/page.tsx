import ConstructionTechnologiesList from "@/components/ConstructionTechnologiesList/ConstructionTechnologiesList";
import DiscountList from "@/components/DiscountList/DiscountList";
import FormEconomy from "@/components/FormEconomy/FormEconomy";
import HouseProjectList from "@/components/HouseProjectList/HouseProjectList";
import PaymentList from "@/components/PaymentList/PaymentList";
import PortfolioGrid from "@/components/PortfolioGrid/PortfolioGrid";
import Preview from "@/components/Preview/Preview";
import PriceList from "@/components/PriceList/PriceList";
import WhyChooseUs from "@/components/WhyChooseUs/WhyChooseUs";
import { HOUSE_PROJECTS } from "@/data/HouseProjects";
import { Button } from "@heroui/button";
import Image from "next/image";
import { Link } from "@heroui/link";
import { ConstructionTechnology } from "@/data/ConstructionTechnology";

export default function Home() {
  return (
    <div className="flex flex-col gap-40">
      <div>
        <Preview />
      </div>

      <div>
        <WhyChooseUs />
      </div>

      <div id="projects">
        <h2 className="title">Готовые проекты домов</h2>
        <Link href="/projects" className="mt-10 block">
          Посмотреть еще
        </Link>
        <HouseProjectList dataList={HOUSE_PROJECTS.slice(0, 3)} />
      </div>

      <div>
        <h2 className="title mb-10">Цены на строительство</h2>
        <PriceList />
      </div>

      <div>
        <h2 className="title mb-10">Технологии строительства</h2>
        <ConstructionTechnologiesList
          dataList={ConstructionTechnology.slice(0, 3)}
        />
        <div className="flex mt-10 items-center  gap-5">
          <div className="w-full h-1 bg-[var(--second)]"></div>
          <div>
            <Button className="button" radius="sm" as={Link} href="/techonogy">
              Посмотреть все
            </Button>
          </div>
          <div className="w-full h-1 bg-[var(--second)]"></div>
        </div>
      </div>

      <div>
        <h2 className="title mb-10">
          Спецпредложения на строительство домов и коттеджей
        </h2>
        <DiscountList />
      </div>

      <div>
        <h2 className="title">Реализованные проекты</h2>
        <p className=" mt-5 mb-5 text-[var(--text)]">
          С нами, за прошлый год в новый дом въехало 39 семей!
        </p>
        <PortfolioGrid />
      </div>

      <div>
        <h2 className="title">Фото и видео отчет</h2>
        <p className=" mt-5 mb-5 text-[var(--text)]">
          При необходимости возможны фото и видео отчеты с участка, где
          происходит строительство.
        </p>
        <div className="flex justify-center items-center xl:flex-row flex-col gap-5 xl:justify-between">
          <Image
            src={"/Reports/Report1.png"}
            alt="Отчет"
            width={450}
            height={600}
          />{" "}
          <Image
            src={"/Reports/Report2.png"}
            alt="Отчет"
            width={450}
            height={600}
          />{" "}
          <Image
            src={"/Reports/Report3.png"}
            alt="Отчет"
            width={450}
            height={600}
          />
        </div>
      </div>

      <div>
        <h2 className="title">Способы оплаты домов</h2>
        <p className=" mt-5 mb-5 text-[var(--text)]">
          Способы оплаты домов Выберите способ, удобный для Вас.
        </p>
        <PaymentList />
      </div>

      <div>
        <h2 className="title">Способы оплаты домов</h2>
        <p className=" mt-5 mb-5 text-[var(--text)]">
          Хотите сэкономить на стройке?
        </p>
        <FormEconomy />
      </div>
    </div>
  );
}
