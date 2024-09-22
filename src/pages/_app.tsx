import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";

import NavigationBar from "@/components/organisms/navigation-bar/navigation-bar.index";
import TopBar from "@/components/organisms/top-bar/top-bar.index";
import {
  HydrationBoundary,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";

const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <HydrationBoundary state={pageProps.dehydratedState}>
        <ChakraProvider>
          <TopBar />
          <Component {...pageProps} />
          <NavigationBar />
        </ChakraProvider>
      </HydrationBoundary>
    </QueryClientProvider>
  );
}
