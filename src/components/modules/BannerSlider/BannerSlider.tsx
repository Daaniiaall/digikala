"use client";
import React from "react";
import ReactDOM from "react-dom/client";
import EmblaCarousel from "./EmblaCarousel";
import { EmblaOptionsType } from "embla-carousel";
import "./embla.css";

const OPTIONS: EmblaOptionsType = {
  dragFree: true,
  direction: "rtl",
  loop: true,
};

const images = [
  {
    id: 1,
    original:
      "https://dkstatics-public.digikala.com/digikala-adservice-banners/d586ee3b7e906a4b87efa8d32647c2035dcb3925_1668955458.jpg?x-oss-process=image/quality,q_95",
    url: null,
  },
  {
    id: 2,
    original:
      "https://dkstatics-public.digikala.com/digikala-adservice-banners/a64864eb56906a97db7f2bebc491197038031617_1668860731.jpg?x-oss-process=image/quality,q_95",
    url: null,
  },
  {
    id: 3,
    original:
      "https://dkstatics-public.digikala.com/digikala-adservice-banners/5996fda2892c52324345d5fd225525c7c527563b_1661861458.jpg?x-oss-process=image/quality,q_95",
    url: null,
  },
  {
    id: 4,
    original:
      "https://dkstatics-public.digikala.com/digikala-adservice-banners/c54c18ed1d577e1cc10bc6586358032f92deabbd_1669101822.jpg?x-oss-process=image/quality,q_95",
    url: null,
  },
  {
    id: 5,
    original:
      "https://dkstatics-public.digikala.com/digikala-adservice-banners/2be2a332d73ab52b41437354e919453079104e3b_1663664273.jpg?x-oss-process=image/quality,q_95",
    url: null,
  },
  {
    id: 6,
    original:
      "https://dkstatics-public.digikala.com/digikala-adservice-banners/c54c18ed1d577e1cc10bc6586358032f92deabbd_1669101822.jpg?x-oss-process=image/quality,q_95",
    url: null,
  },
  {
    id: 7,
    original:
      "https://dkstatics-public.digikala.com/digikala-adservice-banners/4b288f0f84a72e429e85511a5af5310ff9c27c88_1663767668.jpg?x-oss-process=image/quality,q_95",
    url: null,
  },
  {
    id: 8,
    original:
      "https://dkstatics-public.digikala.com/digikala-adservice-banners/f098b8fff65bbe6d36239b7a74583dfd16c8e585_1669142921.jpg?x-oss-process=image/quality,q_95",
    url: null,
  },
  {
    id: 9,
    original:
      "https://dkstatics-public.digikala.com/digikala-adservice-banners/4f563b86b8f703dcbb893c2eb230dfd3dac73300_1669146619.jpg?x-oss-process=image/quality,q_95",
    url: null,
  },
];

// const SLIDE_COUNT = 5;
// const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

const BannerSlider: React.FC = () => {
  return <EmblaCarousel images={images} options={OPTIONS} />;
};

export default BannerSlider;
