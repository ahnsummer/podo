import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";

import NavigationBar from "@/components/organisms/navigation-bar/navigation-bar.index";
import TopBar from "@/components/organisms/top-bar/top-bar.index";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";

export default function App({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <HydrationBoundary state={dehydrate(queryClient)}>
        <ChakraProvider>
          <TopBar />
          <Component {...pageProps} />
          <NavigationBar />
        </ChakraProvider>
      </HydrationBoundary>
    </QueryClientProvider>
  );
}
