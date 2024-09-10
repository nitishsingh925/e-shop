import Image from "next/image";
import React from "react";

const BottomBannerHomePage = async () => {
  interface IBanner {
    _id: string;
    name: string;
    image: string;
  }
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/banner?type=bottom`,
    {
      cache: "no-store",
    }
  );
  const data: IBanner[] = await response.json();
  return (
    <div className="mt-5">
      {data.map((banner) => (
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
