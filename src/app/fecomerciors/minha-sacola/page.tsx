import ProductList from "./ProductList";

export default function MyProductsBag() {
  return (
    <section className="flex flex-col px-default py-3 gap-8 items-center w-full max-w-default min-h-[calc(100vh-260px-120px)]">
      <ProductList />
    </section>
  );
}
