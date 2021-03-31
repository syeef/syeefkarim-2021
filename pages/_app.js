import "./styles.scss";
import { ThemeProvider } from "next-themes";
import { motion, AnimateSharedLayout } from "framer-motion";

console.log("appjs");

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  return (
    <AnimateSharedLayout>
      <ThemeProvider enableSystem={true} defaultTheme="system">
        <Component {...pageProps} />
      </ThemeProvider>
    </AnimateSharedLayout>
  );
}
