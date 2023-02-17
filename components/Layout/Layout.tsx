import React from "react";
import { Flex, Image } from "@chakra-ui/react";
import NextHeadSeo from "next-head-seo";
import Footer from "../Footer/Footer";
import Script from "next/script";
import Navbar from "../Navbar/Navbar";

const Layout = (props: any) => {
  return (
    <>
      {/* <Script
        src={`https://www.googletagmanager.com/gtag/js?id=G-2V3PJ5TCYD`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-2V3PJ5TCYD');
          `}
      </Script> */}
      <NextHeadSeo
        title="VERAX WORLD"
        description="Verax - Exclusive NFT Collection stored on ETH blockchain. An ambitious ever-growing community with multiple benefits and utilities."
        canonical="https://veraxworldnft.com"
        robots="index, follow"
        og={{
          title: "VERAX WORLD",
          type: "website",
          url: "https://veraxworldnft.com",
          image: "https://veraxworldnft.com/logo.png",
          siteName: "VERAX WORLD",
        }}
        twitter={{
          card: "summary",
        }}
      />

      {/* <Image
        width="100%"
        h="100vh"
        objectFit="cover"
        src="/banner.jpeg"
        alt="the butties demo"
        shadow="dark-lg"
        m="0 auto"
        position="fixed"
        top={0}
        left={0}
        zIndex={0}
        opacity={0.4}
      /> */}
      <Flex
        w="100%"
        h="100%"
        color="white"
        bgColor="black"
        fontFamily="Verax, sans-serif"
        flexDir="column"
        alignItems="stretch"
        position="relative"
        zIndex={100}
      >
        {/* <Navbar /> */}
        <Flex
          align="center"
          justify="center"
          flexDir="column"
          w="100%"
          minH="100vh"
          alignItems="stretch"
          flex={1}
        >
          {props.children}
        </Flex>
        {/* <Footer /> */}
      </Flex>
    </>
  );
};

export default Layout;
