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
  AccordionProvider,
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


const FAQSection = () => {
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
        <Image
          width={[200, 300, 300, 300]}
          objectFit="cover"
          top="10"
          src="/logo.png"
          alt="verax logo"
          m="0 auto"
          position="absolute"
        />
        
        <Flex
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
            align="center"
            justify="center"
            mr="lg"
            position={"fixed"}
            display={["flex", "flex", "flex", "flex"]}
          >
          </Flex>
            <Text
              fontFamily="Arial-Black"
              textAlign="center"
              w="100"
              margin={"1.5"}
              top={100}
              right={50}
              left={50}
              position="absolute"
              fontSize={'4vh'}
            >
              FAQ
            </Text>
            
            </Flex>
              <UnorderedList flex={1}
              w="85%"
              position="absolute"
              justifyContent={"center"}
              h="auto"
              m="0 auto"
              //bottom={"100"}
              background='black'
              justifyItems={"center"}
              >
                <Accordion defaultIndex={[]} allowToggle
                display='flow'
                width={"auto"}
                margin='unset'
                >
                <AccordionItem>
                  <h2>
                    <AccordionButton flex="1" fontSize={'vh'} textAlign={"left"} fontFamily={"Arial-bold"} position="inherit" top="10" bottom={100}>
                      <Box >
                      When and where is the mint?
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                    <AccordionPanel pb={1} fontFamily={"Arial"} margin='0' fontSize={'vh'} >
                      The mint will be during the month of december. You will be able to buy one or more NFTs. We will send the link to all the V listed.
                      </AccordionPanel>
                </AccordionItem>
                
                <AccordionItem>
                  <h2>
                    <AccordionButton>
                      <Box  flex="1" textAlign='left' fontFamily={"Arial-bold"} fontSize={'vh'} >
                            Who is behind the project?
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                    <AccordionPanel pb={2}  fontFamily={"Arial"} margin='0' fontSize={'vh'} >
                    The Verax project was built by an annnonymous group of artist from different fields. Kai Nakamoto is the CEO of the brand. We want to collaborate in the future with people that inspire us.
                      </AccordionPanel>
                </AccordionItem>
                
                <AccordionItem>
                  <h2>
                    <AccordionButton>
                      <Box  flex='1' textAlign='left' fontFamily={"Arial-bold"} margin='0' fontSize={'vh'} >
                            What is the utility of your NFTs?
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                    <AccordionPanel pb={2} fontFamily={"Arial"} margin='0' fontSize={'vh'} >
                      The utility of the NFTs are the first one to be able to claim a Verax V01.02 watch for free. Then you will access our private group and our private parties.
                      </AccordionPanel>
                </AccordionItem>
                
                <AccordionItem>
                  <h2>
                    <AccordionButton>
                      <Box  flex='1' textAlign='left' fontFamily={"Arial-bold"} margin='0' fontSize={'vh'} >
                            What about the funding?
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                    <AccordionPanel pb={2} fontFamily={"Arial"} top='14' margin='0' fontSize={'vh'} >
                      All the watches where produced with our own money. We did not want to use the mint money to produce them. The mint money will be use to orgnize an event and to keep building the brand. We also want to lauch a hoodie for the next mint and the marketing to keep growing our community.
                      </AccordionPanel>
                </AccordionItem>
                
                <AccordionItem>
                  <h2>
                    <AccordionButton>
                      <Box  flex='1' textAlign='left' fontFamily={"Arial-bold"} margin='0' fontSize={'vh'} >
                            Have you sell other products in the past?
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                    <AccordionPanel pb={2} fontFamily={"Arial"} margin='0' fontSize={'vh'} >
                      Yes, we sold out our first watch : The V01.01. The collection was sold in web 2.0
                    </AccordionPanel>
                </AccordionItem>
                
                <AccordionItem>
                  <h2>
                    <AccordionButton>
                      <Box  flex='1' textAlign='left' fontFamily={"Arial-bold"} margin='0' fontSize={'vh'} >
                            How much is the watch and NTFs?
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                    <AccordionPanel pb={2} fontFamily={"Arial"} margin='0' fontSize={'vh'} >
                      The price of the watch is 780$ for retail & the NFTs will be sold for 420$. However, by buying our NFTs will be able to claim the watch for free.
                    </AccordionPanel>
                </AccordionItem>
                
                <AccordionItem>
                  <h2>
                    <AccordionButton>
                      <Box  flex='1' textAlign='left' fontFamily={"Arial-bold"}margin='0' fontSize={'vh'} >
                            Do I get the pysical watch when I buy the NFTs?
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                    <AccordionPanel pb={2} fontFamily={"Arial"} margin='0' fontSize={'vh'} >
                      Yes, once you have the NFTs in your wallet you will be able to use it to claim the physical watch.
                      </AccordionPanel>
                </AccordionItem>
                
                <AccordionItem>
                  <h2>
                    <AccordionButton>
                      <Box  flex='1' textAlign='left' fontFamily={"Arial-bold"} margin='0' fontSize={'vh'} >
                            What do I get by buying the NFTs?
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                    <AccordionPanel pb={2} fontFamily={"Arial"} margin='0' fontSize={'vh'} >
                        Claim a Verax V01.02 Swiss Made Watch
                    </AccordionPanel>
                </AccordionItem>

              </Accordion>
            </UnorderedList>
            </Flex>
        
  );
};

export default FAQSection;
