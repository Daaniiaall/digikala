import Image from "next/image";
import { Products } from "../templates/DasteBandyPage";
import { useDispatch, useSelector } from "react-redux";
import {setFilteredProducts} from "redux-tool-kit/features/filterBar/filterbarSlice"
import { RootState } from "redux-tool-kit/store";

export interface Main {
  id: number;
  title_fa: string;
  top_product_image: string;
}
type allCategoriesProducts = Products[]

type DasteBandyMainPage = {
  mainCategoryData: Main[];
};

const DasteBandyMain: React.FC<DasteBandyMainPage> = ({ mainCategoryData }) => {

  const dispatch = useDispatch();


  const allCategoriesProducts:allCategoriesProducts = useSelector((store : RootState) => store.filterBar.allCategoriesProducts)
  
  const categoryHandler = (e :React.MouseEvent<HTMLButtonElement>) =>{
    const selectedCategory = allCategoriesProducts.filter((item)=>(item.category_title === e.currentTarget.name))
    dispatch(setFilteredProducts(selectedCategory))
  }

  return (
    <div className="mt-28 flex gap-4 w-11/12 mx-auto overflow-x-auto lg:overflow-hidden lg:flex-wrap mb-6 ">
      {mainCategoryData.map((item) => (
        <button name={item.title_fa} onClick={e => categoryHandler(e)} key={item.id} className="bg-white flex flex-col items-center min-w-24 min-h-24 mb-6 hover:border rounded-lg">
          <Image
            src={item.top_product_image}
            width={60}
            height={60}
            alt={item.title_fa}
            className="p-1"
          />
          <h3 className=" p-2 text-xs text-center ">
            {item.title_fa}
          </h3>
        </button>
      ))}
    </div>
  );
};

export default DasteBandyMain;
