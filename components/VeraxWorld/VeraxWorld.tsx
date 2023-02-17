import { Flex, Image, Text, Box, chakra } from "@chakra-ui/react";
import { useState } from "react";
import ReactPlayer from "react-player";
import NetworkNav from "../NetworkNav/NetworkNav";

const VeraxWorld = () => {
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
        {/*<ReactPlayer
          style={{
            transition: "all ease 0.8s",
            opacity: videoLoaded ? 1 : 0.5,
          }}
          url="/video2.mp4"
          className="video-container"
          muted
          playing
          loop
          playsinline
          controls={false}
          onReady={() => setVideoLoaded(true)}
        />*/}
      </Flex>
      <Flex
        flexDir="column"
        align="center"
        justify="flex-start"
        flex={1}
        zIndex={100}
        bgColor="rgba(0,0,0,0.7)"
        h="100%"
        w="100%"
        position="relative"
        px={["sm", "sm", "xl", "xl"]}
        pt={["2xl", "2xl", "lg", "lg"]}
      >
        <Image
          width={[200, 200, 350, 350]}
          objectFit="cover"
          src="/logo.png"
          alt="verax logo"
        />
        <Text
          w={350}
          fontSize={[30, 30, 60, 60]}
          textTransform="uppercase"
          textAlign="center"
          fontFamily="Montserrat"
        >
          WORLD
        </Text>
        <Flex
          overflow="hidden"
          align="center"
          whiteSpace="nowrap"
          w="100vw"
          h="100%"
          fontSize={[50, 50, 65, 65]}
          boxSizing="border-box"
          fontFamily="arial"
          position="relative"
          top={0}
          mb="md"
        >
          <Text
            pl="100%"
            pr="40%"
            display="flex"
            animation="move 23s linear infinite"
          >
            <chakra.span mx="2xl">WEB3 EVENTS</chakra.span>
            <chakra.span mx="2xl">EXCLUSIVE DROPS </chakra.span>
            <chakra.span mx="2xl">MERCHANDISING </chakra.span>
            <chakra.span mx="2xl">VERAX WORLD EXPERIENCES</chakra.span>
            <chakra.span mx="2xl">WIN PRIZES</chakra.span>
            <chakra.span mx="2xl">PRIVATE EVENTS</chakra.span>
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default VeraxWorld;
