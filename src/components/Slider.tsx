import { FC } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import { BASE_URL } from "@/utils/constant";

// Define the type for banner data
export interface Banner {
  _id: string;
  name: string;
  image: string;
  type: string;
}

const Slider: FC = async () => {
  const response = await fetch(`${BASE_URL}/api/banner?type=top`, {
    cache: "no-store",
  });
  const banners: Banner[] = await response.json();

  // Component to display each banner
  const BannerItem: FC<{ banner: Banner }> = ({ banner }) => (
    <CarouselItem key={banner._id}>
      <Image
        src={`/${banner.image}`}
        alt={banner.name}
        width={1000}
        height={400}
        className="w-full h-[200px] sm:h-[300px] md:h-[350px] lg:h-[400px] object-cover rounded-2xl"
      />
    </CarouselItem>
  );

  return (
    <div className="py-10">
      <Carousel>
        <CarouselContent>
          {banners.map((banner) => (
            <BannerItem key={banner._id} banner={banner} />
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute top-1/2 -translate-y-1/2 left-5" />
        <CarouselNext className="absolute top-1/2 -translate-y-1/2 right-5" />
      </Carousel>
    </div>
  );
};

export default Slider;
