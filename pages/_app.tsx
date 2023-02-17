import type { AppProps } from "next/app";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import customTheme from "../utils/theme";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";
import "../styles/globals.scss";
import "../fonts/font.css";

const theme = extendTheme(customTheme);

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <GoogleReCaptchaProvider
      reCaptchaKey={process.env.NEXT_PUBLIC_RECAPTCHA_KEY!}
    >
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </GoogleReCaptchaProvider>
  );
}

export default MyApp;
