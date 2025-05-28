import { navigationSocial } from "@/data/Social";

import Link from "next/link";

export default function SocialLinks() {
  return (
    <div className="hidden fixed right-0  bottom-1/2 sm:flex flex-col gap-8 bg-[#C8B9A4] py-5 px-4">
      {navigationSocial.map((s) => (
        <Link href={s.href} key={s.name} className=" transition-all group">
          {
            <s.icon
              color="white"
              className="w-5 h-5 group-hover:fill-[var(--text)] transition-all"
            />
          }
        </Link>
      ))}
    </div>
  );
}
