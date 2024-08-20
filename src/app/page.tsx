import BottomBannerHomePage from "./_components/BottomBannerHomePage";
import CategoryList from "./_components/CategoryList";
import ProductList from "./_components/ProductList";
import Slider from "./_components/Slider";

export default function Home() {
  return (
    <main className="">
      <Slider />
      <CategoryList />
      <ProductList />
      <BottomBannerHomePage />
    </main>
  );
}
