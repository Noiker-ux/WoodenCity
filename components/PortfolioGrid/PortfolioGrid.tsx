import Image from "next/image";

export default function PortfolioGrid() {
  return (
    <div className="grid grid-cols-1 row-span-3 md:grid-rows-3 md:grid-cols-6 gap-8 gap-y-8">
      <div className="md:col-span-3 md:row-span-2">
        <Image
          src={"/Portfolio/Rectangle1.png"}
          alt="Реализованный проект"
          width={500}
          height={500}
          className="w-full"
        />
      </div>
      <div className="hidden row-span-2 gap-3 md:flex flex-col">
        <Image
          src={"/Portfolio/Rectangle2.png"}
          alt="Реализованный проект"
          width={500}
          height={500}
        />
        <Image
          src={"/Portfolio/Rectangle3.png"}
          alt="Реализованный проект"
          width={500}
          height={500}
          className="mt-auto"
        />
      </div>
      <div className="hidden md:block md:col-span-2 md:row-span-2">
        <Image
          src={"/Portfolio/Rectangle4.png"}
          alt="Реализованный проект"
          width={500}
          height={500}
          className="w-full"
        />
      </div>

      <Image
        src={"/Portfolio/Rectangle5.png"}
        alt="Реализованный проект"
        width={500}
        height={500}
        className="w-full"
      />

      <Image
        src={"/Portfolio/Rectangle6.png"}
        alt="Реализованный проект"
        width={500}
        height={500}
        className="w-full"
      />

      <Image
        src={"/Portfolio/Rectangle7.png"}
        alt="Реализованный проект"
        width={500}
        height={500}
        className="w-full"
      />

      <Image
        src={"/Portfolio/Rectangle8.png"}
        alt="Реализованный проект"
        width={500}
        height={500}
        className="w-full"
      />
      <Image
        src={"/Portfolio/Rectangle9.png"}
        alt="Реализованный проект"
        width={500}
        height={500}
        className="w-full"
      />
      <Image
        src={"/Portfolio/Rectangle10.png"}
        alt="Реализованный проект"
        width={500}
        height={500}
        className="w-full"
      />
    </div>
  );
}
