import { Flex, Text } from '@chakra-ui/react';
import {CityCard} from './CityCard';

interface City {
	[prop: string]: string
}

interface CitiesPlus100Props {
	cities: City[]
}

export const CitiesPlus100 = ({ cities } : CitiesPlus100Props) => {

	return (
	<>
		<Flex w='1160px' mx='auto'>
			<Text fontSize='36px' fontWeight='medium' mb='10'>
				Cidades +100
			</Text>
			{
				cities?.map(
				city => 
				<CityCard 
					image={city.image}
					flag={city.flag}
					country={city.country}
					city={city.city}
				/>
				)
			}
		</Flex>
	</>	
	)
}
