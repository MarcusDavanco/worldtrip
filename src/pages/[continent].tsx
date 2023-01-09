import { GetServerSideProps } from "next";
import { ParsedUrlQuery } from "querystring";
import { Flex, Text, Image, HStack, VStack } from "@chakra-ui/react";
import {CitiesPlus100} from "../components/CitiesPlus100";

interface ContinentProps {
  continent: string;
	continentImageName: string;
}

interface QParams extends ParsedUrlQuery {
  continent: string;
	continentImageName: string;
}

export default function Continent({ 
	continent, 
	continentImageName 
}: ContinentProps) {
  return (
		<>
			<Flex position="relative" h="500px" w="100%" bg="neutral.black">
				<Image src={continentImageName} w='100%' objectFit='cover'/>
				<Text
					position="absolute"
					bottom="59px"
					left="50px"
					fontSize="48px"
					color="neutral.white"
					fontWeight="semiBold"
				>
					{continent}
				</Text>
			</Flex>
			<Flex my='20' w='1160px' mx='auto' textAlign='justify'>
				<Text fontWeight='regular' fontSize='24' maxWidth='600' mr='70px'>
					A europa é por convenção um dos seis continentes do mundo.
					Compreendendo a península ocidental da Eurásia, a Europa
					geralmente divide-se da Ásia a leste pela divisória de 
					águas dos montes Urais, o rio Ural, o mar Cáspio, o 
					Cáucaso, e o mar Negro a sudeste
				</Text>
				<HStack spacing='10'>
					<VStack>
						<Text fontSize='48' fontWeight='semiBold' color='yellow.100'>
							50
						</Text>
						<Text fontSize='24' fontWeight='semiBold' color='gray'>
							países
						</Text>
					</VStack>
					<VStack>
						<Text fontSize='48' fontWeight='semiBold' color='yellow.100'>
							60
						</Text>
						<Text fontSize='24' fontWeight='semiBold' color='gray'>
							línguas	
						</Text>
					</VStack>
					<VStack>
						<Text fontSize='48' fontWeight='semiBold' color='yellow.100'>
							27
						</Text>
						<Text fontSize='24' fontWeight='semiBold' color='gray'>
							cidades+100	
						</Text>
					</VStack>
				</HStack>
			</Flex>
			<CitiesPlus100/>
		</>
  );
}

export const getServerSideProps: GetServerSideProps<
  ContinentProps,
  QParams
> = async ({ params }) => {
  const { continent } = params!;
  let continentName = '';
	let continentImageName = '';

  switch (continent) {
    case "europe":
      continentName = "Europa";
			continentImageName = 'Europe.jpg';	
      break;
    case "north-america":
      continentName = "América do Norte";
			continentImageName = 'NorthAmerica.jpg';
      break;
    case "south-america":
      continentName = "América do Sul";
			continentImageName = 'SouthAmerica.jpg';
      break;
    case "asia":
      continentName = "Asia";
			continentImageName = "Asia.jpg"
      break;
    case "africa":
      continentName = "África";
			continentImageName = "Africa.jpg"
      break;
		case "oceania":
      continentName = "Oceania";
			continentImageName = "Oceania.jpg"
      break;

  }

  return {
    props: {
      continent: continentName,
			continentImageName,
    },
  };
};
