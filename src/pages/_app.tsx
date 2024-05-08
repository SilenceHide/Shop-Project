import "@/styles/globals.css";
import "@/styles/icons.css";
import "swiper/css";
import "react-toastify/dist/ReactToastify.css";
import type { AppProps } from "next/app";
import { Layout } from "@/components";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ToastContainer } from "react-toastify";

export default function App({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
        refetchIntervalInBackground: false,
        retry: false,
      },
    },
  });

  return (
    <QueryClientProvider client={queryClient}>
      <Layout>
        <Component {...pageProps} />
        <ToastContainer
          autoClose={false}
          hideProgressBar={false}
          closeOnClick={true}
          draggable={false}
          theme="light"
          position="top-right"
        />
      </Layout>
    </QueryClientProvider>
  );
}
