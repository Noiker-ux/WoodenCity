"use client";
import Image from "next/image";
import { THouseProjectCardItem } from "./HouseProjectCard.props";
import moneyFormatter from "@/utils/moneyFormatter";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@heroui/react";

export default function HouseProjectCard({ data }: THouseProjectCardItem) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const {
    nameHouse,
    sizesHouse,
    floors,
    square,
    attic,
    price,
    imageHouse,
    balcony,
    brush,
    crovlya,
    electro,
    foundament,
    garage,
    ground,
    rooms,
    security,
    toalet,
    walls,
    description,
    subdescription,
    water,
  } = data;

  return (
    <div className="w-fit mx-auto">
      <Image
        src={`/HouseProjects/Houses/${imageHouse}`}
        width={500}
        height={500}
        alt={nameHouse}
        className="rounded-xl object-cover aspect-square"
      />
      <p className="text-lg mt-2 font-bold">{nameHouse}</p>
      <div className="grid grid-cols-2 grid-rows-2 gap-2 mt-2">
        <div className="flex gap-2">
          <Image
            src={"/HouseProjects/Icons/sizeIcon.svg"}
            width={40}
            height={40}
            alt={"Размеры дома"}
          />
          <div>
            <p>Размеры:</p>
            <p className="font-bold">{sizesHouse}</p>
          </div>
        </div>
        <div className="flex gap-2">
          <Image
            src={"/HouseProjects/Icons/flooreIcon.svg"}
            width={40}
            height={40}
            alt={"Размеры дома"}
          />
          <div>
            <p>Этажность:</p>
            <p className="font-bold">
              {floors}{" "}
              {floors === 1 ? "Этаж" : floors >= 5 ? "Этажей" : "Этажа"}
            </p>
          </div>
        </div>
        <div className="flex gap-2">
          <Image
            src={"/HouseProjects/Icons/squareIcon.svg"}
            width={40}
            height={40}
            alt={"Размеры дома"}
          />
          <div>
            <p>Площадь:</p>
            <p className="font-bold">{square} метров</p>
          </div>
        </div>
        <div className="flex gap-2">
          <Image
            src={"/HouseProjects/Icons/atticIcon.svg"}
            width={40}
            height={40}
            alt={"Размеры дома"}
          />
          <div>
            <p>Мансарда:</p>
            <p className="font-bold">{attic ? "Есть" : "Нет"}</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-2 md:gap-5 justify-between mt-2">
        <Button color="primary" radius="sm" className="button" onPress={onOpen}>
          Подробнее
        </Button>
        <Button color="primary" radius="sm" className="button">
          Купить за <b>{moneyFormatter(price)} 1Р</b>
        </Button>
      </div>

      <Modal isOpen={isOpen} onOpenChange={onOpenChange} size="2xl">
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                {nameHouse}
              </ModalHeader>
              <ModalBody>
                <p className="font-bold">Описание</p>
                <p>{description}</p>
                <p>{subdescription}</p>
                <p className="font-bold">Характеристики дома</p>
                <ul>
                  <li>* Площадь — {square}</li>
                  <li>* Количество этажей — {floors}</li>
                  <li>* Материал стен — {walls}</li>
                  <li>* Тип фундамента — {foundament}</li>
                  <li>* Кровля — {crovlya}</li>
                  <li>* Водоснабжение — {water}</li>
                  <li>* Канализация — {brush}</li>
                  <li>* Электричество — {electro}</li>
                  <li>* Число комнат — {rooms}</li>
                  <li>* Санузел — {toalet}</li>
                  <li>* Терраса/балкон — {balcony} </li>
                  <li>* Участок земли — {ground}</li>
                  <li>* Гараж — {garage}</li>
                  <li>* Система безопасности — {security}</li>
                </ul>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Закрыть
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
}
