import { ProductData } from "types/ProductsDetails.types";

type ProductsDetailsPageProps = {
  productData: ProductData;
};

const ProductsDetailsPage: React.FC<ProductsDetailsPageProps> = ({
  productData,
}) => {
  return (
    <div>
      <div>
        {productData.product.breadcrumb.map((item, index) => (
          <span key={item.id}>
            {item.title_fa}
            {index < productData.product.breadcrumb.length - 1 && "/"}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ProductsDetailsPage;
