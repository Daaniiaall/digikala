import localFont from 'next/font/local'

export const yekanBakh = localFont({
  src: [
    {
      path: "../../public/fonts/YekanBakh-Light.woff2",
      weight: "100",
      style: "light",
    },
    {
      path: "../../public/fonts/YekanBakh-Regular.woff2",
      weight: "200",
      style: "light",
    },
    {
      path: "../../public/fonts/YekanBakh-Bold.woff2",
      weight: "400",
      style: "light",
    },
    {
      path: "../../public/fonts/YekanBakh-Heavy.woff2",
      weight: "600",
      style: "light",
    },
    {
      path: "../../public/fonts/YekanBakh-Fat.woff2",
      weight: "700",
      style: "light",
    },
  ],
});