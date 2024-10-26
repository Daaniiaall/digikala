import DasteBandyPage from "@/components/templates/DasteBandyPage";

type DasteBandyParams = {
  params: {
    categoryId: number;
    dasteBandyId: number;
  };
};

async function DasteBandyChild({params: { dasteBandyId , categoryId }}: DasteBandyParams) {

  const res = await fetch(
    `https://api.one-api.ir/digikala/v1/category/?id=${dasteBandyId}`,
    {
      method: "GET",
      headers: {
        accept: "application/json",
        "one-api-token": process.env.ONE_API_TOKEN || "",
      },
    }
  );
  const data = await res.json();

  const categoryMainData = await fetch(
    `https://api.one-api.ir/digikala/v1/category/?id=${categoryId}`,
    {
      method: "GET",
      headers: {
        accept: "application/json",
        "one-api-token": process.env.ONE_API_TOKEN || "",
      },
    }
  );
  const response = await categoryMainData.json();

  return <DasteBandyPage data={data.result} mainCategory={response.result} />;
}

export default DasteBandyChild;
