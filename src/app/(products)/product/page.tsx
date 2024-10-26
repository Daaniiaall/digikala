import ProductsDetailsPage from "@/components/templates/ProductsDetailsPage";

type SearchParams = {
  searchParams: {
    id: number;
  };
};

async function ProductsPage({ searchParams: { id } }: SearchParams) {

  const res = await fetch(`https://api.one-api.ir/digikala/v1/product/?id=${id}`, {
    method: "GET",
    headers: {
      accept: "application/json",
      "one-api-token": process.env.ONE_API_TOKEN || "",
    },
  });

  const data = await res.json()

  // console.log(data.result)

  return <ProductsDetailsPage productData={data.result} />;
}

export default ProductsPage;
