import BottomBannerHomePage from "./_components/BottomBannerHomePage";
import CategoryList from "./_components/CategoryList";
import ProductList from "./_components/ProductList";
import Slider from "./_components/Slider";

export default function Home() {
  return (
    <main className="px-2 sm:px-3 md:px-4 lg:px-6 xl:px-8 2xl:px-10">
      <div className="max-w-screen-xl mx-auto">
        <Slider />
        <CategoryList />
        <ProductList />
        <BottomBannerHomePage />
      </div>
    </main>
  );
}
