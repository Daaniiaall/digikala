import Link from "next/link";
import Image from "next/image";
import { Brand } from "../templates/CategoriesDetailsPage";
import { FaStar } from "react-icons/fa6";

interface FavoriteBrandsProps {
  brandsData: Brand[];
  id: number | undefined;
}
const FavoriteBrands: React.FC<FavoriteBrandsProps> = ({ brandsData, id }) => {
  return (
    <section className=" w-11/12 mx-auto border-2 border-slate-200 my-8 rounded-lg p-6">
      <h3 className="text-2xl mb-8 flex justify-center gap-1">
        <FaStar className="text-amber-400" />
        محبوب ترین برند ها
      </h3>
      <div className=" grid grid-cols-3 gap-8 md:grid-cols-5 lg:grid-cols-7">
        {brandsData.map((brand) => (
          <Link
            href={`/category/${id}/brand/${brand.id}`}
            key={brand.id}
            className="text-center flex flex-col gap-3 items-center border-2 border-slate-200 p-2 rounded-lg"
          >
            <Image
              src={brand.image}
              width={60}
              height={90}
              alt={brand.title_fa}
            />
            <span className="text-slate-600 text-sm">{brand.title_fa}</span>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default FavoriteBrands;
