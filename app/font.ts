import localFont from "next/font/local";

export const sfProDisplay = localFont({
  src: [
    {
      path: "../public/fonts/SFPRODISPLAYREGULAR.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/SFPRODISPLAYMEDIUM.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/SFPRODISPLAYSEMIBOLDITALIC.woff2",
      weight: "600",
      style: "italic",
    },
    {
      path: "../public/fonts/SFPRODISPLAYBOLD.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../public/fonts/SFPRODISPLAYBLACKITALIC.woff2",
      weight: "900",
      style: "italic",
    },
    {
      path: "../public/fonts/SFPRODISPLAYHEAVYITALIC.woff2",
      weight: "800",
      style: "italic",
    },
    {
      path: "../public/fonts/SFPRODISPLAYLIGHTITALIC.woff2",
      weight: "300",
      style: "italic",
    },
    {
      path: "../public/fonts/SFPRODISPLAYTHINITALIC.woff2",
      weight: "200",
      style: "italic",
    },
    {
      path: "../public/fonts/SFPRODISPLAYULTRALIGHTITALIC.woff2",
      weight: "100",
      style: "italic",
    },
  ],
  variable: "--font-sfpro",
});