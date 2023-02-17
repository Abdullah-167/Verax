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

  const Completionist = () => (
    <Text fontSize={[20, 20, 30, 30]} px="sm" textAlign="center" flex={1}>
      BORN FROM THE CHAOS
    </Text>
  );

  const renderer = ({ days, hours, minutes, seconds, completed }: any) => {
    if (completed) {
      return <Completionist />;
    } else {
      return (
        <Flex
          align="center"
          justify="center"
          fontFamily="arial"
          letterSpacing={5}
          color="gray.300"
        >
          <Box mr={["xs", "xs", "sm", "sm"]} textAlign="center">
            <Text px={1} fontSize={[20, 25, 40, 40]}>
              {days}
            </Text>
            <Text fontSize={[13, 17, 30, 30]} textAlign="center" mt={1}>
              DAYS
            </Text>
          </Box>
          <Box mr={["xs", "xs", "sm", "sm"]} textAlign="center">
            <Text px={1} fontSize={[20, 25, 40, 40]}>
              {hours}
            </Text>
            <Text fontSize={[13, 17, 30, 30]} textAlign="center" mt={1}>
              HOURS
            </Text>
          </Box>

          <Box mr={["xs", "xs", "sm", "sm"]} textAlign="center">
            <Text px={1} fontSize={[20, 25, 40, 40]}>
              {minutes}
            </Text>
            <Text fontSize={[13, 17, 30, 30]} textAlign="center" mt={1}>
              MINUTES
            </Text>
          </Box>

          <Box textAlign="center">
            <Text px={1} fontSize={[20, 25, 40, 40]}>
              {seconds}
            </Text>
            <Text fontSize={[13, 17, 30, 30]} textAlign="center" mt={1}>
              SECS
            </Text>
          </Box>
        </Flex>
      );
    }
  };

  return (
    <Flex
    display="grid"
    padding="15%"
    gridTemplateRows="min-content"
      w="100%"
      h="100%"
      align={["center", "center", "flex-start", "flex-start"]}
      justify={["center", "center", "flex-start", "flex-start"]}
      flex={1}
      /* pt={["2xl", "2xl", "xl", "xl"]}
      pl={[0, 0, "xl", "xl"]} */
      position="relative"
      visibility={enterScreen ? "visible" : "hidden"}
      opacity={enterScreen ? 1 : 0}
      transition="all 1s ease"
      flexDir={["column", "column", "row", "row"]}
    >
      <Flex flexDir="column" h="100%" flex={1} w="100%">
        <Image
          width={[200, 200, 350, 350]}
          m={["0 auto", "0 auto", 0, 0]}
          objectFit="cover"
          src="/logo.png"
          alt="verax logo"
        />
        <Spacer />
        <Flex
          w="100%"
          align="center"
          mt={["md", "md", 0, 0]}
          flexDir="column"
          justify="center"
        >
          <Countdown date={1664177045 * 1000} renderer={renderer} />
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
            <NetworkNav />
          </Flex>
        </Flex>

        <Spacer />
      </Flex>

      <Flex
        w="100%"
        h="100%"
        zIndex={1}
        position="relative"
        flex={1}
        align="center"
        justify="flex-end"
      >
        <Image
          position="absolute"
          margin={"0 auto"}
          height="100%"
          top={"0.0"} 
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
