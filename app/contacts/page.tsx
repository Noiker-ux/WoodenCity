import ContactCart from "@/components/Contacts/ContactCart/ContactCart";
import YMapContact from "@/components/Contacts/YMapContact/YMapContact";
import Link from "next/link";
import { FaCircleInfo } from "react-icons/fa6";
import { BsBank2 } from "react-icons/bs";
export default function ContactsPage() {
  return (
    <div className="mt-10">
      <h1 className="title">Контакты</h1>
      <div className="flex flex-col xl:flex-row mt-20 w-full justify-between gap-5">
        <ContactCart
          data={{
            imageUrl: "director_1.webp",
            role: "Директор",
            name: "Зубов Михаил Маркович",
            tel: "8 (4012) 538-355",
          }}
        />
        <ContactCart
          data={{
            imageUrl: "director_2.jpg",
            role: "Заместитель директора",
            name: "Попов Макар Фёдорович",
            tel: "8 (4012) 538-523",
          }}
        />
      </div>
      <YMapContact />
      <div className="w-full flex flex-col md:flex-row gap-5 justify-between mt-20">
        <div className="bg-[#c9b59b] bg-opacity-20 py-5 px-3 rounded-xl w-full">
          <div className="flex gap-3 items-start">
            <FaCircleInfo size={30} />
            <p className="text-2xl font-semibold">Реквизиты строительной фирмы “WoodenCity”</p>
          </div>
          <div className="flex flex-col gap-3 mt-2">
            <p>
              <b>Полное наименование:</b> Строительная фирма “WoodenCity”
            </p>
            <p>
              <b>Юридический адрес:</b> 236007, Калининград, ул. Дм. Донского, 1
            </p>
            <p>
              <b>Фактический адрес:</b> 236002, г. Калининград, ул. Житомирская, д. 8А, 4 (четвертый) этаж
            </p>
            <p>
              <b>Электронный адрес:</b>{" "}
              <Link href={"mailto:woodenCity@mail.ru"} className="link">
                woodenCity@mail.ru
              </Link>
            </p>
            <p>
              <b>Телефон:</b>{" "}
              <Link href={"tel:84012531255"} className="link">
                8 (4012) 53-12-55
              </Link>
            </p>
            <p>
              <b>Факс:</b> 8 (4012) 64-04-96
            </p>
            <p>
              <b>Сайт:</b>{" "}
              <Link href={"/"} className="link">
                woodencity.ru
              </Link>
            </p>
          </div>
        </div>

        <div className="bg-[#a0917d] bg-opacity-20 py-5 px-3 rounded-xl w-full">
          <div className="flex gap-3 items-start">
            <BsBank2 size={30} />
            <p className="text-2xl font-semibold"> Банковские реквизиты</p>
          </div>
          <div className="flex flex-col gap-3 mt-2">
            <p>
              <b>ИНН:</b> 3906375886
            </p>
            <p>
              <b>КПП:</b> 390601001
            </p>
            <p>
              <b>л/с:</b> 03352J33120
            </p>
            <p>
              <b>ЕКС:</b> 40102810545370000028
            </p>
            <p>
              <b>КС:</b> 03221643270000003500
            </p>
            <p>
              <b>БИК:</b> 012748051
            </p>
            <p>
              <b>Наименование банка:</b> ОТДЕЛЕНИЕ КАЛИНИНГРАД БАНКА РОССИИ//УФК по Калининградской области, г.
              Калининград
            </p>
            <p>
              <b>ОГРН:</b> 1183926043982
            </p>
            <p>
              <b>ОКТМО:</b> 27701000
            </p>
            <p>
              <b>ОКПО:</b> 35365577
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
