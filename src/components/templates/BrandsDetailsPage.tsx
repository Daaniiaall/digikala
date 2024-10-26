"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { TbAdjustmentsHorizontal } from "react-icons/tb";
import { useDispatch } from "react-redux";
import {setAllProducts,setFilteredProducts} from "redux-tool-kit/features/filterBar/filterbarSlice";
import { Products } from "./DasteBandyPage";
import FilteredProductsPage from "../modules/FilteredProductsPage";

interface Brand {
  id: number;
  image: string;
  title_fa: string;
  description: string;
}

type BrandsData = {
  brand: Brand;
  products: Products[];
};
type BrandsDetailsPageProps = {
  brandsData: BrandsData;
};

const BrandsDetailsPage: React.FC<BrandsDetailsPageProps> = ({brandsData}) => {
  const dispatch = useDispatch();

  const [aboutBrand, setABOUTbrand] = useState("");

  useEffect(() => {
    dispatch(setFilteredProducts(brandsData.products));
    dispatch(setAllProducts(brandsData.products));
  }, []);

  useEffect(() => {
    setABOUTbrand(brandsData.brand.description);
  }, [brandsData]);

  const clickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (e.currentTarget.name === "all") {
      dispatch(setFilteredProducts(brandsData.products));
    }
    if (e.currentTarget.name === "ersalEmrouz") {
      const ersalEmrouzProducts = brandsData.products.filter(
        (item) => item.product_badge.text === "ارسال امروز"
      );
      dispatch(setFilteredProducts(ersalEmrouzProducts));
    }
    if (e.currentTarget.name === "ersalFarda") {
      const ersalFardaProducts = brandsData.products.filter(
        (item) => item.product_badge.text === "ارسال فردا"
      );
      dispatch(setFilteredProducts(ersalFardaProducts));
    }
    if (e.currentTarget.name === "ersalForoushande") {
      const ersalForoushandeProducts = brandsData.products.filter(
        (item) => item.product_badge.text === "ارسال فروشنده"
      );
      dispatch(setFilteredProducts(ersalForoushandeProducts));
    }
    if (e.currentTarget.name === "mojodDarAnbar") {
      const mojodDarAnbarProducts = brandsData.products.filter(
        (item) => item.product_badge.text === "موجود در انبار دیجی‌کالا"
      );
      dispatch(setFilteredProducts(mojodDarAnbarProducts));
    }
  };

  return (
    <div className="mt-28 w-11/12 mx-auto">
      <div className="flex items-center gap-3 p-3 my-8 border max-w-fit rounded-lg">
        <Image
          src={brandsData.brand.image}
          width={70}
          height={60}
          alt={brandsData.brand.title_fa}
        />
        <div className="text-sm">
          <p>{brandsData.brand.title_fa}</p>
          <span className="text-neutral-400 text-xs">
            کالاهای ثبت شده با این برند
          </span>
        </div>
      </div>

      <div className="flex gap-3 text-xs text-neutral-500">
        <p className="flex items-center bg-neutral-200 text-neutral-600 p-2 rounded-lg text-md gap-1">
          <TbAdjustmentsHorizontal className="text-lg" />
          فیلتر
        </p>
        <button name="all" onClick={(e) => clickHandler(e)}>همه</button>
        <button name="ersalEmrouz" onClick={(e) => clickHandler(e)}>ارسال امروز</button>
        <button name="ersalFarda" onClick={(e) => clickHandler(e)}>ارسال فردا</button>
        <button name="ersalForoushande" onClick={(e) => clickHandler(e)}>ارسال فروشنده</button>
        <button name="mojodDarAnbar" onClick={(e) => clickHandler(e)}>موجود در انبار دیجی‌کالا</button>
      </div>

      <FilteredProductsPage />

      {brandsData.brand.description && (
        <div className="my-24">
          <h3 className="mb-4 text-lg md:text-center md:text-xl">
            درباره برند {brandsData.brand.title_fa}
          </h3>
          <p
            className="text-sm leading-8 text-justify text-neutral-500"
            dangerouslySetInnerHTML={{ __html: aboutBrand }}
          />
        </div>
      )}
    </div>
  );
};

export default BrandsDetailsPage;
