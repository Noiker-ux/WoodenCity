"use client";
import Image from "next/image";
import { TPaymentCardData } from "./PaymentCard.props";
import { Tooltip } from "@heroui/react";

export default function PaymentCard({ data }: TPaymentCardData) {
  const { icon, name, description } = data;
  return (
    <Tooltip
      showArrow
      content={<div className="p-5 max-w-96">{description}</div>}
    >
      <div className="bg-[var(--second)] rounded-lg flex flex-col gap-5 justify-center items-center py-8 px-5 cursor-pointer hover:bg-[var(--second-hover)] transition-all">
        <Image
          src={`/Payments/${icon}`}
          alt={`Cпособ оплаты: ${name}`}
          width={55}
          height={55}
        />
        {name}
      </div>
    </Tooltip>
  );
}
