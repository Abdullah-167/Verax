import React, { useState } from "react";
import { Flex, Spinner, Box, Image, Spacer } from "@chakra-ui/react";
import { useRouter } from "next/router";

const Navbar = () => {
  const router = useRouter();

  return (
    <Flex
      align="center"
      justify="flex-start"
      my="xs"
      flexDir={["column", "column", "row", "row"]}
      px={["sm", "sm", "lg", "lg"]}
      py="md"
      zIndex={10}
      mt="lg"
      w="100%"
    >
      <Box onClick={() => router.push("/")} w={400} cursor="pointer">
        <Image
          width={400}
          objectFit="cover"
          src="/logo.png"
          alt="verax logo"
          m="0 auto"
        />
      </Box>
      <Spacer />
    </Flex>
  );
};

export default Navbar;
