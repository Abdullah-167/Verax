import {
  Flex,
  Image,
  Text,
  Box,
  chakra,
  UnorderedList,
  ListItem,
  Link,
  useToast,
  Input,
  Button,
  Center,
} from "@chakra-ui/react";
import NetworkNav from "../NetworkNav/NetworkNav";
import { useState } from "react";
import ReactPlayer from "react-player";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import axios from "../../lib/api";

const WhySection = () => {
  const [userMail, setUserMail] = useState<string>("");
  const { executeRecaptcha } = useGoogleReCaptcha();

  const toast = useToast();

  const saveUserMail = async (e: any) => {
    e.preventDefault();
    if (!executeRecaptcha) {
      return;
    }
    const result = await executeRecaptcha("sendmail");
    if (result) {
      try {
        await axios.post(`/email`, {
          token: result,
          email: userMail,
        });
        setUserMail("");
        toast({
          description: "Successfully registered !",
          status: "success",
          duration: 4000,
          isClosable: true,
        });
      } catch {
        toast({
          description: "An error occured, please try again...",
          status: "error",
          duration: 4000,
          isClosable: true,
        });
      }
    } else {
      toast({
        description:
          "An error occured with the robots verification, please try again...",
        status: "error",
        duration: 4000,
        isClosable: true,
      });
    }
  };

  return (
      <Flex flexGrow={'15'} align="center" justify="center" flex={1} position={"relative"}
        ><Text
          flexGrow={'15'}
          fontSize={'10vw'}
          top={'5'}
          position='absolute'
          textTransform="uppercase"
          textAlign="center"
          fontFamily="Arial-black"
          flexWrap={'wrap'}
          background={"transparent"}
          >
          WIN A V LIST
        </Text>
        
      <Flex top={"64"} position='absolute' align="center" justify="center" h={"100"} w={"400"}>
        <Input
          placeholder="your@mail.com"
          required
          type="email"
          fontSize={15}
          width={[200, 200, 350, 350]}
          value={userMail}
          fontFamily="arial"
          onChange={(e) => setUserMail(e.target.value)}
        />
      
      <Flex position='absolute' justify="center">

      <Button
        flexDir={'column'}
        fontSize={20}
        mx="lg"
        top='76'
        alignItems={"center"}
        type="submit"
        fontFamily="verax"
        margin={"0"}
        px={8}
        py={4}
        mb={["md", "md", 0, 0]}
          bgColor="rgb(15,15,15)"
            _hover={{
            bgColor: "rgb(97,97,97)",
        }}
          >
            Subscribe
          </Button>

      </Flex >      
          <Image
            w="40"
            position="absolute"
            top={"72"}
            alignContent={"flex-end"}
            align={"center"}
            objectFit="cover"
            src="/logo.png"
            alt="verax logo"
            />
          <Flex flexDir="column" position={"absolute"} zIndex={10} justify="center" top={"80"} margin={"auto"} fontFamily="MontserratBold" >
            <NetworkNav />
            <Text fontSize={"1.7vh"} fontFamily={"arial"} textAlign="center" >
              © {new Date().getFullYear()} QUANTUM AGENCY SÁRL
            </Text>
          </Flex>
        </Flex>

    </Flex>
          );
      };

export default WhySection;
