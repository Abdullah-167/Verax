import { Flex, Image, Text, Box, chakra, Spacer, Stack } from "@chakra-ui/react";
import ProcessDotLineContent from "../ProcessDotLineContent/ProcessDotLineContent";
import ReactPlayer from "react-player";
import { useState } from "react";
import { CheckIcon } from '@chakra-ui/icons'

import { List, ListItem, ListIcon, OrderedList, UnorderedList, } from '@chakra-ui/react'

const tableData = [
 
];

const MintSection = () => {
  const [videoLoaded, setVideoLoaded] = useState<boolean>(false);

  return (
    <Flex align="flex-start" justify="center" flex={1} display="grid" 
    //paddingTop="15%"
    >
      
        <Flex 
        
        flexDir="column"
        align="center"
        justify="center"
        flex={1}
        h="100%"
        w="100%"
        position="relative"
        mb={50}
        >
          <Image
            width={[200, 300, 300, 300]}
            marginTop={14}
            objectFit="cover"
            src="/logo.png"
            alt="verax logo"
            fontFamily="Arial"
          />
          <Text fontSize={"3vh"} fontFamily="Arial" textTransform="uppercase">
          Mint process
          </Text>
        </Flex>

        <Flex // logo
          //w={["100%", "100%", "85%", "85%"]}
          //top={50}
          left={"100%"}
          align="center"
          justify="center"
          position={"absolute"}
          flex={5}
          h={700}
          flexDir={["column", "column", "row", "row"]}
        >
        </Flex>
          <Flex 
          align="flex-start"
          flexDir="column"
          >
            
          <Stack 
            spacing={0}
            fontFamily={"ARIAL"}
            border={"solid"}
            borderRadius={"2xl"}
            /* marginBottom={"3"}
            margin={"8"} */
            marginTop={4}
            marginLeft={4}
            marginRight={4}
            paddingLeft={3}
            paddingBottom={1}        
            >
              <Text 
              fontSize='3vh'
              top={"32"}
              textAlign={"center"}
              fontFamily={"arial"}
              marginBottom={2}
              marginTop={1}
              >PRIVATE PHASE : THE V LIST 
              </Text>
                <Text fontSize={"2vh"} fontFamily={"arial"}>Only 470 NFT will be available during this phase (25 NFT will be used for marketing purpose and 5 for the team).</Text>
                <Text fontSize={"2vh"} fontFamily={"arial"}>The mint will be on our website and the link will be communicated to the V listed only.</Text>
                <Text fontSize={"2vh"} fontFamily={"arial"}>You will get the NFT to claim the physical watch 420 V01.02 (value at 780$).</Text>
                <Text fontSize={"2vh"} fontFamily={"arial"}>You will also get the digital file of the 3D watch (obj., fbx,...).</Text>
                <Text fontSize={"2vh"} fontFamily={"arial"}>And access to the Verax World.</Text>
                <Text fontSize={"3vh"} fontStyle={"oblique"} paddingTop={1} paddingBottom={1}>Mint date will be communicated soon.</Text>
        </Stack>
          
          
          </Flex>        
          
          <Flex 
          align="flex-start"
          flexDir="column"
          justify="flex-start"
          w="100%"
          >
          <Stack 
            spacing={0}
            fontFamily={"arial"}
            border={"solid"}
            borderRadius={"2xl"}
            /* marginBottom={"3"}
            margin={"8"} */
            marginTop={4}
            marginLeft={4}
            marginRight={4}
            paddingLeft={4}
            paddingBottom={4}
            >
              <Text 
              fontSize='2vh'
              //top={"32"}
              textAlign={"center"}
              fontFamily={"arial black"}
              marginBottom={2}
              marginTop={2}
              //h='5'
              >PUBLIC PHASE </Text>
              <Text fontSize={"2vh"} fontFamily={"arial"}>Only 470 NFT will be available during this phase (25 NFT will be used for marketing purpose and 5 for the team).</Text>

          </Stack>


          </Flex>
        </Flex>
      );
}; 


export default MintSection;