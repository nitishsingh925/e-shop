"use client";
import { FC, useEffect, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import { Skeleton } from "./ui/skeleton";

// Define the type for banner data
export interface Banner {
  _id: string;
  name: string;
  image: string;
  type: string;
}

const Slider: FC = () => {
  const [banners, setBanners] = useState<Banner[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const fetchBanners = async () => {
    try {
      const response = await fetch("api/banner?type=top");
      const data: Banner[] = await response.json();
      console.log(data);
      setBanners(data);
      setIsLoading(false);
    } catch (error) {
      console.error("Failed to fetch banners:", error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchBanners();
  }, []);

  // Component to display loading UI
  const LoadingUI: FC = () => (
    <CarouselItem>
      <Skeleton className="w-full h-[200px] sm:h-[300px] md:h-[350px] lg:h-[400px] flex items-center justify-center rounded-2xl bg-gradient-to-r from-neutral-300 to-neutral-400 animate-pulse shadow-md"></Skeleton>
    </CarouselItem>
  );

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
          {isLoading ? (
            // Display loading UI while fetching data
            <LoadingUI />
          ) : (
            // Display banners once data is loaded
            banners.map((banner) => (
              <BannerItem key={banner._id} banner={banner} />
            ))
          )}
        </CarouselContent>
        <CarouselPrevious className="absolute top-1/2 -translate-y-1/2 left-5" />
        <CarouselNext className="absolute top-1/2 -translate-y-1/2 right-5" />
      </Carousel>
    </div>
  );
};

export default Slider;
