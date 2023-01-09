import { Box, Image, Flex, Text } from '@chakra-ui/react'

interface CityCardProps {
	image: string;
	city: string;
	country: string;
	flag: string;
}


export const CityCard = ({ image, city, country, flag }: CityCardProps) => {
	return (
		<Box 
			h='279px' 
			w='256px' 
			border='1px solid' 
			borderRadius='4px' 
			color='yellow.50'
			mb='18px'
		>
			<Image 
				src={image}
				h='173px' 
				w='256px' 
				objectFit='cover'
			/>
			<Flex px='6' pt='18px' pb='25px' justify='spaceBetween'>
				<Flex dir='column' mb='3'>
					<Text fontSize='25' fontWeight='semiBold' lineHeight='25'>
						{city}
					</Text>
					<Text fontSize='16' fontWeight='medium' lineHeight='26'>
						{country}
					</Text>
				</Flex>
				<Image 
					src={flag}
					borderRadius='full' 
					h='30' 
					w='30' 
				/>
			</Flex>
		</Box>
		)
}

