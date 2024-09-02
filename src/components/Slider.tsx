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

// Define the type for banner data
export interface Banner {
  _id: string;
  name: string;
  image: string;
  type: string;
}

const Slider: FC = () => {
  const [banners, setBanners] = useState<Banner[]>([]);

  useEffect(() => {
    const fetchBanners = async () => {
      try {
        const response = await fetch("api/banner?type=top");
        const data: Banner[] = await response.json();
        console.log(data);

        setBanners(data);
      } catch (error) {
        console.error("Failed to fetch banners:", error);
      }
    };

    fetchBanners();
  }, []);

  return (
    <div className="py-10">
      <Carousel>
        <CarouselContent>
          {banners.map((banner) => (
            <CarouselItem key={banner._id}>
              <Image
                src={`/${banner.image}`}
                alt={banner.name}
                width={1000}
                height={400}
                className="w-full h-[200px] sm:h-[300px] md:h-[350px] lg:h-[400px] object-cover rounded-2xl"
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute top-1/2 -translate-y-1/2 left-5" />
        <CarouselNext className="absolute top-1/2 -translate-y-1/2 right-5" />
      </Carousel>
    </div>
  );
};

export default Slider;
