import "../../styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider, Flex } from "@chakra-ui/react";
import { theme } from "../../theme";
import Logo from "../../public/Logo.svg"
import Link from "next/link"

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme} cssVarsRoot="body">
			<Flex w="100%" py='7' alignItems="center" justifyContent="center">
				<Link href="/">	
					<Logo />
				</Link>
			</Flex>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
