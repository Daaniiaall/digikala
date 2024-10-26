import sevenItems from "constants/sevenControllerItems";
import Image from "next/image";
import Link from "next/link";

function SevenController() {
  return (
    <div className="flex justify-around gap-6 w-11/12 mx-auto mb-6 overflow-x-auto">
      {sevenItems.map((sevenItem) => (
        <Link className="w-max h-max flex flex-col items-center text-center gap-3" href={sevenItem.url} key={sevenItem.id}>
          <Image className="w-6 h-6" src={sevenItem.image} width={1000} height={1000} alt={sevenItem.title}  />
          <span className="text-slate-600 text-[0.55rem] md:text-xs">{sevenItem.title}</span>
        </Link>
      ))}
    </div>
  );
}

export default SevenController;
