import "../../styles/globals.css";
import type { AppProps } from "next/app";
import { Box, ChakraProvider, Flex, IconButton } from "@chakra-ui/react";
import { theme } from "../../theme";
import Logo from "../../public/Logo.svg";
import { useRouter } from "next/router";
import { CaretLeftIcon } from "../icons/CaretLeftIcon";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  return (
    <ChakraProvider theme={theme} cssVarsRoot="body">
      <Flex justify="center">
        <Flex
          w="1160px"
          py="7"
          alignItems="center"
          justifyContent="space-between"
        >
          {router.asPath !== "/" && (
            <IconButton
              variant="ghost"
              icon={<CaretLeftIcon fontSize="32" />}
              aria-label="return"
              onClick={() => router.push("/")}
              position="absolute"
            />
          )}
          <Box mx="auto">
            <Logo />
          </Box>
        </Flex>
      </Flex>

      <Component {...pageProps} />
    </ChakraProvider>
  );
}
