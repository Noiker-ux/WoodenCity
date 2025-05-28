import { gratVibes } from "@/fonts/greatVibes";
import Image from "next/image";
import Link from "next/link";
import { IoIosArrowRoundDown } from "react-icons/io";

export default function Preview() {
  return (
    <div className="h-auto lg:h-screen mt-10">
      <div className="flex w-full flex-col lg:flex-row  items-start justify-between gap-3">
        <div className="w-full">
          <h1 className="title">
            Построим для вас надежный дом в Калининграде
          </h1>
          <p className="mt-3">
            Компания WoodeenCity специализируется на строительстве деревянных
            домов премиум-класса, сочетающих традиционные технологии с
            инновационными решениями. Каждый проект воплощается с использованием
            отборных материалов и передовых строительных методик, гарантирующих
            надежность конструкции и долговечность. Благодаря индивидуальному
            подходу к каждому клиенту наши дома становятся настоящими семейными
            гнездами, в которых царит атмосфера тепла, комфорта и гармонии с
            природой. Выбирайте WoodeenCity — выбирайте качество жизни в
            красивом деревянном доме вашей мечты!
          </p>
          <p className="mt-5">
            Наши специалисты обладают богатым опытом в сфере деревянного
            домостроения и предлагают широкий спектр услуг: от разработки
            индивидуального проекта до полного комплекса работ по возведению
            вашего будущего жилища. Обращаясь в WoodeenCity, вы получаете
            надежный партнерство и уверенность в результате. Наслаждайтесь
            жизнью в экологически чистом и эстетически привлекательном
            пространстве, построенном специально для вас!
          </p>
          <div className="flex flex-col md:flex-row gap-5 justify-between mt-20 px-6">
            <div className="flex flex-col gap-1 items-center">
              <p className={`text-5xl ${gratVibes.className}`}>2000</p>
              <p>Успешных заказов</p>
            </div>
            <div className="flex flex-col gap-1 items-center">
              <p className={`text-5xl ${gratVibes.className}`}>10 000</p>
              <p>Довольных клиентов</p>
            </div>
            <div className="flex flex-col gap-1 items-center">
              <p className={`text-5xl ${gratVibes.className}`}>32</p>
              <p>Дочерних филиала</p>
            </div>
          </div>
        </div>
        <div className="relative w-full">
          <Image
            src={"/main.png"}
            alt="Превью"
            width={1000}
            height={1000}
            className=""
          />
        </div>
      </div>
      <div className="hidden lg:flex justify-center flex-col items-center relative mt-1">
        <Link href={"#projects"}>Просмотреть</Link>
        <IoIosArrowRoundDown
          size={"40px"}
          className="arrowShow absolute top-5"
        />
      </div>
    </div>
  );
}
