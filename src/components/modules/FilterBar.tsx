"use client";

import { FaSortAmountDown } from "react-icons/fa";
import { TbAdjustmentsHorizontal } from "react-icons/tb";
import { IoIosArrowDown } from "react-icons/io";
import { LiaToggleOffSolid } from "react-icons/lia";
import { LiaToggleOnSolid } from "react-icons/lia";

import { ChangeEvent, useState } from "react";

import { Products, Props } from "../templates/DasteBandyPage";
import { Main } from "./DasteBandyMain";

import { useDispatch, useSelector } from "react-redux";
import { RootState } from "redux-tool-kit/store";
import { setFilteredProducts } from "redux-tool-kit/features/filterBar/filterbarSlice";

import { Drawer } from "vaul";
import FilteredProductsPage from "./FilteredProductsPage";

type allCategoriesProducts = Products[];
type filteredProducts = Products[];

type FilterBarPage = {
  data: Props[];
  mainCategoryData: Main[];
};

const FilterBar: React.FC<FilterBarPage> = ({ data, mainCategoryData }) => {
  const dispatch = useDispatch();

  const allCategoriesProducts: allCategoriesProducts = useSelector(
    (store: RootState) => store.filterBar.allCategoriesProducts
  );
  const filteredProducts: filteredProducts = useSelector(
    (store: RootState) => store.filterBar.filteredProducts
  );


  // -----------------------------for handle dropdown---------------------------------------
  const [isOpenDropDown, setIsOpenDropDown] = useState(false);
  const [isOpenCategoriesDropDown, setIsOpenCategoriesDropDown] = useState(false);
  const [isOpenBrandsDropDown, setIsOpenBrandsDropDown] = useState(false);

  const toggleDropdown = () => {
    setIsOpenDropDown(!isOpenDropDown);
  };

  const toggleCategoriesDropdown = () => {
    setIsOpenCategoriesDropDown(!isOpenCategoriesDropDown);
  };

  const toggleBrandsDropdown = () => {
    setIsOpenBrandsDropDown(!isOpenBrandsDropDown);
  };
  // -----------------------------for handle dropdown---------------------------------------

  // ------------------------------for handle modal in mobileSize---------------------------
  const [isOpenFilterModal, setIsOpenFilterModal] = useState(false);
  const [isOpenSortModal, setIsOpenSortModal] = useState(false);
  const [isOpenBrandsModal, setIsOpenBrandsModal] = useState(false);
  const [isOpenCategoriesModal, setIsOpenCategoriesModal] = useState(false);

  const handleToggleFilterModal = (open: boolean) => {
    setIsOpenFilterModal(open);
  };

  const handleToggleSortModal = (open: boolean) => {
    setIsOpenSortModal(open);
  };

  const handleToggleBrandsModal = (open: boolean) => {
    setIsOpenBrandsModal(open);
  };

  const handleToggleCategoriesModal = (open: boolean) => {
    setIsOpenCategoriesModal(open);
  };
  // ------------------------------for handle modal in mobileSize----------------------------

  // -------------------------for handle toggle buttons in filterSideBar---------------------
  const [isToggleTodayDeliveryBtn, setIsToggleTodayDeliveryBtn] = useState(false);
  const [isToggleTomorrowDeliveryBtn, setIsToggleTomorrowDeliveryBtn] = useState(false);
  const [isToggleDeliverBySellerBtn, setIsToggleDeliverBySellerBtn] = useState(false);
  const [isToggleStoreInDigikalaBtn, setIsToggleStoreInDigikalaBtn] = useState(false);
  // -------------------------for handle toggle buttons in filterSideBar---------------------

  // -------------for handle checked(Attribute) input in filter by selected Brand--------------
  const [selectedBrand, setSelectedBrand] = useState("");

  // -------------for handle checked(Attribute) input in filter by selected Brand--------------

  //  ------------------------------for Sort in filterBar--------------------------------------
  const popularHandler = () => {
    const popularProducts = data.filter(
      (item) => item.name === "popular_products"
    );
    dispatch(setFilteredProducts(popularProducts[0]?.data.products));
    setIsOpenSortModal(false);
    setIsToggleTodayDeliveryBtn(false);
    setIsToggleTomorrowDeliveryBtn(false);
    setIsToggleDeliverBySellerBtn(false);
    setIsToggleStoreInDigikalaBtn(false);
  };
  const newestHandler = () => {
    const newestProducts = data.filter(
      (item) => item.name === "newest_products"
    );
    dispatch(setFilteredProducts(newestProducts[0]?.data.products));
    setIsOpenSortModal(false);
    setIsToggleTodayDeliveryBtn(false);
    setIsToggleTomorrowDeliveryBtn(false);
    setIsToggleDeliverBySellerBtn(false);
    setIsToggleStoreInDigikalaBtn(false);
  };
  const mostSoldHandler = () => {
    const mostSoldProducts = data.filter(
      (item) => item.name === "most_sold_products"
    );
    dispatch(setFilteredProducts(mostSoldProducts[0]?.data.products));
    setIsOpenSortModal(false);
    setIsToggleTodayDeliveryBtn(false);
    setIsToggleTomorrowDeliveryBtn(false);
    setIsToggleDeliverBySellerBtn(false);
    setIsToggleStoreInDigikalaBtn(false);
  };
  const saleHandler = () => {
    const saleProducts = data.filter(
      (item) => item.name === "selling_and_sale"
    );
    dispatch(setFilteredProducts(saleProducts[0]?.data.products));
    setIsOpenSortModal(false);
    setIsToggleTodayDeliveryBtn(false);
    setIsToggleTomorrowDeliveryBtn(false);
    setIsToggleDeliverBySellerBtn(false);
    setIsToggleStoreInDigikalaBtn(false);
  };
  const brandsItem = data.filter((item) => item.name === "brands");
  const brands = brandsItem[0]?.data.brands;
  //  ------------------------------for Sort in filterBar--------------------------------------

  // -------------------------------for filter in filterBar------------------------------------
  const selectBrandHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const selectedBrandProducts = allCategoriesProducts.filter(
      (item) => item.brand.title_fa === e.target.value
    );
    setSelectedBrand(e.target.value);
    dispatch(setFilteredProducts(selectedBrandProducts));
    setIsOpenFilterModal(false);
    setIsOpenBrandsModal(false);
  };

  const todayDeliveryHandler = () => {
    if (isToggleTodayDeliveryBtn) {
      dispatch(setFilteredProducts(allCategoriesProducts));
    } else {
      const ersalEmrouzProducts = allCategoriesProducts.filter(
        (item) => item.product_badge.text === "ارسال امروز"
      );
      dispatch(setFilteredProducts(ersalEmrouzProducts));
      setIsOpenFilterModal(false);
    }
    setIsToggleTodayDeliveryBtn(!isToggleTodayDeliveryBtn);
    setIsToggleTomorrowDeliveryBtn(false);
    setIsToggleDeliverBySellerBtn(false);
    setIsToggleStoreInDigikalaBtn(false);
  };

  const tomorrowDeliveryHandler = () => {
    if (isToggleTomorrowDeliveryBtn) {
      dispatch(setFilteredProducts(allCategoriesProducts));
    } else {
      const ersalFardaProducts = allCategoriesProducts.filter(
        (item) => item.product_badge.text === "ارسال فردا"
      );
      dispatch(setFilteredProducts(ersalFardaProducts));
      setIsOpenFilterModal(false);
    }
    setIsToggleTomorrowDeliveryBtn(!isToggleTomorrowDeliveryBtn);
    setIsToggleTodayDeliveryBtn(false);
    setIsToggleDeliverBySellerBtn(false);
    setIsToggleStoreInDigikalaBtn(false);
  };

  const deliverBySellerHandler = () => {
    if (isToggleDeliverBySellerBtn) {
      dispatch(setFilteredProducts(allCategoriesProducts));
    } else {
      const ersaleForoushandeProducts = allCategoriesProducts.filter(
        (item) => item.product_badge.text === "ارسال فروشنده"
      );
      dispatch(setFilteredProducts(ersaleForoushandeProducts));
      setIsOpenFilterModal(false);
    }

    setIsToggleDeliverBySellerBtn(!isToggleDeliverBySellerBtn);
    setIsToggleTomorrowDeliveryBtn(false);
    setIsToggleStoreInDigikalaBtn(false);
    setIsToggleTodayDeliveryBtn(false);
  };

  const storeInDigikalaHandler = () => {
    if (isToggleStoreInDigikalaBtn) {
      dispatch(setFilteredProducts(allCategoriesProducts));
    } else {
      const digikalaStoreProducts = allCategoriesProducts.filter(
        (item) => item.properties.warehouse_label === "موجود در انبار دیجی‌کالا"
      );
      dispatch(setFilteredProducts(digikalaStoreProducts));
      setIsOpenFilterModal(false);
    }

    setIsToggleStoreInDigikalaBtn(!isToggleStoreInDigikalaBtn);
    setIsToggleTodayDeliveryBtn(false);
    setIsToggleTomorrowDeliveryBtn(false);
    setIsToggleDeliverBySellerBtn(false);
  };
  // -------------------------------for filter in filterBar------------------------------------

  //------------------------------- for categories in filterBar-------------------------------
  const categoryHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    const selectedCategoryProducts = allCategoriesProducts.filter(
      (item) => item.category_title === e.currentTarget.name
    );
    dispatch(setFilteredProducts(selectedCategoryProducts));
    setIsOpenCategoriesModal(false);
  };

  //------------------------------- for categories in filterBar-------------------------------


  return (
    <div className="lg:flex gap-4">
      {/* filterBar in mobileSize */}
      <div
        className="lg:hidden text-xs font-extralight text-slate-700 flex gap-2 filterBar overflow-x-auto"
        style={{ WebkitOverflowScrolling: "touch" }}
      >
        <Drawer.Root
          open={isOpenSortModal}
          onOpenChange={handleToggleSortModal}
        >
          <Drawer.Trigger>
            <FaSortAmountDown /> مرتب سازی
          </Drawer.Trigger>
          <Drawer.Portal>
            <Drawer.Overlay className="fixed inset-0 bg-black/40" />
            <Drawer.Content className="bg-gray-100 flex flex-col rounded-t-[10px] mt-24 h-fit fixed bottom-0 left-0 right-0 outline-none">
              <div className="p-4 bg-white rounded-t-[10px] flex-1">
                <div
                  aria-hidden
                  className="mx-auto w-12 h-1.5 flex-shrink-0 rounded-full bg-gray-300 mb-8"
                />
                <div className="max-w-md mx-auto p-3">
                  <Drawer.Title className="text-lg mb-4 text-neutral-700">
                    مرتب سازی بر اساس
                  </Drawer.Title>
                  <div className="moratabsazi">
                    <button onClick={popularHandler}>محبوب ترین</button>
                    <button onClick={newestHandler}>جدید ترین</button>
                    <button onClick={mostSoldHandler}>پرفروش ترین</button>
                    <button onClick={saleHandler}>منتخب </button>
                  </div>
                </div>
              </div>
            </Drawer.Content>
          </Drawer.Portal>
        </Drawer.Root>

        <Drawer.Root
          open={isOpenFilterModal}
          onOpenChange={handleToggleFilterModal}
        >
          <Drawer.Trigger>
            <TbAdjustmentsHorizontal />
            فیلتر
          </Drawer.Trigger>

          <Drawer.Portal>
            <Drawer.Overlay className="fixed inset-0 bg-black/40" />
            <Drawer.Content className="bg-gray-100 flex flex-col rounded-t-[10px] mt-24 h-fit fixed bottom-0 left-0 right-0 outline-none">
              <div className="p-4 bg-white rounded-t-[10px] flex-1">
                <div
                  aria-hidden
                  className="mx-auto w-12 h-1.5 flex-shrink-0 rounded-full bg-gray-300 mb-8"
                />
                <div className="max-w-md mx-auto p-3">
                  <Drawer.Title className="text-lg mb-4 text-neutral-700">
                    فیلتر
                  </Drawer.Title>
                  {/* dropdown */}
                  <div className="moratabsazi">
                    <div className="relative text-right moratabsazi">
                      <button
                        id="dropdownCheckboxButton"
                        onClick={toggleDropdown}
                        className="flex items-center justify-between"
                        type="button"
                      >
                        برند
                        <IoIosArrowDown />
                      </button>

                      {isOpenDropDown && (
                        <div
                          id="dropdownDefaultCheckbox"
                          className="w-full rounded-lg "
                          style={{ WebkitOverflowScrolling: "touch" }}
                        >
                          <ul
                            className="p-3 h-36 overflow-y-auto"
                            aria-labelledby="dropdownCheckboxButton"
                          >
                            <li className="">
                              {brands?.map((item) => (
                                <div
                                  key={item.id}
                                  className="flex items-center"
                                >
                                  <input
                                    id={`chechbox-${item.id}`}
                                    type="checkbox"
                                    value={item.title_fa}
                                    onChange={(e) => selectBrandHandler(e)}
                                    className="w-4 h-4 rounded"
                                    checked={selectedBrand === item.title_fa}
                                  />
                                  <label
                                    htmlFor={`chechbox-${item.id}`}
                                    className="ms-2 text-sm text-neutral-700 border-t w-full p-2 flex justify-between"
                                  >
                                    <p>{item.title_fa}</p>
                                    <p>{item.title_en}</p>
                                  </label>
                                </div>
                              ))}
                            </li>
                          </ul>
                        </div>
                      )}
                    </div>
                    {/* dropdown */}

                    <button onClick={todayDeliveryHandler}>ارسال امروز</button>
                    <button onClick={tomorrowDeliveryHandler}>
                      ارسال فردا
                    </button>
                    <button onClick={deliverBySellerHandler}>
                      ارسال فروشنده
                    </button>
                    <button onClick={storeInDigikalaHandler}>
                      فقط کالاهای موجود در انبار دیجی‌کالا
                    </button>
                  </div>
                </div>
              </div>
            </Drawer.Content>
          </Drawer.Portal>
        </Drawer.Root>

        <Drawer.Root
          open={isOpenCategoriesModal}
          onOpenChange={handleToggleCategoriesModal}
        >
          <Drawer.Trigger>
            دسته بندی <IoIosArrowDown />
          </Drawer.Trigger>
          <Drawer.Portal>
            <Drawer.Overlay className="fixed inset-0 bg-black/40" />
            <Drawer.Content className="bg-gray-100 flex flex-col rounded-t-[10px] mt-24 h-fit fixed bottom-0 left-0 right-0 outline-none">
              <div className="p-4 bg-white rounded-t-[10px] flex-1">
                <div
                  aria-hidden
                  className="mx-auto w-12 h-1.5 flex-shrink-0 rounded-full bg-gray-300 mb-8"
                />
                <div className="max-w-md mx-auto p-3">
                  <Drawer.Title className="text-lg mb-4 text-neutral-700">
                    دسته بندی
                  </Drawer.Title>
                  {/* dropdown */}
                  <div className="moratabsazi max-h-64 overflow-y-auto">
                    {mainCategoryData.map((item) => (
                      <button
                        key={item.id}
                        name={item.title_fa}
                        onClick={(e) => categoryHandler(e)}
                      >
                        {item.title_fa}
                      </button>
                    ))}
                  </div>
                  {/* dropdown */}
                </div>
              </div>
            </Drawer.Content>
          </Drawer.Portal>
        </Drawer.Root>

        <Drawer.Root
          open={isOpenBrandsModal}
          onOpenChange={handleToggleBrandsModal}
        >
          <Drawer.Trigger>
            <IoIosArrowDown />
            برند
          </Drawer.Trigger>

          <Drawer.Portal>
            <Drawer.Overlay className="fixed inset-0 bg-black/40" />
            <Drawer.Content className="bg-gray-100 flex flex-col rounded-t-[10px] mt-24 h-fit fixed bottom-0 left-0 right-0 outline-none">
              <div className="p-4 bg-white rounded-t-[10px] flex-1">
                <div
                  aria-hidden
                  className="mx-auto w-12 h-1.5 flex-shrink-0 rounded-full bg-gray-300 mb-8"
                />
                <div className="max-w-md mx-auto p-3">
                  <Drawer.Title className="text-lg mb-4 text-neutral-700">
                    برند
                  </Drawer.Title>
                  {/* dropdown */}
                  <div className="moratabsazi">
                    <div className="relative text-right moratabsazi">
                      <div
                        className="w-full rounded-lg "
                        style={{ WebkitOverflowScrolling: "touch" }}
                      >
                        <ul
                          className="p-3 h-80  overflow-y-auto"
                          aria-labelledby="dropdownCheckboxButton"
                        >
                          <li className="">
                            {brands?.map((item) => (
                              <div key={item.id} className="flex items-center">
                                <input
                                  id={`chechbox-${item.id}`}
                                  type="checkbox"
                                  value={item.title_fa}
                                  onChange={(e) => selectBrandHandler(e)}
                                  className="w-4 h-4 rounded"
                                  checked={selectedBrand === item.title_fa}
                                />
                                <label
                                  htmlFor={`chechbox-${item.id}`}
                                  className="ms-2 text-sm text-neutral-700 border-t w-full p-2 flex justify-between"
                                >
                                  <p>{item.title_fa}</p>
                                  <p>{item.title_en}</p>
                                </label>
                              </div>
                            ))}
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  {/* dropdown */}
                </div>
              </div>
            </Drawer.Content>
          </Drawer.Portal>
        </Drawer.Root>

        <button onClick={todayDeliveryHandler}>ارسال امروز</button>
        <button onClick={tomorrowDeliveryHandler}>ارسال فردا</button>
        <button onClick={deliverBySellerHandler}>ارسال فروشنده</button>
        <button onClick={storeInDigikalaHandler} className="tracking-wider">
          فقط کالاهای موجود در انبار دیجی کالا
        </button>
      </div>

      {/* filterSideBar in desktopSize */}
      <div className=" hidden lg:block min-w-[25%] max-h-min border rounded-md mx-2 p-4 sticky top-24 z-9 ">
        <h3 className="text-xl pb-4">فیلترها</h3>

        {/* dropdown */}
        <div className="text-right flex flex-col border-b py-3">
          <button
            id="dropdownCheckboxButton"
            onClick={toggleCategoriesDropdown}
            className="flex items-center justify-between text-neutral-600"
            type="button"
          >
            دسته بندی
            <IoIosArrowDown />
          </button>

          {isOpenCategoriesDropDown && (
            <div
              id="dropdownDefaultCheckbox"
              className="w-full rounded-lg"
              style={{ WebkitOverflowScrolling: "touch" }}
            >
              <ul
                className="p-3 h-52 overflow-y-auto"
                aria-labelledby="dropdownCheckboxButton"
              >
                <li className="flex flex-col items-start gap-6">
                  {mainCategoryData.map((item) => (
                    <button
                      key={item.id}
                      name={item.title_fa}
                      onClick={(e) => categoryHandler(e)}
                      className="text-neutral-500 text-sm"
                    >
                      {item.title_fa}
                    </button>
                  ))}
                </li>
              </ul>
            </div>
          )}
        </div>
        {/* dropdown */}

        {/* dropdown */}
        <div className="text-right flex flex-col border-b py-3">
          <button
            id="dropdownCheckboxButton"
            onClick={toggleBrandsDropdown}
            className="flex items-center justify-between text-neutral-600"
            type="button"
          >
            برند
            <IoIosArrowDown />
          </button>

          {isOpenBrandsDropDown && (
            <div
              id="dropdownDefaultCheckbox"
              className="w-full rounded-lg "
              style={{ WebkitOverflowScrolling: "touch" }}
            >
              <ul
                className="p-3 h-64 overflow-y-auto"
                aria-labelledby="dropdownCheckboxButton"
              >
                <li className="">
                  {brands?.map((item) => (
                    <div key={item.id} className="flex items-center">
                      <input
                        id={`chechbox-${item.id}`}
                        type="checkbox"
                        value={item.title_fa}
                        onChange={(e) => selectBrandHandler(e)}
                        className="w-4 h-4 rounded"
                        checked={selectedBrand === item.title_fa}
                      />
                      <label
                        htmlFor={`chechbox-${item.id}`}
                        className="ms-2 text-sm text-neutral-700 border-t w-full p-2 flex justify-between"
                      >
                        <p>{item.title_fa}</p>
                        <p>{item.title_en}</p>
                      </label>
                    </div>
                  ))}
                </li>
              </ul>
            </div>
          )}
        </div>
        {/* dropdown */}

        <div className="flex flex-col gap-4 items-start text-neutral-600 ">
          <div className="filterSideBarButton">
            ارسال امروز
            <button onClick={todayDeliveryHandler}>
              {isToggleTodayDeliveryBtn ? (
                <div className="text-green-500">
                  <LiaToggleOnSolid />
                </div>
              ) : (
                <div className="text-gray-500">
                  <LiaToggleOffSolid />
                </div>
              )}
            </button>
          </div>

          <div className="filterSideBarButton">
            ارسال فردا
            <button onClick={tomorrowDeliveryHandler}>
              {isToggleTomorrowDeliveryBtn ? (
                <div className="text-green-500">
                  <LiaToggleOnSolid />
                </div>
              ) : (
                <div className="text-gray-500">
                  <LiaToggleOffSolid />
                </div>
              )}
            </button>
          </div>

          <div className="filterSideBarButton">
            ارسال فروشنده
            <button onClick={deliverBySellerHandler}>
              {isToggleDeliverBySellerBtn ? (
                <div className="text-green-500">
                  <LiaToggleOnSolid />
                </div>
              ) : (
                <div className="text-gray-500">
                  <LiaToggleOffSolid />
                </div>
              )}
            </button>
          </div>

          <div className="tracking-wider py-3 w-full text-right flex items-center justify-between text-sm">
            فقط کالاهای موجود در انبار دیجی کالا
            <button onClick={storeInDigikalaHandler}>
              {isToggleStoreInDigikalaBtn ? (
                <div className="text-green-500 text-xl">
                  <LiaToggleOnSolid />
                </div>
              ) : (
                <div className="text-gray-500 text-xl">
                  <LiaToggleOffSolid />
                </div>
              )}
            </button>
          </div>
        </div>
      </div>

      <section className="flex flex-col mx-auto">
        {/* filterBar in desktopSize */}
        {filteredProducts?.length !== 0 && (
          <div className=" hidden lg:flex text-md text-neutral-500 w-full gap-6">
            <span className="flex items-center gap-1">
              <FaSortAmountDown />
              مرتب سازی:
            </span>
            <button onClick={newestHandler}>جدید ترین</button>
            <button onClick={mostSoldHandler}>پرفروش ترین</button>
            <button onClick={popularHandler}>محبوب ترین</button>
            <button onClick={saleHandler}>منتخب </button>
          </div>
        )}

        {/* display filtered products */}
        <FilteredProductsPage />
      </section>
    </div>
  );
};

export default FilterBar;
