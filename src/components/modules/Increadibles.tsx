"use client";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import IncreadiblesCard from "./IncreadiblesCard";

export type Images = {
  main: string;
};
export type Price = {
  selling_price: number;
  rrp_price: number;
  discount_percent: number;
};
export type ProductBadge = {
  text: string;
};

export type IncreadibleItems = {
  id: number;
  images: Images;
  title_fa: string;
  price: Price;
  product_badge?: ProductBadge;
};

export type IncreadiblesPageProps = {
  data: IncreadibleItems[];
};

const Increadibles: React.FC<IncreadiblesPageProps> = ({ data }) => {
  const settings = {
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    rtl: true,
    responsive: [
      {
        breakpoint: 1550,
        settings: {
          slidesToShow: 8,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 7,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 986,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 850,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 675,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 512,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 345,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      {data?.length > 0 && (
        <div className="bg-red-600 w-11/12  mx-auto rounded-lg p-7">
          <div className="flex items-center gap-2 text-white mb-3">
            <Image
              src="/images/Amazing.svg"
              width={25}
              height={20}
              alt="Amazing"
            />
            <p>شگفت انگیز</p>
          </div>

          <div className="slider-container">
            <Slider {...settings}>
              {data.map((item) => (
                <IncreadiblesCard item={item} key={item.id} />
              ))}
            </Slider>
          </div>
        </div>
      )}
    </>
  );
};

export default Increadibles;
