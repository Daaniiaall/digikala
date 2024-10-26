import { LiaShippingFastSolid } from "react-icons/lia";
import { e2p, sp } from "@/utils/replaceNumber";
import Image from "next/image";
import { IncreadibleItems } from "./Increadibles";

type Items = {
  item: IncreadibleItems;
};

const IncreadiblesCard: React.FC<Items> = ({ item }) => {

  return (
      <div className="bg-white p-2 w-32 rounded-md h-56 flex flex-col">
        
        <div className="flex !justify-end !mb-2 !mx-0">
          <Image
            src="https://www.digikala.com/statics/img/svg/productCard/topBadge/IncredibleOffer.svg"
            width={60}
            height={20}
            alt="Amazing"
          />
        </div>

        <Image
          src={item.images.main}
          width={70}
          height={50}
          alt={item.title_fa}
          className="mx-auto"
        />

        <p className="truncate text-xs text-slate-500">{item.title_fa}</p>

        <div className="my-2">
          {item.product_badge?.text === "ارسال فردا" || item.product_badge?.text === "ارسال امروز" ? (
            <div className="flex items-end justify-end my-2 gap-1 !mx-0 text-blue-500">
              <p className="text-[0.55rem] text-slate-500 flex justify-end ">
                {item.product_badge.text}
              </p>
              <LiaShippingFastSolid className="text-blue-600" />
            </div>
          ) : (
            <p className="text-[0.55rem] text-[#d32f2f] flex justify-end my-2 ">
              {item.product_badge?.text}
            </p>
          )}
        </div>

        <div className="flex items-center justify-between mt-2 ">
          <span className="text-slate-700 text-xs my-3">
             {sp(item.price.selling_price /10)}تومان
            {/* تومان {item.price.selling_price} */}
          </span>
          <span className="bg-red-500 text-white p-1 w-10 h-5 rounded-xl text-xs text-center">
            {e2p(item.price.discount_percent)} %
            {/* {item.price.discount_percent} % */}
          </span>
        </div>

        <span className="text-slate-400 text-xs line-through block">
          {sp(item.price.rrp_price /10)}
          {/* {item.price.rrp_price} */}
        </span>
      </div>

  );
};

export default IncreadiblesCard;
