import Image from "next/image";
import Link from "next/link";

type Category = {
  id: number;
  icon: string;
  title: string;
  children: object[];
  plp_url: {
    params: {
      category_id: number;
    };
  };
};

async function Categories() {
  const res = await fetch("https://api.one-api.ir/digikala/v1/categories", {
    method: "GET",
    headers: {
      accept: "application/json",
      "one-api-token": process.env.ONE_API_TOKEN || "",
    },
  });
  const data = await res.json();
  //   console.log(data.result);

  return (
    <section className="my-10">
      <h3 className="text-center text-2xl">خرید بر اساس دسته‌بندی</h3>
      <div className="w-11/12 mx-auto grid grid-cols-4 gap-8 my-12 justify-items-center md:grid-cols-8">
        {data.result.map((category: Category) => (
          <Link
            href={`/category/${category.plp_url.params.category_id}`}
            key={category.id}
            className="flex flex-col items-center gap-2"
          >
            <Image
              src={`/images/categories/${category.icon}.png`}
              width={50}
              height={50}
              alt={category.title}
            />
            <span className="text-xs text-center">{category.title}</span>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default Categories;
