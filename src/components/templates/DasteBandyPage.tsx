"use client";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setAllProducts, setFilteredProducts } from "redux-tool-kit/features/filterBar/filterbarSlice";

import DasteBandyMain from "../modules/DasteBandyMain";
import FilterBar from "../modules/FilterBar";

interface Categories {
  id: number;
  title_fa: string;
  code: string;
}

interface Images {
  main: string;
}
interface Price {
  selling_price: number;
  rrp_price: number;
  discount_percent: number;
}
interface ProductBadge {
  text: string;
}
interface Rating {
  rate: number;
}

interface Properties {
  warehouse_label: string;
}
interface Brands {
  id: number;
  title_fa: string;
  title_en: string;
  image: string;
}

export interface Products {
  id: number;
  images: Images;
  price: Price;
  product_badge: ProductBadge;
  rating: Rating;
  category_title: string;
  properties: Properties;
  title_fa: string;
}

interface Data {
  categories: Categories[];
  products: Products[];
  brands: Brands[];
  parent_id: number;
}

interface MainData {
  url: {
    params: { category_id: number };
  };
  child: [{ id: number; title_fa: string; top_product_image: string }];
}

interface MainCategory {
  name: string;
  data: MainData;
}

export type Props = {
  data: Data;
  mainCategory: MainCategory[];
  name: string;
};

type DasteBandyPage = {
  data: Props[];
  mainCategory: MainCategory[];
};

const DasteBandyPage: React.FC<DasteBandyPage> = ({ data, mainCategory }) => {
  const dispatch = useDispatch();

  const products = data.filter(
    (items) =>
      items.name === "popular_products" ||
      items.name === "newest_products" ||
      items.name === "most_sold_products" ||
      items.name === "selling_and_sale"
  );
  const allProducts = products.map((i) => i.data.products).flat();

  useEffect(() => {
    dispatch(setFilteredProducts(allProducts))
    dispatch(setAllProducts(allProducts))
  }, []);

  const dasteBandyKoli = mainCategory.filter((item) => item.name === "category_child");
  const dasteBandyHarCategory = data.filter((item) => item.name === "category_pan");

  const dasteBandy = dasteBandyHarCategory[0]?.data.parent_id;

  const dasteBandyItem = dasteBandyKoli.filter((item) => item.data.url.params.category_id === dasteBandy);
  const dasteBandyMainItem = dasteBandyItem[0]?.data.child;

  return (
    <>
      <DasteBandyMain mainCategoryData={dasteBandyMainItem} />
      <FilterBar data={data} mainCategoryData={dasteBandyMainItem} />
    </>
  );
};

export default DasteBandyPage;
