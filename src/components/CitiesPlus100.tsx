import { Flex, SimpleGrid, Text } from "@chakra-ui/react";
import { CityCard } from "./CityCard";
import { cities } from "../mockdata/cities";

interface CitiesPlus100Props {
  continent: string;
}

interface City {
  image: string;
  flag: string;
  country: string;
  city: string;
}

export const CitiesPlus100 = ({ continent }: CitiesPlus100Props) => {
  return (
    <>
      <Flex w="1160px" mx="auto" flexDir="column">
        <Text fontSize="36px" fontWeight="medium" mb="10">
          Cidades +100
        </Text>
        <SimpleGrid columns={4} spacing={12} h="100%" pb="35px">
          {cities[continent].map((city: any, index: number) => {
            return (
              <CityCard
                key={index}
                image={city.image}
                city={city.city}
                country={city.country}
                flag={city.flag}
              />
            );
          })}
        </SimpleGrid>
      </Flex>
    </>
  );
};
