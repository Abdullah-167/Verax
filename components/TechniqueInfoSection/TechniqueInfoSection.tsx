import {
  Flex,
  Image,
  Text,
  Box,
  chakra,
  SimpleGrid,
  Spacer,
  useBreakpointValue,
  Icon,
  IconButton,
} from "@chakra-ui/react";
import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import ReactPlayer from "react-player";

const imageList = ["/tech0.png", "/tech1.png", "/tech2.png", "/tech3.png"];

const TechniqueInfoSection = () => {
  const [showDiamond, setShowDiamond] = useState<boolean>(false);
  const [imageId, setImageId] = useState<number>(0);
  const buttonSize = useBreakpointValue(
    { base: false, lg: true },
    { ssr: false }
  );

  return (
    <>
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
            objectFit: "cover",
            opacity: showDiamond ? 1 : 0,
          }}
          url="/diamond-video.mp4"
          className="video-container"
          muted
          playing
          loop
          playsinline
          controls={false}
        />
      </Flex>

      <Flex
        w="100%"
        h="100%"
        flex={1}
        align="center"
        justify="center"
        position="absolute"
        zIndex={1}
      >
        <Image
          width="100%"
          height="100vh"
          objectFit="cover"
          src="/wallpaper.png"
          alt="verax logo"
          opacity={showDiamond ? 0 : 1}
        />
      </Flex>
      <Flex w="100%" h="100%" align="flex-start" justify="flex-start" flex={1}>
        <Flex
          align="center"
          justify="center"
          flexDir="column"
          flex={1}
          h="100%"
          w="100%"
          zIndex={100}
          bgColor="rgba(0,0,0,0.7)"
          px={["sm", "sm", "xl", "xl"]}
          pt={["2xl", "2xl", "md", "md"]}
        >
          <Flex
            flexDir="column"
            align="center"
            justify="center"
            flex={1}
            h="100%"
            w="100%"
            position="relative"
          >
            <Image
              width={[200, 200, 350, 350]}
              objectFit="cover"
              src="/logo.png"
              alt="verax logo"
            />
            <Text
              w={350}
              fontSize={25}
              textTransform="uppercase"
              textAlign="center"
              fontFamily="Montserrat"
            >
              V01.02
            </Text>
            <Text
              w={350}
              fontSize={22}
              textAlign="center"
              textTransform="uppercase"
              fontFamily="arial"
              lineHeight={8}
            >
              Limited Edition 500 pieces
            </Text>
          </Flex>

          <Flex
            align="center"
            justify="center"
            h="100%"
            w="100%"
            m="0 auto"
            flexDir={["column", "column", "row", "row"]}
            mt={["sm", "sm", 0, 0]}
          >
            <Flex
              display={["none", "none", "flex", "flex"]}
              align="center"
              w="100%"
              justify="center"
            >
              <IconButton
                w={42}
                h={42}
                cursor="pointer"
                onClick={() =>
                  imageId !== 0
                    ? setImageId(imageId - 1)
                    : setImageId(imageList.length - 1)
                }
                mr="md"
                transition="all ease 0.5s"
                bgColor="transparent"
                _hover={{ bgColor: "transparent", transform: "scale(1.20)" }}
                as={FaChevronLeft}
                aria-label={""}
              />
              <Image
                width={["100%", "100%", 420, 420]}
                objectFit="cover"
                src={imageList[imageId]}
                alt="verax gold watch"
                transition="all ease 0.5s"
                _hover={{
                  transform: "scale(1.02)",
                }}
                bgColor="rgba(0,0,0,0.5)"
                shadow="lg"
              />
              <IconButton
                w={42}
                h={42}
                cursor="pointer"
                onClick={() =>
                  imageId !== imageList.length - 1
                    ? setImageId(imageId + 1)
                    : setImageId(0)
                }
                ml="md"
                transition="all ease 0.5s"
                bgColor="transparent"
                _hover={{ bgColor: "transparent", transform: "scale(1.20)" }}
                as={FaChevronRight}
                aria-label={""}
              />
            </Flex>
            <SimpleGrid
              fontFamily="Montserrat"
              fontSize={[15, 15, 17, 17]}
              alignContent="flex-start"
              justifyContent="flex-start"
              w="100%"
              spacingX={0}
              spacingY={4}
              columns={2}
              ml={[0, 0, "lg", "lg"]}
            >
              <Flex
                align="flex-start"
                flexDir="column"
                justify="flex-start"
                w="100%"
                _hover={{
                  transform: "scale(1.08)",
                }}
                transition="all ease 0.5s"
                cursor="pointer"
              >
                <Text fontFamily="MontserratBold" textTransform="uppercase">
                  CASE{" "}
                </Text>
                <Text opacity={0.8} fontSize={15} noOfLines={1}>
                  {" "}
                  GOLD Stainless steel
                </Text>
              </Flex>

              <Flex
                align="flex-start"
                flexDir="column"
                justify="flex-start"
                w="100%"
                _hover={{
                  transform: "scale(1.08)",
                }}
                transition="all ease 0.5s"
                cursor="pointer"
              >
                <Text fontFamily="MontserratBold" textTransform="uppercase">
                  DIAL{" "}
                </Text>
                <Text opacity={0.8} fontSize={15} noOfLines={1}>
                  Blue dial
                </Text>
              </Flex>

              <Flex
                align="flex-start"
                flexDir="column"
                justify="flex-start"
                w="100%"
                _hover={{
                  transform: "scale(1.08)",
                }}
                transition="all ease 0.5s"
                cursor="pointer"
              >
                <Text fontFamily="MontserratBold" textTransform="uppercase">
                  strap{" "}
                </Text>
                <Text opacity={0.8} fontSize={15} noOfLines={1}>
                  {" "}
                  VERAX rubber strap
                </Text>
              </Flex>

              <Flex
                align="flex-start"
                flexDir="column"
                justify="flex-start"
                w="100%"
                _hover={{
                  transform: "scale(1.08)",
                }}
                transition="all ease 0.5s"
                cursor="pointer"
              >
                <Text fontFamily="MontserratBold" textTransform="uppercase">
                  Movement{" "}
                </Text>
                <Text opacity={0.8} fontSize={15}>
                  {" "}
                  Chronograph quartz
                </Text>
              </Flex>

              <Flex
                align="flex-start"
                flexDir="column"
                justify="flex-start"
                w="100%"
                _hover={{
                  transform: "scale(1.08)",
                }}
                transition="all ease 0.5s"
                cursor="pointer"
              >
                <Text fontFamily="MontserratBold" textTransform="uppercase">
                  Glass{" "}
                </Text>
                <Text opacity={0.8} fontSize={15} noOfLines={1}>
                  {" "}
                  K1 Cristal
                </Text>
              </Flex>
              <Flex
                align="flex-start"
                flexDir="column"
                justify="flex-start"
                w="100%"
                _hover={{
                  transform: "scale(1.08)",
                }}
                transition="all ease 0.5s"
                cursor="pointer"
              >
                <Text fontFamily="MontserratBold" textTransform="uppercase">
                  {" "}
                  Water-resistant{" "}
                </Text>
                <Text opacity={0.8} fontSize={15} noOfLines={1}>
                  {" "}
                  10 bars / 100 meters
                </Text>
              </Flex>

              <Flex
                align="flex-start"
                flexDir="column"
                justify="flex-start"
                w="100%"
                _hover={{
                  transform: "scale(1.08)",
                }}
                transition="all ease 0.5s"
                cursor="pointer"
              >
                <Text fontFamily="MontserratBold" textTransform="uppercase">
                  {" "}
                  Case size{" "}
                </Text>
                <Text opacity={0.8} fontSize={15} noOfLines={1}>
                  {" "}
                  43mm
                </Text>
              </Flex>

              <Flex
                align="flex-start"
                flexDir="column"
                justify="flex-start"
                w="100%"
                _hover={{
                  transform: "scale(1.08)",
                }}
                transition="all ease 0.5s"
                cursor="pointer"
              >
                <Text fontFamily="MontserratBold" textTransform="uppercase">
                  {" "}
                  Wrist size{" "}
                </Text>
                <Text opacity={0.8} fontSize={15} noOfLines={1}>
                  {" "}
                  15-21mm / 6-8 inches
                </Text>
              </Flex>

              <Flex
                align="flex-start"
                flexDir="column"
                justify="flex-start"
                w="100%"
                _hover={{
                  transform: "scale(1.08)",
                }}
                transition="all ease 0.5s"
                cursor="pointer"
              >
                <Text fontFamily="MontserratBold" textTransform="uppercase">
                  {" "}
                  Delivery{" "}
                </Text>
                <Text opacity={0.8} fontSize={15} noOfLines={1}>
                  {" "}
                  3-day international shipping
                </Text>
              </Flex>

              <Flex
                align="flex-start"
                flexDir="column"
                justify="flex-start"
                w="100%"
                _hover={{
                  transform: "scale(1.08)",
                }}
                transition="all ease 0.5s"
                cursor="pointer"
              >
                <Text fontFamily="MontserratBold" textTransform="uppercase">
                  {" "}
                  Guarantee{" "}
                </Text>
                <Text opacity={0.8} fontSize={15} noOfLines={1}>
                  {" "}
                  2 years
                </Text>
              </Flex>

              <Flex
                align="flex-start"
                flexDir="column"
                justify="flex-start"
                w="100%"
                _hover={{
                  transform: "scale(1.08)",
                }}
                transition="all ease 0.5s"
                cursor="pointer"
              >
                <Text fontFamily="MontserratBold" textTransform="uppercase">
                  {" "}
                  Production{" "}
                </Text>
                <Text opacity={0.8} fontSize={15} noOfLines={1}>
                  {" "}
                  Swiss made / Int. collaborations
                </Text>
              </Flex>
              <Flex
                align="flex-start"
                flexDir="column"
                justify="flex-start"
                w="100%"
                _hover={{
                  transform: "scale(1.08)",
                }}
                transition="all ease 0.5s"
                cursor="pointer"
              >
                <Text fontFamily="MontserratBold" textTransform="uppercase">
                  {" "}
                  Compatibility{" "}
                </Text>
                <Text opacity={0.8} fontSize={15} noOfLines={1}>
                  {" "}
                  Real world / Metaverse
                </Text>
              </Flex>
            </SimpleGrid>
            <Flex align="center" mt={[0, 0, "md", "md"]} justify="center">
              <Image
                width={[75, 75, 150, 150]}
                objectFit="cover"
                src="/diamond-transparent.png"
                alt="verax diamong logo"
                cursor="pointer"
                _hover={{
                  transform: "scale(1.1)",
                }}
                onClick={() => {
                  !buttonSize ? setShowDiamond(!showDiamond) : {};
                }}
                onMouseOver={() => setShowDiamond(true)}
                onMouseOut={() => setShowDiamond(false)}
              />
              <Text
                fontFamily="arial"
                textTransform="uppercase"
                fontSize={[15, 15, 17, 17]}
                color="white"
                className="floating-object"
                mb="xl"
              >
                Touch
              </Text>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};

export default TechniqueInfoSection;
