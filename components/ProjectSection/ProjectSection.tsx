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
  Center,
} from "@chakra-ui/react";

import { useState } from "react";

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
    ><Flex
        w="100%"
        h="100%"
        flex={1}
        align="center"
        justify="center"
        position="absolute"
        zIndex={1}
      ></Flex>
      
      <Flex
        flexDir="column"
        bgColor="rgba(0,0,0,0,7)"
        zIndex={100}
        h="100%"
        w="100%"
        flex={1}
        pt={["md", "md", "md", "md"]}
        top={"auto"}
        ><Image
          objectFit="cover"
          src="/logo.png"
          alt="verax logo"
          m="0 auto"
        /><Flex
          w="100%"
          px={["sm", "sm", "xl", "xl"]}
          mt="sm"
          flexDir={["column", "column", "row", "row"]}
          align="center"
          justify="center"
          border= "none"
        >
          <Flex
            w={300}
            h={530}
            position={"absolute"}
            top={"20%"} //cofre
            display={["flex", "flex", "flex", "flex"]}
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
              scrolling={"no"}
            />
            <Button 
                size={"lg"} 
                position={"absolute"}             
                fontSize={30}
                top='92%'
                left={"50%"}
                w='80'
                h='24'
                zIndex={100}
                bgColor="rgba(255,255,255,0.1)"
                fontFamily={"verax"}
                letterSpacing={2}
                colorScheme="whiteAlpha"
                variant="solid"
                borderRadius={5}
                transition="all ease 0.6s"
                transform="translate(-50%, -50%)"
                onClick={() => onOpen()}
                >
                UTILITY NFTs
            </Button>
          <Flex
            flexDir="column"
            w={["100%", "100%", "100%", "60%"]}
            align="center"
            justify="center"
          >
            {/*}
            <UnorderedList w="100%" h="100%" flex={1} position="absolute" >
            </UnorderedList>
            */}
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
                  /></Flex>
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
