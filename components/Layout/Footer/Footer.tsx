import Link from "next/link";
import Image from "next/image";
import { navigation } from "@/data/Navigation";

export default function Footer() {
  return (
    <footer className="bg-[var(--second)] mt-12 relative z-20">
      <div className="mx-auto container px-6 py-12 flex flex-col-reverse md:flex-row items-center justify-between">
        <div className="flex flex-col text-center gap-4 mt-10 md:flex-row justify-center gap-x-6 md:order-2">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-[var(--text)] hover:text-[var(--second)] transition-all"
            >
              <span className="">{item.name}</span>
            </Link>
          ))}
        </div>
        <Image
          src={"/logo.svg"}
          alt=""
          width={270}
          height={70}
          className="hidden lg:block"
        />
        <Image
          src={"/logoIcon.svg"}
          alt=""
          width={70}
          height={70}
          className="lg:hidden"
        />
      </div>
    </footer>
  );
}
