import { Flex, Text, Link } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Flex
      flexDir="column"
      zIndex={10}
      align="center"
      justify="center"
      my="sm"
      px="xs"
      w="100%"
      fontFamily="Verax"
    >
      <Text fontSize={20} textAlign="center">
        Copyright © {new Date().getFullYear()}, All rights reserved - The
        Butties
      </Text>
    </Flex>
  );
};

export default Footer;
