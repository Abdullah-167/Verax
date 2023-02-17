import { Flex, Image, Text, Box, chakra, Spacer } from "@chakra-ui/react";
import ProcessDotLineContent from "../ProcessDotLineContent/ProcessDotLineContent";
import ReactPlayer from "react-player";
import { useState } from "react";
import { useMediaQuery } from 'react-responsive'

const tableData = [
 
];


const ProcessSection = () => {
  const [videoLoaded, setVideoLoaded] = useState<boolean>(false);
  const isDesktopOrLaptop = useMediaQuery({ minWidth: 1224 })
  const isBigScreen = useMediaQuery({ minWidth: 1824 })
  const isTabletOrMobile = useMediaQuery({ maxWidth: 1224 })
  const isPortrait = useMediaQuery({ orientation: 'portrait' })
  const isRetina = useMediaQuery({ minResolution: '2dppx' })

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
      
      </Flex>
      <Flex
        flexDir="column"
        align="center"
        justify="center"
        bgColor="rgba(0,0,0,0.7)"
        flex={1}
        h="100%"
        w="100%"
        px={["md", "md", "lg", "lg"]}
        pt={["sm", "sm", "md", "md"]}
        zIndex={100}
      >
        <Flex align="center" justify="center" flexDir="column" w="100%">
          <Image
            width={[200, 300, 300, 300]}
            objectFit="cover"
            src="/logo.png"
            alt="verax logo"
            fontFamily="Arial"
          />
          <Text fontSize={[30, 30, 35, 35]} fontFamily="Arial" textTransform="uppercase">
            Roadmap
          </Text>
        </Flex>

        <Flex
        //position
          w={["100%", "100%", "85%", "85%"]}
          h="100%"
          align="center"
          justify="center"
          position="relative"
          bottom={6}
          flex={1}
          flexDir={["column", "column", "row", "row"]}
        >
          <Flex
            align="flex-start"
            justify="center"
            h="100%"
            w="100%"
            m="0 auto"
            borderRadius={5}
            position="relative"
            flexDir="column"
          >
            <Flex
              align="center"
              justify="center"
              w={1}
              bgColor="white"
              h="60vh"
              borderRadius={5}
              position="absolute"
              left={0}
            ></Flex>

            <ProcessDotLineContent
              title={
                <Text>
                  Designing & producing the 500 physical Verax V01.02 watches{" "}                
                </Text>
              }
            />

            <ProcessDotLineContent
              title={
                <Text>
                  Opening the Discord & Telegram{" "}
                </Text>
              }
            />

            <ProcessDotLineContent
              title={
                <Text>
                  Mint phase of the 500 NFTs{" "}
                </Text>
              }
            />

            <ProcessDotLineContent
              title={
                <Text>
                  Claim your Verax V01.02 watch{" "}
                </Text>
              }
            />

            <ProcessDotLineContent
              title={
                <Text>
                  Next drop will be a hoodie{" "}
                </Text>
              }
            />
          </Flex>
          <Spacer />
          <Flex
            align="center"
            display={["none", "none", "none", "flex"]}
            justify="center"
            flexDir="column"
          >
          
          
          
        </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}; 


export default ProcessSection;