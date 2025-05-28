import { priceList } from "@/data/priceList";
import moneyFormatter from "@/utils/moneyFormatter";

export default function PriceList() {
  return (
    <div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
        <div className="bg-[var(--second)] text-center py-3 rounded-xl">
          Вид материала
        </div>
        <div className="bg-[var(--second)] text-center py-3 rounded-xl">
          Цена за кв. м
        </div>
        <div className=" hidden lg:block bg-[var(--second)] text-center py-3 rounded-xl">
          Вид материала
        </div>
        <div className="hidden lg:block bg-[var(--second)] text-center py-3 rounded-xl">
          Цена за кв. м
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mt-5">
        {priceList.map((p) => (
          <div key={p.material} className="grid grid-cols-2">
            <p className="pl-3 md:pl-16">{p.material}</p>
            <p className="text-center">От {moneyFormatter(p.price)} руб.</p>
          </div>
        ))}
      </div>
    </div>
  );
}
