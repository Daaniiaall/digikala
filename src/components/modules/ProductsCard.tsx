import { e2p, sp } from "@/utils/replaceNumber";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IoStar } from "react-icons/io5";
import { LiaShippingFastSolid } from "react-icons/lia";
import { MdOutlinePerson4 } from "react-icons/md";
import { Products } from "../templates/DasteBandyPage";

type ProductsCardProps = {
  product: Products;
};

const ProductsCard: React.FC<ProductsCardProps> = ({ product }) => {
  return (
    <Link
      href={{pathname:"/product" , query:{name:product.title_fa , id:product.id}}}
      passHref
      target="_blank"
      rel="noopener noreferrer"
      className=" flex items-center gap-2 border-t-2 p-4 sm:border  sm:flex-col sm:hover:shadow-lg sm:hover:scale-[1.001]"
    >
      <div className="w-1/3 sm:w-9/12">
        <Image
          src={product.images.main}
          width={10000}
          height={10000}
          alt={product.title_fa}
        />
      </div>

      <div className="w-2/3 sm:w-full">
        <p className="text-xs text-slate-700 font-light sm:text-sm">
          {product.title_fa}
        </p>

        <div className="flex items-center justify-between mt-4">
          {product.product_badge?.text === "ارسال فردا" ||
          product.product_badge?.text === "ارسال امروز" ? (
            <div className="flex items-end justify-start my-2 gap-1 !mx-0">
              <LiaShippingFastSolid className="text-blue-600 sm:text-base" />
              <p className="text-[0.55rem] text-slate-500 flex justify-end sm:text-xs">
                {product.product_badge.text}
              </p>
            </div>
          ) : product.product_badge?.text === "ارسال فروشنده" ? (
            <div className="flex items-end justify-start my-2 gap-1 !mx-0">
              <MdOutlinePerson4 className="text-orange-500 sm:text-base" />
              <p className="text-[0.55rem] text-slate-500 flex justify-end sm:text-xs">
                {product.product_badge.text}
              </p>
            </div>
          ) : (
            <p className="text-[0.55rem] text-[#d32f2f] flex justify-start my-2 sm:text-xs ">
              {product.product_badge?.text}
            </p>
          )}
          <span className="flex gap-1 text-xs text-slate-700 sm:text-sm">
            {e2p((product.rating.rate / 20).toFixed(1))}
            <IoStar className="text-amber-400" />
          </span>
        </div>

        {product.price.discount_percent > 0 ? (
          <div>
            <div className="flex items-center justify-between mt-2 text-xs sm:text-sm">
              <span className="bg-red-500 text-white p-1 w-10 h-5 text-xs rounded-xl text-center">
                {e2p(product.price.discount_percent)} %
              </span>
              <span className="text-slate-700  my-3">
                {sp(product.price.selling_price / 10)} تومان
              </span>
            </div>

            <span className="text-slate-400 text-xs line-through flex justify-end sm:text-sm">
              {sp(product.price.rrp_price / 10)}
            </span>
          </div>
        ) : (
          <span className="text-slate-700 text-xs my-3 flex justify-end sm:text-sm">
            {sp(product.price.selling_price / 10)} تومان
          </span>
        )}
      </div>
    </Link>
  );
};

export default ProductsCard;
