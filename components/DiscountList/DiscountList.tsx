import { discounts } from "@/data/Discount";
import DiscountCard from "./DiscountCard/DiscountCard";

export default function DiscountList() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-12">
      {discounts.map((d) => (
        <DiscountCard data={d} key={d.title} />
      ))}
    </div>
  );
}
