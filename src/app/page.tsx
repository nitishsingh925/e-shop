import { lazy, Suspense } from "react";

// Import components with lazy loading
const BottomBannerHomePage = lazy(
  () => import("@/components/BottomBannerHomePage")
);
const CategoryList = lazy(() => import("@/components/CategoryList"));
const Footer = lazy(() => import("@/components/Footer"));
const ProductList = lazy(() => import("@/components/ProductList"));
const Slider = lazy(() => import("@/components/Slider"));

export default function Home() {
  return (
    <main className="px-2 sm:px-3 md:px-4 lg:px-6 xl:px-8 2xl:px-10">
      <div className="max-w-screen-xl mx-auto">
        {/* Top Banner Slider */}
        <Suspense fallback={<div>Loading Slider...</div>}>
          <Slider />
        </Suspense>

        {/* Category List  */}
        <Suspense fallback={<div>Loading Categories...</div>}>
          <CategoryList />
        </Suspense>

        {/* Product List */}
        <Suspense fallback={<div>Loading Products...</div>}>
          <ProductList />
        </Suspense>

        {/* Bottom Banner full page single Image */}
        <Suspense fallback={<div>Loading Banner...</div>}>
          <BottomBannerHomePage />
        </Suspense>

        {/* Footer */}
        <Suspense fallback={<div>Loading Footer...</div>}>
          <Footer />
        </Suspense>
      </div>
    </main>
  );
}
