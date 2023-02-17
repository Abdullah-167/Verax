import { Flex, Image, Text, Box, chakra, Spacer } from "@chakra-ui/react";
import ProcessDotLineContent from "../ProcessDotLineContent/ProcessDotLineContent";
import ReactPlayer from "react-player";
import { useState } from "react";
import { CheckIcon } from '@chakra-ui/icons'

const tableData = [
 
];

const ProcessSection = () => {
  const [videoLoaded, setVideoLoaded] = useState<boolean>(false);

  return (
    <Flex w="100%" h="100%" align="flex-start" justify="flex-start" flex={1} position={"relative"}>
      <Flex
        w="100%"
        h="100%"
        flex={1}
        align="center"
        justify="center"
        position={"absolute"}
        zIndex={1}
      >

      </Flex>
      <Flex
        flexDir="column"
        align="center"
        justify="center"
        bgColor="rgba(0,0,0,0.7)"
        position="absolute"
        flex={1}
        h="100%"
        w="100%"
        px={["md", "md", "lg", "lg"]}
        pt={["sm", "sm", "md", "md"]}
        zIndex={100}
      >
        <Flex align="center" justify="center" flexDir="column" w={"auto"} top={"auto"} >
          
          <Image
            width={[200, 300, 300, 300]}
            objectFit="cover"
            src="/logo.png"
            alt="verax logo"
            fontFamily="Arial"
          />
          <Text fontSize={"3vh"} fontFamily="Arial" textTransform="uppercase">
            Roadmap
          </Text>
        </Flex>

        <Flex // logo
          w={["100%", "100%", "85%", "85%"]}
          top={"30%"}
          left={"100%"}
          align="center"
          justify="center"
          //position={"relative"}
          flex={5}
          flexDir={["column", "column", "row", "row"]}
        >
          <Flex
            align="flex-start"
            justify="center"
            h="70%"
            w="60%"
            //m="0 auto"
            borderRadius={1}
            position="absolute"
            flexDir="column"
            display={["flex", "flex", "flex", "flex"]}
          >
            <Flex //linea del proceso e items
              align="center"
              justify="center"
              w={1}
              bgColor="white"
              h="60vh"
              borderRadius={5}
              position="absolute"
            >
              
            </Flex>
            <ProcessDotLineContent 
              title={
                <Text fontSize={"4vm"} fontFamily={"arial black"} position={"fixed"} >
                  Designing & producing the 500 physical Verax V01.02 watches{" "}
                  <CheckIcon w={8} h={8} color="green.400" />
                </Text>
              }
            />

            <ProcessDotLineContent
              title={
                <Text fontSize={"4vm"} fontFamily={"arial black"} position={"fixed"} >
                  Opening the Discord & Telegram{" "}
                  <CheckIcon w={8} h={8} color="green.400" />
                </Text>
              }
            />

            <ProcessDotLineContent
              title={
                <Text fontSize={"4vm"} fontFamily={"arial black"} position={"fixed"} >
                  Mint phase of the 500 NFTs{" "}
                </Text>
              }
            />

            <ProcessDotLineContent
              title={
                <Text fontSize={"4vm"} fontFamily={"arial black"} position={"fixed"} >
                  Claim your Verax V01.02 watch{" "}
                </Text>
              }
            />

            <ProcessDotLineContent
              title={
                <Text fontSize={"4vm"} fontFamily={"arial black"} position={"fixed"} >
                  Next drop will be a hoodie{" "}
                </Text>
              }
            />
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}; 

export default ProcessSection;