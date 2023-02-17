import { Flex, Icon, Link } from "@chakra-ui/react";
import { BsTelegram } from "react-icons/bs";
import { FaTwitterSquare } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { IoMdGlobe } from "react-icons/io";
import { BsDiscord } from "react-icons/bs";

const NetworkNav = () => {
  const networkItems = [
    {
      icon: (
        <Icon
          as={RiInstagramFill}
          w={[25, 25, 35, 35]}
          color="white"
          h={[25, 25, 35, 35]}
        />
      ),
      link: "https://www.instagram.com/veraxworld/",
    },
    {
      icon: (
        <Icon
          as={FaTwitterSquare}
          w={[25, 25, 35, 35]}
          color="white"
          h={[25, 25, 35, 35]}
        />
      ),
      link: "https://twitter.com/veraxltd",
    },
    {
      icon: (
        <Icon
          as={BsTelegram}
          w={[25, 25, 35, 35]}
          color="white"
          h={[25, 25, 35, 35]}
        />
      ),
      link: "https://t.me/veraxworld",
    },
    {
      icon: (
        <Icon
          as={BsDiscord}
          w={[25, 25, 35, 35]}
          color="white"
          h={[25, 25, 35, 35]}
        />
      ),
      link: "https://discord.gg/Yge5jdm8MJ",
    },
    {
      icon: (
        <Icon
          as={IoMdGlobe}
          w={[25, 25, 35, 35]}
          color="white"
          h={[25, 25, 35, 35]}
        />
      ),
      link: "https://www.veraxworld.com/",
    },
  ];

  return (
    <Flex flexDir="row" zIndex={10} align="center" justify="center" my="sm">
      {networkItems.map((network, key) => {
        return (
          <Link
            isExternal
            mx="sm"
            href={network.link}
            key={key}
            transition="transform ease 0.5s"
            cursor="pointer"
            _hover={{
              transform: "scale(1.2)",
            }}
          >
            {network.icon}
          </Link>
        );
      })}
    </Flex>
  );
};

export default NetworkNav;
