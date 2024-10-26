import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function loading() {
  return (
    <div className="mt-40 w-11/12 mx-auto">

      <Skeleton height={32} />
      <Skeleton height={32} />

      <div className=" my-6 sm:grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {Array.from({ length: 16 }).map((_, index) => (
          <div className="flex items-center gap-2 p-4 sm:flex-col" key={index}>
            <div className="w-1/3 sm:w-full">
              <Skeleton height={150} />
            </div>

            <div className="w-2/3 sm:w-full">
              <Skeleton height={20} />
              <Skeleton height={20} />
            </div>
          </div>
        ))}
      </div>
      
    </div>
  );
}

export default loading;
