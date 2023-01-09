import { HStack, Image, VStack, Text, Box, flexbox } from "@chakra-ui/react";
import { Flex } from "@chakra-ui/react";
import Logo from "../../public/Logo.svg";
import CocktailIcon from "../icons/CocktailIcon";
import SurfIcon from "../icons/SurfIcon";
import BuildingIcon from "../icons/BuildingIcon";
import MuseumIcon from "../icons/MuseumIcon";
import EarthIcon from "../icons/EarthIcon";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Image src="/Banner.jpg" alt="Banner" w="100%" />
      <Flex my="20" justify="center">
        <HStack w="1160px" justify="space-between">
          <VStack spacing="6">
            <CocktailIcon color="yellow.100" h="85px" w="85px" />
            <Text fontWeight="semibold" color="neutral.gray">
              vida noturna
            </Text>
          </VStack>
          <VStack spacing="6" marginInlineStart="0 !important">
            <SurfIcon color="yellow.100" h="85px" w="85px" />
            <Text fontWeight="semibold" color="neutral.gray">
              praia
            </Text>
          </VStack>
          <VStack spacing="6" marginInlineStart="0 !important">
            <BuildingIcon color="yellow.100" h="85px" w="85px" />
            <Text fontWeight="semibold" color="neutral.gray">
              moderno
            </Text>
          </VStack>
          <VStack spacing="6" marginInlineStart="0 !important">
            <MuseumIcon color="yellow.100" h="85px" w="85px" />
            <Text fontWeight="semibold" color="neutral.gray">
              clássico
            </Text>
          </VStack>
          <VStack spacing="6" marginInlineStart="0 !important">
            <EarthIcon color="yellow.100" h="85px" w="85px" />
            <Text fontWeight="semibold" color="neutral.gray">
              e mais...
            </Text>
          </VStack>
        </HStack>
      </Flex>
      <Flex w="100%" justify="center">
        <Box borderBottomWidth="2px" borderColor="neutral.gray" w="90px" />
      </Flex>
      <Flex justify="center">
        <Text
          fontWeight="normal"
          fontSize="36"
          lineHeight="54px"
          textAlign="center"
          my="52px"
        >
          Vamos nessa?
          <br />
          Então escolha seu continente
        </Text>
      </Flex>
      <Flex mb="10" w="1240px" mx="auto">
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={0}
          slidesPerView={1}
          pagination={{ clickable: true }}
          navigation
          loop={true}
        >
          <SwiperSlide>
            <Link href="/europe">
              <Flex justify="center" position="relative">
                <Image src="/Europe.jpg" alt="Banner" w="1240px" h="450" />
                <Text
                  color="neutral.white"
                  position="absolute"
                  fontWeight="bold"
                  fontSize="48"
                  top="180px"
                >
                  Europa
                </Text>
                <Text
                  color="neutral.white"
                  position="absolute"
                  fontWeight="bold"
                  fontSize="24"
                  top="263px"
                >
                  O continente mais antigo.
                </Text>
              </Flex>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link href="/oceania">
              <Flex justify="center" position="relative">
                <Image src="/Oceania.jpg" alt="Banner" w="1240px" h="450" />
                <Text
                  color="neutral.white"
                  position="absolute"
                  fontWeight="bold"
                  fontSize="48"
                  top="180px"
                >
                  Oceania
                </Text>
                <Text
                  color="neutral.white"
                  position="absolute"
                  fontWeight="bold"
                  fontSize="24"
                  top="263px"
                >
                  O novíssimo mundo
                </Text>
              </Flex>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link href="/north-america">
              <Flex justify="center" position="relative">
                <Image
                  src="/NorthAmerica.jpg"
                  alt="Banner"
                  w="1240px"
                  h="450"
                />
                <Text
                  color="neutral.white"
                  position="absolute"
                  fontWeight="bold"
                  fontSize="48"
                  top="180px"
                >
                  América do Norte
                </Text>
                <Text
                  color="neutral.white"
                  position="absolute"
                  fontWeight="bold"
                  fontSize="24"
                  top="263px"
                >
                  O centro do capitalistmo
                </Text>
              </Flex>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link href="/south-america">
              <Flex justify="center" position="relative">
                <Image
                  src="/SouthAmerica.jpg"
                  alt="Banner"
                  w="1240px"
                  h="450"
                />
                <Text
                  color="neutral.white"
                  position="absolute"
                  fontWeight="bold"
                  fontSize="48"
                  top="180px"
                >
                  América do Sul
                </Text>
                <Text
                  color="neutral.white"
                  position="absolute"
                  fontWeight="bold"
                  fontSize="24"
                  top="263px"
                >
                  O paraíso tropical
                </Text>
              </Flex>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link href="/asia">
              <Flex justify="center" position="relative">
                <Image
                  src="/Asia.jpg"
                  alt="Banner"
                  w="1240px"
                  h="450"
                  objectFit="cover"
                />
                <Text
                  color="neutral.white"
                  position="absolute"
                  fontWeight="bold"
                  fontSize="48"
                  top="180px"
                >
                  Ásia
                </Text>
                <Text
                  color="neutral.white"
                  position="absolute"
                  fontWeight="bold"
                  fontSize="24"
                  top="263px"
                >
                  Cultura milenar
                </Text>
              </Flex>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link href="/africa">
              <Flex justify="center" position="relative">
                <Image
                  src="/Africa.jpg"
                  alt="Banner"
                  w="1240px"
                  h="450"
                  objectFit="cover"
                />
                <Text
                  color="neutral.white"
                  position="absolute"
                  fontWeight="bold"
                  fontSize="48"
                  top="180px"
                >
                  África
                </Text>
                <Text
                  color="neutral.white"
                  position="absolute"
                  fontWeight="bold"
                  fontSize="24"
                  top="263px"
                >
                  Selvagem
                </Text>
              </Flex>
            </Link>
          </SwiperSlide>
        </Swiper>
      </Flex>
    </>
  );
}
