import "@/styles/globals.css";
import "@/styles/icons.css";
import "swiper/css";
import "react-toastify/dist/ReactToastify.css";
import type { AppProps } from "next/app";
import { Layout } from "@/components";
import { HydrationBoundary, QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ToastContainer } from "react-toastify";
import { useState } from "react";
import { ModalContextProvider } from "@/store/ModalContext";
import AuthContextProvider from "@/store/AuthContext";

export default function App({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            refetchOnWindowFocus: false,
            refetchIntervalInBackground: false,
            retry: false,
            staleTime: 60 * 1000,
          },
        },
      }),
  );

  return (
    <QueryClientProvider client={queryClient}>
      <HydrationBoundary state={pageProps.dehydratedState}>
        <AuthContextProvider>
          <ModalContextProvider>
            <div id={"portal"}></div>
            <Layout>
              <Component {...pageProps} />
              <ToastContainer
                // autoClose={true}
                hideProgressBar={false}
                closeOnClick={true}
                draggable={false}
                theme="light"
                position="top-right"
              />
            </Layout>
          </ModalContextProvider>
        </AuthContextProvider>
      </HydrationBoundary>
    </QueryClientProvider>
  );
}
