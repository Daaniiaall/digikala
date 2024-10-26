interface Brand {
  id: number;
  title_fa: string;
}
interface Breadcrumb {
  id: number;
  title_fa: string;
}
interface Category {
  return_reason_alert: string;
}
interface Category {
  return_reason_alert: string;
}
interface Latest_Comments {
  id: number;
  body: string;
  created_at: Date;
  is_buyer: boolean;
  reactions: { likes: number; dislikes: number };
  user_name: string;
}

interface Comments {
  count: string;
  latest_comments: Latest_Comments[];
}
interface Images {
  main: string;
  image_list: string[];
}
interface Price {
  badge: { title: string };
  discount_percent: number;
  rrp_price: number;
  selling_price: number;
}
interface Product_Badges {
  id: number;
  payload: {svg_icon: string , text: string};
  priority: number;
}
interface Latest_Questions {
  created_at: string;
  sender: string;
  text: string;
  last_answer: {id: number , sender: string , text: string};
}

interface Questions {
  count: number;
  latest_questions: Latest_Questions[];
}
interface Rating {
  title: string;
  values: string[];
}
interface Attributes {
  count: number;
  rate: number;
}
interface Review {
  description: string;
  attributes: Attributes[];
}
interface Covers {
  description: string;
}
interface Providers {
  image: string;
  title: string;
}
interface Variants {
  id: number;
  color: { id: number, title_fa: string, hex_code: string };
  digiclub: { point: number };
  insurance: {
    before_discount: number;
    discount_percent: number;
    description: string;
    total_premium: number;
    title: string;
    covers: Covers[];
  };
  price: Price;
  seller: {id: number , title_fa: string}
  shipment_methods: {providers: Providers[]}
  warranty: {title_fa: string};
}

interface Videos {
  id: number;
  title: string;
  cover: string;
  url: string;
}

interface ProductDtails {
  id: number;
  brand: Brand;
  breadcrumb: Breadcrumb[];
  category: Category;
  comments: Comments;
  images: Images;
  price: Price;
  product_badges: Product_Badges;
  questions: Questions;
  rating: Rating;
  review: Review;
  title_fa: string;
  title_en: string;
  variants: Variants[];
  videos: Videos[];
}
interface Promotion_Banner {
  background: string;
}
interface Product {
  id: number;
  images: { main: string };
  price: Price;
  product_badge: { text: string };
  rating: { count: number; rate: number };
  title_fa: string;
}

interface Recommendation {
  also_bought_products: Product[];
  related_products: Product[];
}
interface Widgets {
  name: string;
  data: {
    background: string;
  };
}

export type ProductData = {
  product: ProductDtails;
  promotion_banner: Promotion_Banner;
  recommendation: Recommendation;
  widgets: Widgets;
};
