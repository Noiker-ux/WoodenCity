export default function moneyFormatter(price: number) {
  return new Intl.NumberFormat("ru").format(price);
}
