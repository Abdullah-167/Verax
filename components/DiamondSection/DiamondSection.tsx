import { Flex, Text } from "@chakra-ui/react";
import { useState } from "react";
import ReactPlayer from "react-player";

const DiamondSection = () => {
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
        <ReactPlayer
          style={{
            transition: "all ease 0.8s",
            opacity: videoLoaded ? 1 : 0.5,
            width: "100%",
          }}
          url="/diamond-video.mp4"
          className="video-container"
          muted
          playing
          loop
          playsinline
          controls={false}
          onReady={() => setVideoLoaded(true)}
        />
      </Flex>

      <Flex
        zIndex={100}
        h="100%"
        align="center"
        justify="flex-end"
        w="100%"
        bgColor="rgba(0,0,0,0.5)"
        px="2xl"
      >
        <Flex
          border="1px solid white"
          borderWidth={1}
          borderRadius={10}
          cursor="pointer"
          borderStyle="solid"
          borderColor="rgba(255,255,255,0.2)"
          bgColor="rgba(0,0,0,0.5)"
          shadow="lg"
          transition="all ease 0.5s"
          p="md"
          _hover={{
            transform: "scale(1.02)",
          }}
        >
          <Text
            fontSize={35}
            textAlign="center"
            textTransform="uppercase"
            fontFamily="Quicksand"
          >
            A 1/1 exclusive watch set with diamonds <br /> will be assigned
            randomly to a NFT
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default DiamondSection;
