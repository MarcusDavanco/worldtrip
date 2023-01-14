import { Box, Image, Flex, Text } from "@chakra-ui/react";

interface CityCardProps {
  image: string;
  city: string;
  country: string;
  flag: string;
}

export const CityCard = ({ image, city, country, flag }: CityCardProps) => {
  return (
    <Box
      h="279px"
      w="256px"
      border="1px solid"
      borderRadius="4"
      color="yellow.50"
    >
      <Image src={image} h="173px" w="256px" objectFit="cover" alt={image} />
      <Flex px="6" pt="18px" pb="25px" justify="space-between" w="100%">
        <Flex flexDir="column">
          <Text
            fontSize="25"
            fontWeight="semibold"
            lineHeight="25px"
            color="neutral.gray"
            mb="3"
          >
            {city}
          </Text>
          <Text
            fontSize="16"
            fontWeight="medium"
            lineHeight="26px"
            color="neutral.info"
          >
            {country}
          </Text>
        </Flex>
        <Image
          src={flag}
          borderRadius="full"
          maxH="30"
          maxW="30"
          objectFit="cover"
          alt="flag"
        />
      </Flex>
    </Box>
  );
};
