import CategoryList from "./_components/CategoryList";
import ProductList from "./_components/ProductList";
import Slider from "./_components/Slider";

export default function Home() {
  return (
    <main className="">
      <Slider />
      <CategoryList />
      <ProductList />
    </main>
  );
}
