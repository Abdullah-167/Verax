import { Flex, Image, Text, Box, chakra, Spacer } from "@chakra-ui/react";
import dynamic from "next/dynamic";
import { useState } from "react";
import ReactPlayer from "react-player";

const GalleryContent = dynamic(
  () => import("../GalleryContent/GalleryContent"),
  {
    ssr: false,
  }
);
const BankSection = () => {
  const [videoLoaded, setVideoLoaded] = useState<boolean>(false);

  return (
    <Flex w="100%" h="100%" align="flex-start" justify="flex-start" flex={1}>
      <Flex
        w="100%"
        h="100%"
        flex={1}
        align="center"
        justify="center"
        position="absolute"
        zIndex={1}
      >
        {/* <ReactPlayer
          style={{
            transition: "all ease 0.8s",
            opacity: videoLoaded ? 1 : 0.5,
          }}
          url="/video3.mp4"
          className="video-container"
          muted
          playing
          loop
          playsinline
          controls={false}
          onReady={() => setVideoLoaded(true)}
        /> */}
      </Flex>
      <Flex
        flexDir="column"
        align="center"
        justify="flex-start"
        flex={1}
        h="100%"
        w="100%"
        zIndex={100}
        bgColor="rgba(0,0,0,0.7)"
        pt="md"
      >
        <Image
          width={[200, 200, 350, 350]}
          objectFit="cover"
          src="/logo.png"
          alt="verax logo"
        />
        <Text
          w={350}
          fontSize={[30, 30, 35, 35]}
          textTransform="uppercase"
          textAlign="center"
          fontFamily="arial"
        >
          The Bank
        </Text>

        <Flex w="100%" h="100%" flex={1} align="center" justify="flex-start">
          <GalleryContent />
        </Flex>
      </Flex>
    </Flex>
  );
};

export default BankSection;
