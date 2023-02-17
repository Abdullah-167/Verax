import { Flex, Image, Text, Spacer, Box, Icon } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import Countdown from "react-countdown";
import NetworkNav from "../NetworkNav/NetworkNav";
import { ChevronDownIcon } from "@chakra-ui/icons";
import MediaQuery from "react-responsive/types/Component";

const WelcomeSession = ({ handlePageChange }: any) => {
  const [enterScreen, setEnterScreen] = useState(false);

  useEffect(() => {
    setEnterScreen(true);
  }, []);

  {/* 
  const Completionist = () => (
    <Text fontSize={[20, 20, 30, 30]} px="sm" textAlign="center" flex={1} position={"relative"} >
      BORN FROM THE CHAOS
    </Text>
  );



  <Flex
  display="grid"
  padding="15%"
  gridTemplateRows="min-content"
  w="100%"
  h="100%"
  align={["center", "center", "flex-start", "flex-start"]}
  justify={["center", "center", "flex-start", "flex-start"]}
  flex={1}
  //pt={["2xl", "2xl", "xl", "xl"]}
  //pl={[0, 0, "xl", "xl"]} 
  //position="absolute"
  visibility={enterScreen ? "visible" : "hidden"}
  opacity={enterScreen ? 1 : 0}
  transition="all 1s ease"
  flexDir={["column", "column", "row", "row"]}
  > 
*/}
return (
  <Flex position={"relative"} flexDir="column" h="100%" flex={1} w="100%" gridTemplateRows="min-content">
        <Image
          width={[200, 200, 350, 350]}
          m={["0 auto", "0 auto", 0, 0]}
          paddingTop={'10'}
          objectFit="cover"
          src="/logo.png"
          alt="verax logo"
          />
        
          <Flex
            flexDir="column"
            zIndex={10}
            align="center"
            justify="center"
            px="xs"
            py="sm"
            w="100%"
            fontFamily="MontserratBold"
          >
            <Text fontSize={[20, 20, 30, 30]} px="sm" textAlign="center" flex={1} >
            BORN FROM THE CHAOS
            </Text>
        </Flex>

            <NetworkNav />
      <Flex
        w="100%"
        h="100%"
        zIndex={1}
        position="relative"
        flex={1}
        align="center"
        justify="flex-end"
        //paddingTop={'1'}
      >
        <Image
          position="absolute"
          pt={["2xl", "2xl", "auto", "auto"]}
          pl={["0", "0", "0", "0"]}
          //margin={"0 auto"}
          height="100%"
          //top={"0.0"} 
          objectFit="cover"
          src="/home-watch-transparent.png"
          alt="verax watch"
        />
      </Flex>
      <Flex
        position="absolute"
        bottom={5}
        left="50%"
        w="100%"
        className="floating-object-second"
        zIndex={100}
      >
        <Icon
          color="white"
          onClick={() => handlePageChange(1)}
          as={ChevronDownIcon}
          w={[50, 50, 65, 65]}
          h={[50, 50, 65, 65]}
          cursor="pointer"
        />
      </Flex>
    </Flex>  
  );
};

export default WelcomeSession;
