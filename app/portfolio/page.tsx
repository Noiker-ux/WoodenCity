import Image from "next/image";

export default function PortfolioPage() {
  return (
    <div className="mt-20">
      <h1 className="title">Наши работы</h1>
      <div className="mt-10 mx-auto grid grid-cols-1 md:grid-cols-4 gap-5">
        <Image
          className="w-full md:w-96 h-96 object-cover"
          src={"/Jobs/1.webp"}
          alt="Object1"
          width={500}
          height={500}
        />
        <Image
          className="w-full md:w-96 h-96 object-cover"
          src={"/Jobs/2.jpg"}
          alt="Object1"
          width={500}
          height={500}
        />
        <Image
          className="w-full md:w-96 h-96 object-cover"
          src={"/Jobs/3.webp"}
          alt="Object1"
          width={500}
          height={500}
        />
        <Image
          className="w-full md:w-96 h-96 object-cover"
          src={"/Jobs/4.jfif"}
          alt="Object1"
          width={500}
          height={500}
        />
        <Image
          className="w-full md:w-96 h-96 object-cover"
          src={"/Jobs/5.webp"}
          alt="Object1"
          width={500}
          height={500}
        />
        <Image
          className="w-full md:w-96 h-96 object-cover"
          src={"/Jobs/6.jpg"}
          alt="Object1"
          width={500}
          height={500}
        />
        <Image
          className="w-full md:w-96 h-96 object-cover"
          src={"/Jobs/7.jpg"}
          alt="Object1"
          width={500}
          height={500}
        />
        <Image
          className="w-full md:w-96 h-96 object-cover"
          src={"/Jobs/8.jpg"}
          alt="Object1"
          width={500}
          height={500}
        />
        <Image
          className="w-full md:w-96 h-96 object-cover"
          src={"/Jobs/9.jpg"}
          alt="Object1"
          width={500}
          height={500}
        />
        <Image
          className="w-full md:w-96 h-96 object-cover"
          src={"/Jobs/10.webp"}
          alt="Object1"
          width={500}
          height={500}
        />
        <Image
          className="w-full md:w-96 h-96 object-cover"
          src={"/Jobs/11.webp"}
          alt="Object1"
          width={500}
          height={500}
        />
        <Image
          className="w-full md:w-96 h-96 object-cover"
          src={"/Jobs/12.jpg"}
          alt="Object1"
          width={500}
          height={500}
        />
        <Image
          className="w-full md:w-96 h-96 object-cover"
          src={"/Jobs/13.webp"}
          alt="Object1"
          width={500}
          height={500}
        />
        <Image
          className="w-full md:w-96 h-96 object-cover"
          src={"/Jobs/14.jpg"}
          alt="Object1"
          width={500}
          height={500}
        />
        <Image
          className="w-full md:w-96 h-96 object-cover"
          src={"/Jobs/15.jpg"}
          alt="Object1"
          width={500}
          height={500}
        />
        <Image
          className="w-full md:w-96 h-96 object-cover"
          src={"/Jobs/17.jpg"}
          alt="Object1"
          width={500}
          height={500}
        />
        <Image
          className="w-full md:w-96 h-96 object-cover"
          src={"/Jobs/18.webp"}
          alt="Object1"
          width={500}
          height={500}
        />
        <Image
          className="w-full md:w-96 h-96 object-cover"
          src={"/Jobs/19.jpg"}
          alt="Object1"
          width={500}
          height={500}
        />
        <Image
          className="w-full md:w-96 h-96 object-cover"
          src={"/Jobs/20.jpg"}
          alt="Object1"
          width={500}
          height={500}
        />
      </div>
    </div>
  );
}
