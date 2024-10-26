import Image from "next/image";
import Link from "next/link";

interface CategoryChild {
  image_url: string;
  title: string;
  category_id: number;
}

type CategoryChildProps = {
  childrenObj: CategoryChild[];
  id: number | undefined;
};

const CategoryChild: React.FC<CategoryChildProps> = ({ childrenObj, id }) => {
  return (
    <>
      {childrenObj.length > 0 ? (
        <section className="w-11/12 mx-auto my-10">
          <h3 className="text-center text-2xl mb-8">خرید بر اساس دسته بندی</h3>
          <div className="grid grid-cols-3 gap-8 md:grid-cols-4 lg:grid-cols-5">
            {childrenObj.map((child, index) => (
              <Link
                href={`/category/${id}/daste-bandy/${child.category_id}`}
                key={index}
                className="flex flex-col items-center gap-2"
              >
                <Image
                  src={child.image_url}
                  width={80}
                  height={60}
                  alt={child.title}
                />
                <h4 className="text-sm text-center">{child.title}</h4>
              </Link>
            ))}
          </div>
        </section>
      ) : null}
    </>
  );
};

export default CategoryChild;
