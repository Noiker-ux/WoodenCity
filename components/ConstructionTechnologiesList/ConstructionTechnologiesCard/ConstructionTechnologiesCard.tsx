"use client";
import { Button } from "@heroui/button";
import Image from "next/image";
import { TConstructionTechnologiesCardData } from "./ConstructionTechnologiesCard.props";
import moneyFormatter from "@/utils/moneyFormatter";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from "@heroui/modal";
export default function ConstructionTechnologiesCard({
  data,
}: TConstructionTechnologiesCardData) {
  const {
    imageConstructionTechnologies,
    tagName,
    nearestPrice,
    additionalList,
    description,
  } = data;

  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <div className="flex flex-col xl:flex-row gap-10">
        <div className=" min-w-fit h-fit relative">
          <Image
            src={`/CounstructionTechonologiest/${imageConstructionTechnologies}`}
            width={630}
            height={325}
            alt="a"
            className="xl:w-[630px] xl:h-[325px] w-full object-cover"
          />
          <p className="absolute top-4 left-6 py-1 px-2 rounded-md bg-[#D9D9D9] text-sm text-[var(--text)]">
            {tagName}
          </p>
          <div className="absolute bottom-4 right-6 flex gap-3">
            <p className="py-1 px-2 rounded-md bg-[#D9D9D9] text-sm w-28 text-[var(--text)] flex items-center">
              ~ {moneyFormatter(nearestPrice)} Р
            </p>
            <Button
              size="sm"
              className="rounded-md py-2 w-28 text-[var(--text)]"
              onPress={onOpen}
            >
              Подробнее
            </Button>
          </div>
        </div>
        <div className="">
          <ul className="flex flex-col gap-4">
            {additionalList.map((a) => (
              <li key={a} dangerouslySetInnerHTML={{ __html: a }}></li>
            ))}
          </ul>
        </div>
      </div>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} size="2xl">
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                {tagName}
              </ModalHeader>
              <ModalBody>
                <div
                  dangerouslySetInnerHTML={{ __html: description }}
                  className="flex flex-col gap-3"
                ></div>
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
    </>
  );
}
