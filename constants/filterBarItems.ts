import { FaSortAmountDown } from "react-icons/fa";

interface FilterItem {
  id: number;
  filterName: string;
}

const filterOptions: FilterItem[] = [
  {
    id: 8,
    filterName: "مرتب سازی",
  },
  {
    id: 1,
    filterName: "منتخب"
  },
  {
    id: 2,
    filterName: "فیلتر"
  },
  {
    id: 3,
    filterName: "دسته بندی"
  },
  {
    id: 4,
    filterName: "برند"
  },
  {
    id: 5,
    filterName: "ارسال امروز"
  },
  {
    id: 6,
    filterName: "ارسال فروشنده"
  },
  {
    id: 7,
    filterName: "فقط کالاهای موجود در انبار دیجی کالا"
  },
];

export default filterOptions;
