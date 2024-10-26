import Image from "next/image";

import { Products } from "../templates/DasteBandyPage";

import BackButton from "../elements/BackButton";
import ProductsCard from "./ProductsCard";


import { useSelector } from "react-redux";
import { RootState } from "redux-tool-kit/store";

import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

type filteredProducts = Products[];
type allCategoriesProducts = Products[];

const FilteredProductsPage = () => {
  const filteredProducts: filteredProducts = useSelector(
    (store: RootState) => store.filterBar.filteredProducts
  );
  const allCategoriesProducts: allCategoriesProducts = useSelector(
    (store: RootState) => store.filterBar.allCategoriesProducts
  );

  // for display skeleton
  if (filteredProducts?.length === 0 && allCategoriesProducts?.length === 0) {
    return(
      <div className=" my-6 sm:grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {Array.from({ length: 16 }).map((_, index) => (
          <div className="flex gap-2 p-4 sm:flex-col" key={index}>

            <div className="w-1/3 sm:w-full">
              <Skeleton height={150} />
            </div>

            <div className="w-2/3 sm:w-full p-6">
              <Skeleton height={20} />
              <div className="flex justify-between mt-4 mx-4">
                <Skeleton height={20} width={60} />
                <Skeleton height={20} width={60}/>
              </div>
              <div className="text-left mt-4">
                <Skeleton height={20} width={80}/>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
  // for display skeleton

  return (
    <>
      {filteredProducts?.length === 0 ? (
        <div className="flex flex-col items-center">
          <Image
            src="/images/empity.jpg"
            width={400}
            height={800}
            alt="not-found-products"
          />
          <p className="text-neutral-700">هیچ محصولی یافت نشد</p>
          <BackButton />
        </div>
      ) : (
        <div className=" my-6 sm:grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 lg:ml-6">
          {filteredProducts?.map((product, index) => (
            <ProductsCard product={product} key={`${product.id}-${index}`} />
          ))}
        </div>
      )}
    </>
  );
};

export default FilteredProductsPage;
