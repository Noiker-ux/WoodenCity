import { payments } from "@/data/Payment";
import PaymentCard from "./PaymentCard/PaymentCard";

export default function PaymentList() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
      {payments.map((p) => (
        <PaymentCard data={p} key={p.name} />
      ))}
    </div>
  );
}
