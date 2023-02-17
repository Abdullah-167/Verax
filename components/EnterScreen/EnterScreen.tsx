import {
  Button,
  Flex,
  Image,
  Input,
  Text,
  chakra,
  useToast,
  Spacer,
} from "@chakra-ui/react";
import { useState } from "react";
import ReactPlayer from "react-player";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import axios from "../../lib/api";

interface EnterScreenProps {
  setEnterScreen: any;
}

const EnterScreen = ({ setEnterScreen }: EnterScreenProps) => {
  const [showVideo, setShowVideo] = useState<boolean>(false);
  const [videoLoaded, setVideoLoaded] = useState<boolean>(false);
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
    <Flex w="100%" h="100%" align="center" justify="center" flex={1}>
      {showVideo ? (
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
              transition: "all ease 0.8s",
              opacity: videoLoaded ? 1 : 0.5,
            }}
            url="/welcome-video.mp4"
            className="video-container"
            playing ={true}
            playsinline
            controls={false}
            onEnded={() => {
              setEnterScreen(true);
            }}
            onReady={() => setVideoLoaded(true)}
          />
          <Button
            fontSize={35}
            size="lg"
            px={20}
            py={10}
            letterSpacing={4}
            colorScheme="blackAlpha"
            variant="solid"
            borderRadius={5}
            bgColor="rgba(0,0,0,0.7)"
            position="fixed"
            fontFamily="Verax"
            zIndex={100}
            transition="all ease 0.5s"
            top="90%"
            left="50%"
            transform="translate(-50%, -50%)"
            onClick={() => {
              setEnterScreen(true);
            }}
          >
            SKIP
          </Button>
        </Flex>
      ) : (
        <Flex
          w="100%"
          h="100%"
          align="center"
          justify="center"
          flex={1}
          flexDir="column"
          px="xs"
          mt="xs"
        >
          <Flex
            w={300}
            h={450}
            top={'auto'}
            align="center"
            justify="center"
            background={"black"}
            display={["flex", "flex", "flex", "flex"]}
          >
            <iframe
              src="/LOGO V.20.html"
              style={{
                backgroundColor:'transparent',
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

          <Button
            fontSize={[25, 25, 35, 35]}
            size="lg"
            px={[22, 22, 20, 20]}
            py={[8, 8, 10, 10]}
            letterSpacing={4}
            mt="sm"
            mb="md"
            variant="solid"
            borderRadius={5}
            bgColor="rgb(15,15,15)"
            _hover={{
              bgColor: "rgb(30,30,30)",
            }}
            fontFamily="Verax"
            transition="all ease 0.5s"
            onClick={() => {
              setShowVideo(true);
            }}
          >
            ENTER
          </Button>
          <chakra.form onSubmit={saveUserMail} mt="md">
            <Flex
              align="center"
              mt={[0, 0, "xs", "xs"]}
              justify="center"
              //w="100%"
              flexDir={["column", "column", "row", "row"]}
            >
            </Flex>
          </chakra.form>
        </Flex>
      )}
    </Flex>
  );
};

export default EnterScreen;
