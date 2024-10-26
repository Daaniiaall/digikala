import React from "react";
import Increadibles from "./Increadibles";

async function IncreadiblesSection() {
  const res = await fetch("https://api.one-api.ir/digikala/v1/home", {
    method: "GET",
    headers: {
      accept: "application/json",
      "one-api-token": process.env.ONE_API_TOKEN || "",
    },
  });

  const data = await res.json();
//   console.log(res.result.selling_and_sales.products);

  return <Increadibles data={data.result.selling_and_sales.products} />;
}

export default IncreadiblesSection;
