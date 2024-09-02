"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Banner } from "./Slider";

const BottomBannerHomePage = () => {
  const [banners, setBanners] = useState<Banner[]>([]);

  useEffect(() => {
    const fetchBanners = async () => {
      try {
        const response = await fetch("/api/banner?type=bottom");
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
    <div className="mt-5">
      {banners.map((banner) => (
        <Image
          key={banner._id}
          src={`/${banner.image}`}
          alt={banner.name}
          width={1920}
          height={400}
          className="my-2"
        />
      ))}
    </div>
  );
};

export default BottomBannerHomePage;
