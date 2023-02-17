import { Flex, Box, Text } from "@chakra-ui/react";

const ProcessDotLineContent = ({ title }: any) => {
  return (
    <Flex my="md" h="16">
      <Box
        w={5}
        h={5}
        borderRadius={2}
        bgColor="white"
        position="relative"
        left={-2}
        top="1"
      />
      <Flex
        /*}
        _hover={{
          transform: "scale(1.08)",
        }} 
      */
        transition="all ease 0.5s"
        flexDir="column"
        w={1000}
        position="absolute"
        left={30}
      >
        <Text
          w="100%"
          fontSize={[13, 30, 20, 22]}
          textAlign="left"
          fontFamily="Arial Black"
        >
          {title}
        </Text>
      </Flex>
    </Flex>
  );
};

export default ProcessDotLineContent;
