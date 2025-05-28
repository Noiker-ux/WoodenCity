"use client";
import Image from "next/image";
import { TDiscountCardData } from "./DiscountCard.props";
import { Button } from "@heroui/button";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@heroui/modal";

export default function DiscountCard({ data }: TDiscountCardData) {
  const { image, title, description } = data;
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <div
        className="w-full h-full bg-[var(--second)] px-5 pt-20 pb-10 rounded-lg text-center relative"
        style={{
          backgroundImage: 'url("/Discount/pattern.png")',
        }}
      >
        <Image
          src={`/Discount/${image}`}
          alt=""
          width={65}
          height={65}
          className="mx-auto"
        />
        <p className="mt-4 text-xl font-bold text-[var(--text)]">{title}</p>
        <p className="mt-2">{description}</p>
        <div className="w-fit mx-auto mt-10">
          <Button className="button" onPress={onOpen}>
            Подробнее
          </Button>
        </div>
      </div>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} size="2xl">
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1"></ModalHeader>
              <ModalBody>
                Уточнить информацию можно по номеру: +7 (4012) 92-08-95 или же
                по этому телефону через телеграмм
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
