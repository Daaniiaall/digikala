import CategoryBanner from "@/components/modules/CategoryBanner";
import Increadibles, { Images, Price, ProductBadge} from "../modules/Increadibles";
import CategoryChild from "../modules/CategoryChild";
import FavoriteBrands from "../modules/FavoriteBrands";
import NotFoundPage from "@/app/not-found";

interface Banner {
  image: string;
}

interface Products {
  id: number;
  title_fa: string;
  price: Price;
  images: Images;
  product_badge?: ProductBadge;
}

interface Child {
  top_product_image: string;
  title_fa: string;
  id: number;
}

interface Url {
  params:{
    category_id: number
  }
}

export interface Brand {
  title_fa: string;
  title_en: string;
  id: number;
  image: string;
}

interface Data {
  banners: Banner[];
  products: Products[];
  child: Child[];
  brands: Brand[];
  url: Url
  title: string;
}

type categoryData = {
  name: string;
  data: Data;
};

type CategoriesDetailsPageProps = {
  data: categoryData[];
  id: number | undefined;
};

const CategoriesDetailsPage: React.FC<CategoriesDetailsPageProps> = ({data , id}) => {

  // if (data = undefined) OR (data != Array)
  if (!data || !Array.isArray(data)) {
    return <NotFoundPage />
  }

  // for banner slideshow
  const bannerSlider = data.filter(
    (item) => item.name === "banners_app_page_category_app_zone_slider"
  );
  const banners = bannerSlider[0]?.data.banners;
  const bannerURL = banners?.map((i) => ({ original: i.image }));

  // for increadible suggest
  const increadibleSuggest = data.filter(
    (item) => item.name === "super_deal_category_amazing"
  );
  const increadibleItems = increadibleSuggest[0]?.data.products;

  // for category child
  const childCategory = data.filter((item) => item.name === "category_child");
  const categoriesTitle = childCategory?.map((item) => item.data.title);
  const categoriesImages = childCategory?.map((item) => item.data.child[0].top_product_image);
  const categoriesId =  childCategory.map((item)=>item.data.url.params.category_id)


  const categoryChildObj = categoriesImages?.map((categoriesImage, index) => ({
    image_url: categoriesImage,
    title: categoriesTitle[index],
    category_id: categoriesId[index],
  }));

  // for Brands
  const brands = data.filter((item)=> item.name === "brands")
  const brandsData = brands[0]?.data.brands


  return (
    <div>
      <CategoryBanner items={bannerURL} />
      <CategoryChild children={categoryChildObj} id={id} />
      <Increadibles data={increadibleItems} />
      <FavoriteBrands brandsData={brandsData} id={id}/>
    </div>
  );
};

export default CategoriesDetailsPage;
