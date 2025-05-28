"use client";
import { Button, Form, Input } from "@heroui/react";
import { FiPaperclip } from "react-icons/fi";
import Image from "next/image";
import Link from "next/link";

export default function FormEconomy() {
  return (
    <div className="w-full flex gap-7 justify-between">
      <div>
        <p>
          Просто прикрепите готовую смету и наш специалист расчитает стоимость
          работ и материалов по оптовым ценам
        </p>
        <Form className="flex flex-col gap-5 mt-3">
          <Input
            isRequired
            radius="sm"
            size="lg"
            type="file"
            variant="bordered"
            color="primary"
            endContent={<FiPaperclip />}
            description={
              <p>* - возможные форматы файлов: pdf, word, png, jpeg, excel</p>
            }
            classNames={{
              label: "text-black/50 dark:text-white/90",
              input: ["bg-transparent"],
              innerWrapper: "bg-transparent",
              inputWrapper: [
                "border-[var(--second)]",
                "text-[var(--second)]",
                "py-7",
              ],
            }}
          />
          <Input
            isRequired
            radius="sm"
            size="lg"
            variant="bordered"
            color="primary"
            placeholder="Ваше Имя"
            classNames={{
              label: "text-black/50 dark:text-white/90",
              input: ["bg-transparent"],
              innerWrapper: "bg-transparent",
              inputWrapper: ["border-[var(--second)]", "py-7", "outline-none"],
            }}
          ></Input>

          <Input
            isRequired
            radius="sm"
            size="lg"
            type="tel"
            variant="bordered"
            color="primary"
            placeholder="Ваш телефон"
            classNames={{
              label: "text-black/50 dark:text-white/90",
              input: ["bg-transparent", "outline-none!"],
              innerWrapper: "bg-transparent",
              inputWrapper: ["border-[var(--second)]", "py-7"],
            }}
          ></Input>
          <p className="mt-3">
            Отправляя форму вы дает свое{" "}
            <Link href={"#"} className="underline">
              согласие на обработку персональных данных
            </Link>{" "}
            в соответствии с пользовательским соглашением
          </p>
          <div className=" sm:flex sm:flex-row flex-col gap-4 justify-between w-full">
            <Button className="button" radius="sm" size="lg">
              Отправить заявку
            </Button>
            <Button className="button  mt-5 sm:mt-0" radius="sm" size="lg">
              Позвонить нам
            </Button>
          </div>
        </Form>
      </div>
      <div className="hidden lg:block">
        <Image
          src={"/form.png"}
          width={630}
          height={445}
          alt="Фото чертежей"
          className="w-full h-full object-cover rounded-lg"
        />
      </div>
    </div>
  );
}
