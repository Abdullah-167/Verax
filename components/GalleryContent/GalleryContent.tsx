import {
  Flex,
  Link,
  Text,
  Image,
  SimpleGrid,
  Badge,
  Icon,
} from "@chakra-ui/react";
import { OpenSeaNFTReactGallery } from "opensea-nft-react-gallery";

const GalleryContent = () => {
  return (
    <Flex
      align="center"
      flex={1}
      justify="flex-start"
      w="100%"
      flexDir="column"
      color="white"
      h={500}
      className="force-white"
      px={["sm", "sm", "lg", "lg"]}
      py="sm"
    >
      <OpenSeaNFTReactGallery collectionMetadataUrl="/metadata.json" />
    </Flex>
  );
};

export default GalleryContent;
