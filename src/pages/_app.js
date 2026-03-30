import "@/index.css";
import { Toaster } from "sonner";
import CustomCursor from "@/components/CustomCursor";

export default function App({ Component, pageProps }) {
  return (
    <>
      <CustomCursor />
      <Component {...pageProps} />
      <Toaster position="top-center" richColors />
    </>
  );
}
