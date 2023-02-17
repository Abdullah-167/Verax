import {
  chakra,
  Flex,
  Image,
  ListItem,
  Text,
  UnorderedList,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  SimpleGrid,
  Spacer,
} from "@chakra-ui/react";

import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from '@chakra-ui/react'

import { useState } from "react";
import ReactPlayer from "react-player";

const tableData = [
  {
    title: "VER LUEGO",
    color: "#D9D9D9",
    secondColor: "#e4e4e4",
    description: [
      "Diamonds 1/1 watch",
      "Credit card 420VX",
      "Gold Bar = 5% royalties",
      "Verax world",
    ],
    image: "/Ajouter un titre-4.png",
  },
];

const ProjectSection = () => {
  const [videoLoaded, setVideoLoaded] = useState<boolean>(false);
  const [showTable, setShowTable] = useState<boolean>(false);

  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Flex
      w="100%"
      h="100%"
      align="center"
      justify="center"
      flex={1}
      position="relative"
    >
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
        bgColor="rgba(0,0,0,0,7)"
        zIndex={100}
        h="100%"
        flex={1}
        pt={["md", "md", "md", "md"]}
        w="100%"
      >
        <Image
          width={[200, 300, 300, 300]}
          objectFit="cover"
          src="/logo.png"
          alt="verax logo"
          m="0 auto"
        />

        <Flex
          w="100%"
          px={["sm", "sm", "xl", "xl"]}
          //mt="sm"
          flexDir={["column", "column", "row", "row"]}
          align="center"
          justify="center"
          //border= "none"
        >
          <Flex
            w={450}
            h={600}
            align="center"
            justify="center"
            overflow={"hidden"}
            mr="lg"
            display={["none", "none", "flex", "flex"]}
          >
            <iframe
              src="/bank.html"
              style={{
                backgroundColor: "transparent",
                width: "100%",
                height: "100%",
                margin: "0 auto",
                padding: 0,
                border: "none",
              }}
              frameBorder="0"
              scrolling="no"
            />
          </Flex>
          <Flex
            flexDir="column"
            w={["100%", "100%", "100%", "60%"]}
            align="center"
            justify="center"
            
          >
            <Text
              fontFamily="Arial"
              textAlign="center"
              w="100"
              top={110}
              right={50}
              left={50}
              position="absolute"
              fontSize={[30, 35, 40, 45]}
            >
              NFT
            </Text>
            
            <Button 
                size='lg' 
                position={"absolute"}             
                top='90%'
                left={"20%"}
                w='60%'
                textColor={"black"}
                fontFamily={"arial"}                    
                background={"white"}
                onClick={() => onOpen()}
                >
                Utilityes
            </Button>
            
            <Flex
              flexDir="column"
              align="flex-start"
              justify="center"
              w="45%"
              left={"30%"}
              top={180}
              fontFamily="Arial"
              my={["xs", "xs", "md", "md"]}
              fontSize={[13, 15, 17, 17]}
              //border="1px solid white"
              position="absolute"
              //borderWidth={1}
              borderStyle="solid"
              borderColor="rgba(255,255,255,0.2)"
              bgColor="rgba(0,0,0,0.5)"
              shadow="lg"
              p="sm"
              borderRadius={5}
              
            >
           <UnorderedList w="100%" h="100%" flex={1} position="absolute" >

           </UnorderedList>
              
            </Flex>
          </Flex>
        </Flex>
      </Flex>
      <Modal size="6xl" isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent m="md" bgColor="rgba(0,0,0,0.9)" color="white">
          <ModalCloseButton />
          <ModalBody>
            <Flex
              w="100%"
              align="flex-start"
              justify="flex-start"
              flexDir="column"
              p="sm"
            >
              <Flex
                w="100%"
                align="center"
                justify="center"
                flexDir={["column", "column", "row", "row"]}
              >
                <Flex w={300} align="center" flexDir="column" justify="center">
                  <Image
                    width={300}
                    objectFit="cover"
                    src="/logo.png"
                    alt="verax logo"
                  />

                </Flex>
                {/*<Text
                  w="100%"
                  fontSize={17}
                  textAlign={["center", "center", "right", "right"]}
                  fontFamily="Montserrat"
                  mt={["sm", "sm", "lg", "lg"]}
                >
                  Here are the{" "}
                  <chakra.span fontFamily="Astral" textTransform="uppercase">
                    5 levels
                  </chakra.span>{" "}
                  that will be randomly assigned to our 500 NFTs
                    </Text>*/}
              </Flex>

              <SimpleGrid
                position={"absolute"}
                top={3}
                w="100%"
                alignItems="stretch"
                justifyItems="flex-start"
                mt="sm"
              >
                {tableData.map((e, i) => {
                  return (
                    <Image
                      width="100%"
                      objectFit="cover"
                      src={e.image}
                      key={i}
                    />
                  );
                })}
              </SimpleGrid>
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Flex>
  );
};

export default ProjectSection;
