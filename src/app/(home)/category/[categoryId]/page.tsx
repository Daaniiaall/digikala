import CategoriesDetailsPage from "@/components/templates/CategoriesDetailsPage";

type Params = {
  params: {
    categoryId: number | undefined;
  };
};

async function CategoriesDetails({ params: { categoryId } }: Params) {
  const res = await fetch(
    `https://api.one-api.ir/digikala/v1/category/?id=${categoryId}`,
    {
      method: "GET",
      headers: {
        accept: "application/json",
        "one-api-token": process.env.ONE_API_TOKEN || "",
      },
    }
  );
  const data = await res.json();

  return <CategoriesDetailsPage data={data.result} id={categoryId} />;
}

export default CategoriesDetails;
