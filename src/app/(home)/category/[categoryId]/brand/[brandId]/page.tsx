import BrandsDetailsPage from "@/components/templates/BrandsDetailsPage";

type Params = {
  params: {
    brandId: number;
  };
};

async function BrandsDetails({ params: { brandId } }: Params) {
  const res = await fetch(
    `https://api.one-api.ir/digikala/v1/brand/?id=${brandId}`,
    {
      method: "GET",
      headers: {
        accept: "application/json",
        "one-api-token": process.env.ONE_API_TOKEN || "",
      },
    }
  );
  const data = await res.json()

  return <BrandsDetailsPage brandsData={data.result} />;
}

export default BrandsDetails;
